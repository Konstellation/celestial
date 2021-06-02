import { Modules } from '../modules';
import { TendermintRpc } from '../modules/tendermint-rpc';
import { OfflineDirectSigner } from './OfflineDirectSigner';

export class Context {
    rpc: TendermintRpc;
    signer: OfflineDirectSigner;
    broadcastTimeoutMs?: number;
    broadcastPollIntervalMs?: number;
    modules?: Modules;

    private chainId = '';

    constructor(rpc: TendermintRpc, signer: OfflineDirectSigner) {
        this.rpc = rpc;
        this.signer = signer;
    }

    async getChainId(): Promise<string> {
        if (!this.chainId) {
            const response = await this.rpc.get().status();
            const chainId = response.nodeInfo.network;
            if (!chainId) throw new Error('Chain ID must not be empty');
            this.chainId = chainId;
        }

        return this.chainId;
    }

    // async getSequence(address: string): Promise<SequenceResponse> {
    //     let accountData;

    //     try {
    //         const { account } = await this.getAccount(address);
    //         accountData = account ? this.accountFromAny(account) : null;
    //     } catch (error) {
    //         if (/rpc error: code = NotFound/i.test(error)) {
    //             accountData = null;
    //         }
    //         throw error;
    //     }

    //     if (!accountData) {
    //         throw new Error('Account does not exist on chain. Send some tokens there before trying to query sequence.');
    //     }
    //     return {
    //         accountNumber: accountData.accountNumber,
    //         sequence: accountData.sequence,
    //     };
    // }
}
