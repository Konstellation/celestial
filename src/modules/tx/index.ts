import { DecodedTxRaw } from '@cosmjs/proto-signing/build/decode';
// @ts-ignore
import Account from '@konstellation/cosmosjs/src/types/Account';
import { toHex } from '../../encoding/hex';
import { Context } from '../../types/Context';
import { BroadcastTxResponse } from '../../types/broadcastTxResponse';
import { EncodeObject } from './types/encodeObject';
import {
    isSearchByHeightQuery,
    isSearchBySentFromOrToQuery,
    isSearchByTagsQuery,
    SearchTxFilter,
    SearchTxQuery,
} from './types/search';
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
import { TxBody, TxRaw } from '../../codec/cosmos/tx/v1beta1/tx';
// import Account from '../../types/Account';
import { Stream } from 'xstream';
import { NewBlockEvent } from '@cosmjs/tendermint-rpc';

export default class TxModule {
    public ctx: Context;

    constructor(ctx: Context) {
        this.ctx = ctx;
    }

    public async signAndBroadcast(
        messages: readonly EncodeObject[],
        fee: StdFee,
        account: Account,
        memo = '',
    ): Promise<BroadcastTxResponse> {
        const txRaw = await this.sign(messages, fee, memo, account);
        const txBytes = TxRaw.encode(txRaw).finish();
        return this.broadcastTx(txBytes, this.ctx.broadcastTimeoutMs, this.ctx.broadcastPollIntervalMs);
    }

    public async sign(
        messages: readonly EncodeObject[],
        fee: StdFee,
        memo: string,
        account: Account,
        explicitSignerData?: SignerData,
    ): Promise<TxRaw> {
        let signerData: SignerData = { accountNumber: 1, sequence: 2, chainId: '1' };
        if (explicitSignerData) {
            signerData = explicitSignerData;
        } else {
            const { accountNumber, sequence } = await this.ctx.getSequence(account.getAddress());
            const chainId = await this.ctx.rpc.getChainId();
            signerData = {
                accountNumber: accountNumber,
                sequence: sequence,
                chainId: chainId,
            };
        }
        const { accountNumber, sequence, chainId } = signerData;
        // const account = this.ctx.modules?.account.importKeystore(this.ctx.keystore!, password);

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
                .then(({ hash, ...rest }) => {
                    if (rest.code) reject(rest.log);
                    return pollForTx(toHex(hash).toUpperCase());
                })
                .then(resolve, reject)
                .finally(() => clearTimeout(txPollTimeout)),
        );
    }

    public async getTx(id: string): Promise<IndexedTx | null> {
        const results = await this.txsQuery(`tx.hash='${id}'`);
        return results[0] ?? null;
    }

    public decodeTx(tx: Uint8Array): DecodedTxRaw {
        const txRaw = decodeTxRaw(tx);
        txRaw.body.messages = txRaw.body.messages.map(msg => this.ctx.registry.decode(msg));
        return txRaw;
    }

    public async txsQuery(query: string): Promise<readonly IndexedTx[]> {
        const results = await this.ctx.rpc.get().txSearchAll({ query });
        return results.txs.map(tx => {
            const [{ events }] = JSON.parse(tx.result.log ?? '[{"events": []}]');
            return {
                height: tx.height,
                hash: toHex(tx.hash).toUpperCase(),
                code: tx.result.code,
                rawLog: tx.result.log || '',
                events,
                tx: this.decodeTx(tx.tx),
                gasUsed: tx.result.gasUsed,
                gasWanted: tx.result.gasWanted,
            };
        });
    }

    public async queryOutboundTxs(address: string): Promise<readonly IndexedTx[]> {
        return this.txsQuery(`message.sender='${address}'`);
    }

    public async queryInboundTxs(address: string): Promise<readonly IndexedTx[]> {
        return this.txsQuery(`transfer.recipient='${address}'`);
    }

    public async searchTx(query: SearchTxQuery, filter: SearchTxFilter = {}): Promise<readonly IndexedTx[]> {
        const minHeight = filter.minHeight || 0;
        const maxHeight = filter.maxHeight || Number.MAX_SAFE_INTEGER;

        if (maxHeight < minHeight) return []; // optional optimization

        function withFilters(originalQuery: string): string {
            return `${originalQuery} AND tx.height>=${minHeight} AND tx.height<=${maxHeight}`;
        }

        let txs: readonly IndexedTx[];

        if (isSearchByHeightQuery(query)) {
            txs =
                query.height >= minHeight && query.height <= maxHeight
                    ? await this.txsQuery(`tx.height${query.condition}${query.height}`)
                    : [];
        } else if (isSearchBySentFromOrToQuery(query)) {
            const sentQuery = withFilters(`message.module='bank' AND transfer.sender='${query.sentFromOrTo}'`);
            const receivedQuery = withFilters(`message.module='bank' AND transfer.recipient='${query.sentFromOrTo}'`);
            const [sent, received] = await Promise.all(
                [sentQuery, receivedQuery].map(rawQuery => this.txsQuery(rawQuery)),
            );
            const sentHashes = sent.map(t => t.hash);
            txs = [...sent, ...received.filter(t => !sentHashes.includes(t.hash))];
        } else if (isSearchByTagsQuery(query)) {
            const rawQuery = withFilters(query.tags.map(t => `${t.key}='${t.value}'`).join(' AND '));
            txs = await this.txsQuery(rawQuery);
        } else {
            throw new Error('Unknown query type');
        }

        const filtered = txs.filter(tx => tx.height >= minHeight && tx.height <= maxHeight);
        return filtered;
    }

    public subscribeNewBlock(): Stream<NewBlockEvent> {
        return this.ctx.rpc.get().subscribeNewBlock();
    }
}
