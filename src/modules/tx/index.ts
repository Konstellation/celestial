// import { toHex } from '../../encoding/hex';
// import { BaseModule } from '../../types/BaseModule';
// import { Context } from '../../types/Context';
// import { BroadcastTxResponse } from './types/broadcastTxResponse';
// import { EncodeObject } from './types/encodeObject';
// import { SignerData } from './types/signerData';
// import { StdFee } from './types/stdFee';
// import { TxRaw } from './types/txRaw';
// import { encodePubkey } from '@cosmjs/proto-signing';

// export default class TxModule extends BaseModule {
//     constructor(ctx: Context) {
//         super(ctx);
//     }

//     public async signAndBroadcast(
//         signerAddress: string,
//         messages: readonly EncodeObject[],
//         fee: StdFee,
//         memo = '',
//     ): Promise<BroadcastTxResponse> {
//         const txRaw = await this.sign(signerAddress, messages, fee, memo);
//         const txBytes = TxRaw.encode(txRaw).finish();
//         return this.broadcastTx(txBytes, this.ctx.broadcastTimeoutMs, this.ctx.broadcastPollIntervalMs);
//     }

//     public async sign(
//         signerAddress: string,
//         messages: readonly EncodeObject[],
//         fee: StdFee,
//         memo: string,
//         explicitSignerData?: SignerData,
//     ): Promise<TxRaw> {
//         let signerData: SignerData;
//         if (explicitSignerData) {
//             signerData = explicitSignerData;
//         } else {
//             const { accountNumber, sequence } = await this.ctx.getSequence(signerAddress);
//             const chainId = await this.ctx.getChainId();
//             signerData = {
//                 accountNumber: accountNumber,
//                 sequence: sequence,
//                 chainId: chainId,
//             };
//         }

//         return this.signDirect(signerAddress, messages, fee, memo, signerData);
//     }

//     private async signDirect(
//         signerAddress: string,
//         messages: readonly EncodeObject[],
//         fee: StdFee,
//         memo: string,
//         { accountNumber, sequence, chainId }: SignerData,
//     ): Promise<TxRaw> {
//         const accountFromSigner = (await this.ctx.signer.getAccounts()).find(
//             account => account.address === signerAddress,
//         );
//         if (!accountFromSigner) {
//             throw new Error('Failed to retrieve account from signer');
//         }
//         const pubkey = encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey));
//         const txBodyEncodeObject: TxBodyEncodeObject = {
//             typeUrl: '/cosmos.tx.v1beta1.TxBody',
//             value: {
//                 messages: messages,
//                 memo: memo,
//             },
//         };
//         const txBodyBytes = this.registry.encode(txBodyEncodeObject);
//         const gasLimit = Int53.fromString(fee.gas).toNumber();
//         const authInfoBytes = makeAuthInfoBytes([pubkey], fee.amount, gasLimit, sequence);
//         const signDoc = makeSignDoc(txBodyBytes, authInfoBytes, chainId, accountNumber);
//         const { signature, signed } = await this.signer.signDirect(signerAddress, signDoc);
//         return TxRaw.fromPartial({
//             bodyBytes: signed.bodyBytes,
//             authInfoBytes: signed.authInfoBytes,
//             signatures: [fromBase64(signature.signature)],
//         });
//     }

//     public async broadcastTx(tx: Uint8Array, timeoutMs = 60_000, pollIntervalMs = 3_000): Promise<BroadcastTxResponse> {
//         let timedOut = false;
//         const txPollTimeout = setTimeout(() => {
//             timedOut = true;
//         }, timeoutMs);

//         const pollForTx = async (txId: string): Promise<BroadcastTxResponse> => {
//             if (timedOut) {
//                 throw new TimeoutError(
//                     `Transaction with ID ${txId} was submitted but was not yet found on the chain. You might want to check later.`,
//                     txId,
//                 );
//             }
//             await sleep(pollIntervalMs);
//             const result = await this.getTx(txId);
//             return result
//                 ? {
//                       code: result.code,
//                       height: result.height,
//                       rawLog: result.rawLog,
//                       transactionHash: txId,
//                       gasUsed: result.gasUsed,
//                       gasWanted: result.gasWanted,
//                   }
//                 : pollForTx(txId);
//         };

//         return new Promise((resolve, reject) =>
//             this.ctx.rpc
//                 .get()
//                 .broadcastTxSync({ tx })
//                 .then(({ hash }) => pollForTx(toHex(hash).toUpperCase()))
//                 .then(resolve, reject)
//                 .finally(() => clearTimeout(txPollTimeout)),
//         );
//     }
// }
export default class TxModule {}
