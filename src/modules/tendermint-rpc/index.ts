import { Tendermint34Client, WebsocketClient } from '@cosmjs/tendermint-rpc';
import { RpcClient } from '@cosmjs/tendermint-rpc/build/rpcclients';

export class TendermintRpc {
    private client?: Tendermint34Client;
    private chainId = '';

    constructor(client: Tendermint34Client) {
        this.client = client;
    }

    get(): Tendermint34Client {
        if (!this.client) {
            throw Error('Tendermint client is offline');
        }
        return this.client;
    }

    static async connect(url: string, isHttp: boolean): Promise<TendermintRpc> {
        let tmClient;
        if (isHttp) {
            tmClient = await Tendermint34Client.connect(url);
        } else {
            const rpc = new WebsocketClient(url);
            tmClient = await Tendermint34Client.create(rpc);
        }

        return new this(tmClient);
    }

    static async create(rpc: RpcClient): Promise<TendermintRpc> {
        const tmClient = await Tendermint34Client.create(rpc);
        return new this(tmClient);
    }

    async queryUnverified(path: string, request: Uint8Array): Promise<Uint8Array> {
        const response = await this.get().abciQuery({
            path,
            data: request,
            prove: false,
        });

        if (response.code) {
            throw new Error(`Query failed with (${response.code}): ${response.log}`);
        }

        return response.value;
    }

    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array> {
        const path = `/${service}/${method}`;
        return this.queryUnverified(path, data);
    }

    async getChainId(): Promise<string> {
        if (!this.chainId) {
            const response = await this.get().status();
            const chainId = response.nodeInfo.network;
            if (!chainId) throw new Error('Chain ID must not be empty');
            this.chainId = chainId;
        }

        return this.chainId;
    }
}
