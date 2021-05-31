import { QueryAccountRequest } from './types/QueryAccountRequest';
import { Reader } from 'protobufjs';
import { Context } from '../../types/Context';
import { BaseModule } from '../../types/BaseModule';

export default class AuthModule extends BaseModule {
    private service = '/cosmos.auth.v1beta1.Query';

    constructor(ctx: Context) {
        super(ctx);
    }

    async getAccount(address: string) {
        const data = QueryAccountRequest.encode(address).finish();
        const res = await this.ctx.rpc.queryUnverified(this.service + '/Account', data);
        return QueryAccountRequest.decode(new Reader(res));
    }
}
