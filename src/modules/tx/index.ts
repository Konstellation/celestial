import { toHex } from '../../encoding/hex';
import { Context } from '../../types/Context';
import { BroadcastTxResponse } from '../../types/broadcastTxResponse';
import { EncodeObject } from './types/encodeObject';
import { SignerData } from './types/signerData';
import { StdFee } from './types/stdFee';
import { encodePubkey, makeSignDoc, makeAuthInfoBytes, decodeTxRaw } from '@cosmjs/proto-signing';
import { encodeSecp256k1Pubkey } from '@cosmjs/amino';
import { Int53 } from '@cosmjs/math';
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
        signerAddress: string,
        messages: readonly EncodeObject[],
        fee: StdFee,
        memo = '',
        publicKey?: Uint8Array,
    ): Promise<BroadcastTxResponse> {
        const txRaw = await this.sign(signerAddress, messages, fee, memo, publicKey);
        const txBytes = TxRaw.encode(txRaw).finish();
        return this.broadcastTx(txBytes, this.ctx.broadcastTimeoutMs, this.ctx.broadcastPollIntervalMs);
    }

    public async sign(
        signerAddress: string,
        messages: readonly EncodeObject[],
        fee: StdFee,
        memo: string,
        publicKey?: Uint8Array,
        explicitSignerData?: SignerData,
    ): Promise<TxRaw> {
        let signerData: SignerData = { accountNumber: 1, sequence: 2, chainId: '1' };
        if (explicitSignerData) {
            signerData = explicitSignerData;
        } else {
            const { accountNumber, sequence } = await this.ctx.getSequence(signerAddress);
            const chainId = await this.ctx.rpc.getChainId();
            signerData = {
                accountNumber: accountNumber,
                sequence: sequence,
                chainId: chainId,
            };
        }

        return this.signDirect(signerAddress, messages, fee, memo, signerData, publicKey);
    }

    private async signDirect(
        signerAddress: string,
        messages: readonly EncodeObject[],
        fee: StdFee,
        memo: string,
        { accountNumber, sequence, chainId }: SignerData,
        publicKey?: Uint8Array,
    ): Promise<TxRaw> {
        const accountFromSigner = (await this.ctx.signer.getAccounts()).find(
            (account) => account.address === signerAddress,
        );
        // if (!accountFromSigner) {
        //     throw new Error('Failed to retrieve account from signer');
        // }
        if (accountFromSigner)
            console.log('menmonic pub: ', encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey)));
        if (!publicKey) throw new Error('PUB KEY NO');
        const pubkey = encodePubkey(encodeSecp256k1Pubkey(publicKey));
        console.log('keystore pubkey: ', pubkey);
        const txBodyEncodeObject: TxBodyEncodeObject = {
            typeUrl: '/cosmos.tx.v1beta1.TxBody',
            value: {
                messages: messages,
                memo: memo,
            },
        };
        const txBodyBytes = this.ctx.registry.encode(txBodyEncodeObject);
        const gasLimit = Int53.fromString(fee.gas).toNumber();
        const authInfoBytes = makeAuthInfoBytes([pubkey], fee.amount, gasLimit, sequence);
        const signDoc = makeSignDoc(txBodyBytes, authInfoBytes, chainId, accountNumber);
        const { signature, signed } = await this.ctx.signer.signDirect(signerAddress, signDoc);
        return TxRaw.fromPartial({
            bodyBytes: signed.bodyBytes,
            authInfoBytes: signed.authInfoBytes,
            signatures: [fromBase64(signature.signature)],
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
        console.log(results);
        return results.txs.map((tx) => {
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
