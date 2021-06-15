import { QueryClientImpl } from '../../codec/cosmos/mint/v1beta1/query';
import { Context } from '../../types/Context';

export default class MintModule {
    queries: QueryClientImpl;

    constructor(ctx: Context) {
        this.queries = new QueryClientImpl(ctx.rpc);
    }
}
