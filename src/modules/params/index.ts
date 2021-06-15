import { QueryClientImpl } from '../../codec/cosmos/params/v1beta1/query';
import { Context } from '../../types/Context';

export default class ParamsModule {
    queries: QueryClientImpl;

    constructor(ctx: Context) {
        this.queries = new QueryClientImpl(ctx.rpc);
    }
}
