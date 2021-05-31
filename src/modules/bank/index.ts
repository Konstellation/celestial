import { QueryBalanceRequest } from './types/QueryBalanceRequest';
import { Reader } from 'protobufjs';
import { QueryBalanceResponse } from './types/QueryBalanceResponse';
import { Context } from '../../types/Context';
import { BaseModule } from '../../types/BaseModule';

export default class BankModule extends BaseModule {
    private service = '/cosmos.bank.v1beta1.Query';

    constructor(ctx: Context) {
        super(ctx);
    }

    async getBalance({ address, denom }: { address: string; denom: string }) {
        const data = QueryBalanceRequest.encode({ address, denom }).finish();
        const res = await this.ctx.rpc.queryUnverified(this.service + '/Balance', data);
        return QueryBalanceResponse.decode(new Reader(res));
    }
}
