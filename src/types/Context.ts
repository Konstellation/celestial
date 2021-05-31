import { TendermintRpc } from '../modules/tendermint-rpc';

export class Context {
    rpc: TendermintRpc;
    chainId = '';

    constructor(rpc: TendermintRpc) {
        this.rpc = rpc;
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
}
