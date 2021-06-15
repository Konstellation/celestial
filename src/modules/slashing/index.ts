import { QueryClientImpl } from '../../codec/cosmos/slashing/v1beta1/query';
import { MsgUnjail } from '../../codec/cosmos/slashing/v1beta1/tx';
import { BroadcastTxResponse } from '../../types/broadcastTxResponse';
import { Context } from '../../types/Context';
import { buildMsgUnjail } from './messages/MsgUnjail';

interface MsgClient {
    Unjail(request: MsgUnjail): Promise<BroadcastTxResponse> | undefined;
}

export default class SlashingModule {
    private registryTypes: ReadonlyArray<[string, any]> = [['/cosmos.slashing.v1beta1.MsgUnjail', MsgUnjail]];
    queries: QueryClientImpl;
    messages: MsgClient;

    constructor(ctx: Context) {
        this.registryTypes.forEach(t => ctx.registry.register(t[0], t[1]));
        this.queries = new QueryClientImpl(ctx.rpc);
        // TODO fix fees
        this.messages = {
            Unjail: (request: MsgUnjail) => {
                return ctx.modules?.tx?.signAndBroadcast(
                    ctx.signerAddress,
                    [buildMsgUnjail(request)],
                    ctx.fees.delegate,
                );
            },
        };
    }
}
