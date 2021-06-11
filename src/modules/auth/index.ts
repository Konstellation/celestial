import { Reader } from 'protobufjs';
import { Context } from '../../types/Context';
import { BaseModule } from '../../types/BaseModule';
import {
    QueryAccountRequest,
    QueryAccountResponse,
    QueryParamsRequest,
    QueryParamsResponse,
} from '../../codec/cosmos/auth/v1beta1/query';

export default class AuthModule extends BaseModule {
    private service = '/cosmos.auth.v1beta1.Query';

    constructor(ctx: Context) {
        super(ctx);
    }

    async Account(address: string): Promise<QueryAccountResponse> {
        const data = QueryAccountRequest.encode({ address }).finish();
        const res = await this.ctx.rpc.queryUnverified(this.service + '/Account', data);
        return QueryAccountResponse.decode(new Reader(res));
    }

    async Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
        const data = QueryParamsRequest.encode(request).finish();
        const res = await this.ctx.rpc.queryUnverified(this.service + '/Params', data);
        return QueryParamsResponse.decode(new Reader(res));
    }
}
