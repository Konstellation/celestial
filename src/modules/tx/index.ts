import { toHex } from '../../encoding/hex';
import { Context } from '../../types/Context';
import { BroadcastTxResponse } from '../../types/broadcastTxResponse';
import { EncodeObject } from './types/encodeObject';
import { SignerData } from './types/signerData';
import { StdFee } from './types/stdFee';
import { encodePubkey, makeSignDoc, makeAuthInfoBytes, decodeTxRaw, makeSignBytes } from '@cosmjs/proto-signing';
import { encodeSecp256k1Pubkey, encodeSecp256k1Signature } from '@cosmjs/amino';
import { Int53 } from '@cosmjs/math';
import { Secp256k1, sha256 } from '@cosmjs/crypto';
import { fromBase64 } from '../../encoding/base64';
import { TxBodyEncodeObject } from './types/TxBodyEncodeObject';
import { sleep } from '@cosmjs/utils';
import { TimeoutError } from '../../types/timeoutError';
import { IndexedTx } from './types/indexedTx';
import { TxRaw } from '../../codec/cosmos/tx/v1beta1/tx';

export default class TxModule {
    private ctx: Context;

    constructor(ctx: Context) {
        this.ctx = ctx;
    }

    public async signAndBroadcast(
        messages: readonly EncodeObject[],
        fee: StdFee,
        password: string,
        memo = '',
    ): Promise<BroadcastTxResponse> {
        const txRaw = await this.sign(messages, fee, memo, password);
        const txBytes = TxRaw.encode(txRaw).finish();
        return this.broadcastTx(txBytes, this.ctx.broadcastTimeoutMs, this.ctx.broadcastPollIntervalMs);
    }

    public async sign(
        messages: readonly EncodeObject[],
        fee: StdFee,
        memo: string,
        password: string,
        explicitSignerData?: SignerData,
    ): Promise<TxRaw> {
        let signerData: SignerData = { accountNumber: 1, sequence: 2, chainId: '1' };
        if (explicitSignerData) {
            signerData = explicitSignerData;
        } else {
            const { accountNumber, sequence } = await this.ctx.getSequence(this.ctx.signerAddress);
            const chainId = await this.ctx.rpc.getChainId();
            signerData = {
                accountNumber: accountNumber,
                sequence: sequence,
                chainId: chainId,
            };
        }

        const { accountNumber, sequence, chainId } = signerData;
        const account = this.ctx.modules?.account.importKeystore(this.ctx.keystore!, password);

        const privkey = account?.getPrivateKey();
        const pubkey = account?.getPublicKey();
        if (!pubkey) throw new Error('Public key is undefined');
        if (!privkey) throw new Error('Private key is undefined');

        const encodedPubKey = encodePubkey(encodeSecp256k1Pubkey(pubkey));
        const txBodyEncodeObject: TxBodyEncodeObject = {
            typeUrl: '/cosmos.tx.v1beta1.TxBody',
            value: {
                messages: messages,
                memo: memo,
            },
        };
        const txBodyBytes = this.ctx.registry.encode(txBodyEncodeObject);
        const gasLimit = Int53.fromString(fee.gas).toNumber();
        const authInfoBytes = makeAuthInfoBytes([encodedPubKey], fee.amount, gasLimit, sequence);
        const signDoc = makeSignDoc(txBodyBytes, authInfoBytes, chainId, accountNumber);
        const signBytes = makeSignBytes(signDoc);
        const hashedMessage = sha256(signBytes);
        const signature = await Secp256k1.createSignature(hashedMessage, privkey);
        const signatureBytes = new Uint8Array([...signature.r(32), ...signature.s(32)]);
        const encodedSignature = encodeSecp256k1Signature(pubkey, signatureBytes);

        return TxRaw.fromPartial({
            bodyBytes: signDoc.bodyBytes,
            authInfoBytes: signDoc.authInfoBytes,
            signatures: [fromBase64(encodedSignature.signature)],
        });
    }

    public async broadcastTx(tx: Uint8Array, timeoutMs = 60_000, pollIntervalMs = 3_000): Promise<BroadcastTxResponse> {
        let timedOut = false;
        const txPollTimeout = setTimeout(() => {
            timedOut = true;
        }, timeoutMs);

        const pollForTx = async (txId: string): Promise<BroadcastTxResponse> => {
            if (timedOut) {
                throw new TimeoutError(
                    `Transaction with ID ${txId} was submitted but was not yet found on the chain. You might want to check later.`,
                    txId,
                );
            }
            await sleep(pollIntervalMs);
            const result = await this.getTx(txId);
            return result
                ? {
                      code: result.code,
                      height: result.height,
                      rawLog: result.rawLog,
                      transactionHash: txId,
                      gasUsed: result.gasUsed,
                      gasWanted: result.gasWanted,
                  }
                : pollForTx(txId);
        };

        return new Promise((resolve, reject) =>
            this.ctx.rpc
                .get()
                .broadcastTxSync({ tx })
                .then(({ hash }) => pollForTx(toHex(hash).toUpperCase()))
                .then(resolve, reject)
                .finally(() => clearTimeout(txPollTimeout)),
        );
    }

    public async getTx(id: string): Promise<IndexedTx | null> {
        const results = await this.txsQuery(`tx.hash='${id}'`);
        return results[0] ?? null;
    }

    public async txsQuery(query: string): Promise<readonly IndexedTx[]> {
        const results = await this.ctx.rpc.get().txSearchAll({ query: query });
        return results.txs.map(tx => {
            return {
                height: tx.height,
                hash: toHex(tx.hash).toUpperCase(),
                code: tx.result.code,
                rawLog: tx.result.log || '',
                tx: decodeTxRaw(tx.tx),
                gasUsed: tx.result.gasUsed,
                gasWanted: tx.result.gasWanted,
            };
        });
    }
}
