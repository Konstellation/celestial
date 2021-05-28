import { TendermintRpc } from '../tendermint-rpc';
import { QueryBalanceRequest } from './types/QueryBalanceRequest';
import { Reader } from 'protobufjs';
import { QueryBalanceResponse } from './types/QueryBalanceResponse';

export default class BankModule {
    private service = '/cosmos.bank.v1beta1.Query';

    async getBalance({ address, denom }: { address: string; denom: string }) {
        const data = QueryBalanceRequest.encode({ address, denom }).finish();
        const res = await TendermintRpc.queryUnverified(this.service + '/Balance', data);
        return QueryBalanceResponse.decode(new Reader(res));
    }
}
