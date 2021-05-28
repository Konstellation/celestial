import { Tendermint34Client } from '@cosmjs/tendermint-rpc';

export class TendermintRpc {
    private static client: Tendermint34Client;

    static get(): Tendermint34Client {
        return TendermintRpc.client;
    }

    static async connect(rpcAddr: string): Promise<void> {
        TendermintRpc.client = await Tendermint34Client.connect(rpcAddr);
    }

    static async queryUnverified(path: string, request: Uint8Array): Promise<Uint8Array> {
        const response = await TendermintRpc.client.abciQuery({
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
