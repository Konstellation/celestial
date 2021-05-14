import { EncodeObject } from './encodeObject';
import { SignerData } from './signerData';
import { StdFee } from './stdFee';
import { TxRaw } from './txRaw';

export default class Tendermint {
    public async sign(
        signerAddress: string,
        messages: readonly EncodeObject[],
        fee: StdFee,
        memo: string,
        explicitSignerData?: SignerData,
    ): Promise<TxRaw> {
        let signerData: SignerData;
        if (explicitSignerData) {
            signerData = explicitSignerData;
        } else {
            const { accountNumber, sequence } = await this.getSequence(signerAddress);
            const chainId = await this.getChainId();
            signerData = {
                accountNumber: accountNumber,
                sequence: sequence,
                chainId: chainId,
            };
        }

        return isOfflineDirectSigner(this.signer)
            ? this.signDirect(signerAddress, messages, fee, memo, signerData)
            : this.signAmino(signerAddress, messages, fee, memo, signerData);
    }

    public async signAndBroadcast(
        signerAddress: string,
        messages: readonly EncodeObject[],
        fee: StdFee,
        memo = '',
    ): Promise<BroadcastTxResponse> {
        const txRaw = await this.sign(signerAddress, messages, fee, memo);
        const txBytes = TxRaw.encode(txRaw).finish();
        return this.broadcastTx(txBytes, this.broadcastTimeoutMs, this.broadcastPollIntervalMs);
    }

    public async getSequence(address: string): Promise<SequenceResponse> {
        const account = await this.getAccount(address);
        if (!account) {
            throw new Error('Account does not exist on chain. Send some tokens there before trying to query sequence.');
        }
        return {
            accountNumber: account.accountNumber,
            sequence: account.sequence,
        };
    }
}
