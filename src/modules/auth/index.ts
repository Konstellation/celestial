import { TendermintRpc } from '../tendermint-rpc';
import { QueryAccountRequest } from './types/QueryAccountRequest';
import { Reader } from 'protobufjs';

export default class AuthModule {
    private service = '/cosmos.auth.v1beta1.Query';

    async getAccount(address: string) {
        const data = QueryAccountRequest.encode(address).finish();
        const res = await TendermintRpc.queryUnverified(this.service + '/Account', data);
        return QueryAccountRequest.decode(new Reader(res));
    }
}
