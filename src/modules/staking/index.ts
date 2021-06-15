import { Context } from '../../types/Context';
import { QueryClientImpl } from '../../codec/cosmos/staking/v1beta1/query';
import {
    MsgBeginRedelegate,
    MsgCreateValidator,
    MsgDelegate,
    MsgEditValidator,
    MsgUndelegate,
} from '../../codec/cosmos/staking/v1beta1/tx';
import { BroadcastTxResponse } from '../../types/broadcastTxResponse';
import { buildMsgCreateValidator } from './messages/MsgCreateValidator';
import { buildMsgEditValidator } from './messages/MsgEditValidator';
import { buildMsgDelegate } from './messages/MsgDelegate';
import { buildMsgBeginRedelegate } from './messages/MsgBeginRedelegate';
import { buildMsgUndelegate } from './messages/MsgUndelegate';

interface MsgClient {
    CreateValidator(request: MsgCreateValidator): Promise<BroadcastTxResponse> | undefined;
    EditValidator(request: MsgEditValidator): Promise<BroadcastTxResponse> | undefined;
    Delegate(request: MsgDelegate): Promise<BroadcastTxResponse> | undefined;
    BeginRedelegate(request: MsgBeginRedelegate): Promise<BroadcastTxResponse> | undefined;
    Undelegate(request: MsgUndelegate): Promise<BroadcastTxResponse> | undefined;
}

export default class StakingModule {
    private defaultRegistryTypes: ReadonlyArray<[string, any]> = [
        ['/cosmos.staking.v1beta1.MsgBeginRedelegate', MsgBeginRedelegate],
        ['/cosmos.staking.v1beta1.MsgCreateValidator', MsgCreateValidator],
        ['/cosmos.staking.v1beta1.MsgDelegate', MsgDelegate],
        ['/cosmos.staking.v1beta1.MsgEditValidator', MsgEditValidator],
        ['/cosmos.staking.v1beta1.MsgUndelegate', MsgUndelegate],
    ];
    queries: QueryClientImpl;
    messages: MsgClient;

    constructor(ctx: Context) {
        this.defaultRegistryTypes.forEach(t => ctx.registry.register(t[0], t[1]));
        this.queries = new QueryClientImpl(ctx.rpc);
        // TODO fix fees
        this.messages = {
            CreateValidator: (request: MsgCreateValidator) => {
                return ctx.modules?.tx?.signAndBroadcast(
                    ctx.signerAddress,
                    [buildMsgCreateValidator(request)],
                    ctx.fees.delegate,
                );
            },
            EditValidator: (request: MsgEditValidator) => {
                return ctx.modules?.tx?.signAndBroadcast(
                    ctx.signerAddress,
                    [buildMsgEditValidator(request)],
                    ctx.fees.delegate,
                );
            },
            Delegate: (request: MsgDelegate) => {
                return ctx.modules?.tx?.signAndBroadcast(
                    ctx.signerAddress,
                    [buildMsgDelegate(request)],
                    ctx.fees.delegate,
                );
            },
            BeginRedelegate: (request: MsgBeginRedelegate) => {
                return ctx.modules?.tx?.signAndBroadcast(
                    ctx.signerAddress,
                    [buildMsgBeginRedelegate(request)],
                    ctx.fees.delegate,
                );
            },
            Undelegate: (request: MsgUndelegate) => {
                return ctx.modules?.tx?.signAndBroadcast(
                    ctx.signerAddress,
                    [buildMsgUndelegate(request)],
                    ctx.fees.undelegate,
                );
            },
        };
    }
}
