import { Context } from '../../types/Context';
import { BaseModule } from '../../types/BaseModule';
import { QueryClientImpl } from '../../codec/cosmos/auth/v1beta1/query';

export default class AuthModule {
    queries: QueryClientImpl;

    constructor(ctx: Context) {
        this.queries = new QueryClientImpl(ctx.rpc);
    }
}
