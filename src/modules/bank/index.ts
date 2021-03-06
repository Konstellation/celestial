import { Context } from '../../types/Context';
import { QueryClientImpl } from '../../codec/cosmos/bank/v1beta1/query';
import { MsgClientImpl } from './MsgClientImpl';

export default class BankModule extends MsgClientImpl {
    queries: QueryClientImpl;

    constructor(ctx: Context) {
        super(ctx);
        this.queries = new QueryClientImpl(ctx.rpc);
    }
}
