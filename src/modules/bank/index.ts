import { Context } from '../../types/Context';
import { QueryClientImpl } from '../../codec/cosmos/bank/v1beta1/query';
import { buildMsgSend } from './messages/MsgSend';
import { MsgSend } from '../../codec/cosmos/bank/v1beta1/tx';
import { BroadcastTxResponse } from '../../types/broadcastTxResponse';

interface MsgClient {
    Send(request: MsgSend): Promise<BroadcastTxResponse> | undefined;
}

export default class BankModule {
    queries: QueryClientImpl;
    messages: MsgClient;

    constructor(ctx: Context) {
        this.queries = new QueryClientImpl(ctx.rpc);
        this.messages = {
            Send: (request: MsgSend) => {
                return ctx.modules?.tx?.signAndBroadcast(ctx.signerAddress, [buildMsgSend(request)], ctx.fees.send);
            },
        };
    }
}
