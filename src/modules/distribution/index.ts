import { QueryClientImpl } from '../../codec/cosmos/distribution/v1beta1/query';
import {
    MsgFundCommunityPool,
    MsgSetWithdrawAddress,
    MsgWithdrawDelegatorReward,
    MsgWithdrawValidatorCommission,
} from '../../codec/cosmos/distribution/v1beta1/tx';
import { Context } from '../../types/Context';
import { BroadcastTxResponse } from '../../types/broadcastTxResponse';
import { buildMsgFundCommunityPool } from './messages/MsgFundCommunityPool';
import { buildMsgSetWithdrawAddress } from './messages/MsgSetWithdrawAddress';
import { buildMsgWithdrawDelegatorReward } from './messages/MsgWithdrawDelegatorReward';
import { buildMsgWithdrawValidatorCommission } from './messages/MsgWithdrawValidatorCommission';

interface MsgClient {
    SetWithdrawAddress(request: MsgSetWithdrawAddress): Promise<BroadcastTxResponse> | undefined;
    WithdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<BroadcastTxResponse> | undefined;
    WithdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<BroadcastTxResponse> | undefined;
    FundCommunityPool(request: MsgFundCommunityPool): Promise<BroadcastTxResponse> | undefined;
}

export default class DistributionModule {
    queries: QueryClientImpl;
    messages: MsgClient;

    constructor(ctx: Context) {
        this.queries = new QueryClientImpl(ctx.rpc);
        //TODO fix fees
        this.messages = {
            SetWithdrawAddress: (request: MsgSetWithdrawAddress) => {
                return ctx.modules?.tx?.signAndBroadcast(
                    ctx.signerAddress,
                    [buildMsgSetWithdrawAddress(request)],
                    ctx.fees.delegate,
                );
            },
            WithdrawDelegatorReward: (request: MsgWithdrawDelegatorReward) => {
                return ctx.modules?.tx?.signAndBroadcast(
                    ctx.signerAddress,
                    [buildMsgWithdrawDelegatorReward(request)],
                    ctx.fees.delegate,
                );
            },
            WithdrawValidatorCommission: (request: MsgWithdrawValidatorCommission) => {
                return ctx.modules?.tx?.signAndBroadcast(
                    ctx.signerAddress,
                    [buildMsgWithdrawValidatorCommission(request)],
                    ctx.fees.delegate,
                );
            },
            FundCommunityPool: (request: MsgFundCommunityPool) => {
                return ctx.modules?.tx?.signAndBroadcast(
                    ctx.signerAddress,
                    [buildMsgFundCommunityPool(request)],
                    ctx.fees.delegate,
                );
            },
        };
    }
}
