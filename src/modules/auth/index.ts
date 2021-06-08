import { QueryAccountRequest } from './types/queryAccountRequest';
import { Reader } from 'protobufjs';
import { Context } from '../../types/Context';
import { BaseModule } from '../../types/BaseModule';
import { QueryAccountResponse } from './types/queryAccountResponse';
import { QueryParamsRequest } from './types/queryParamsRequest';
import { QueryParamsResponse } from './types/queryParamsResponse';

export default class AuthModule extends BaseModule {
    private service = '/cosmos.auth.v1beta1.Query';

    constructor(ctx: Context) {
        super(ctx);
    }

    async getAccount(address: string): Promise<QueryAccountResponse> {
        const data = QueryAccountRequest.encode(address).finish();
        const res = await this.ctx.rpc.queryUnverified(this.service + '/Account', data);
        return QueryAccountResponse.decode(new Reader(res));
    }

    async getParams(request: QueryParamsRequest): Promise<QueryParamsResponse> {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.ctx.rpc.queryUnverified(this.service + '/Params', data);
        return promise.then(data => QueryParamsResponse.decode(new Reader(data)));
    }
}
