import { Tendermint34Client } from '@cosmjs/tendermint-rpc';

export class TendermintRpc {
    private client?: Tendermint34Client;

    constructor(client: Tendermint34Client) {
        this.client = client;
    }

    get(): Tendermint34Client {
        if (!this.client) {
            throw Error('Tendermint client is offline');
        }
        return this.client;
    }

    static async connect(rpcAddr: string): Promise<TendermintRpc> {
        const tmClient = await Tendermint34Client.connect(rpcAddr);
        return new this(tmClient);
    }

    async queryUnverified(path: string, request: Uint8Array): Promise<Uint8Array> {
        const response = await this.get().abciQuery({
            path: path,
            data: request,
            prove: false,
        });

        if (response.code) {
            throw new Error(`Query failed with (${response.code}): ${response.log}`);
        }

        return response.value;
    }
}
