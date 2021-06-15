import {
    MsgFundCommunityPool,
    MsgSetWithdrawAddress,
    MsgWithdrawDelegatorReward,
    MsgWithdrawValidatorCommission,
} from '../../codec/cosmos/distribution/v1beta1/tx';
import { BroadcastTxResponse } from '../../types/broadcastTxResponse';
import { Context } from '../../types/Context';

enum DistributionMsg {
    SetWithdrawAddress = 'SetWithdrawAddress',
    WithdrawDelegatorReward = 'WithdrawDelegatorReward',
    WithdrawValidatorCommission = 'WithdrawValidatorCommission',
    FundCommunityPool = 'FundCommunityPool',
}

interface MsgClient {
    [DistributionMsg.SetWithdrawAddress](request: MsgSetWithdrawAddress): Promise<BroadcastTxResponse> | undefined;
    [DistributionMsg.WithdrawDelegatorReward](
        request: MsgWithdrawDelegatorReward,
    ): Promise<BroadcastTxResponse> | undefined;
    [DistributionMsg.WithdrawValidatorCommission](
        request: MsgWithdrawValidatorCommission,
    ): Promise<BroadcastTxResponse> | undefined;
    [DistributionMsg.FundCommunityPool](request: MsgFundCommunityPool): Promise<BroadcastTxResponse> | undefined;
}

export class MsgClientImpl implements MsgClient {
    private package = '/cosmos.distribution.v1beta1';
    protected registryTypes: ReadonlyArray<[string, any]> = [
        [`${this.package}.Msg${DistributionMsg.FundCommunityPool}`, MsgFundCommunityPool],
        [`${this.package}.Msg${DistributionMsg.SetWithdrawAddress}`, MsgSetWithdrawAddress],
        [`${this.package}.Msg${DistributionMsg.WithdrawDelegatorReward}`, MsgWithdrawDelegatorReward],
        [`${this.package}.Msg${DistributionMsg.WithdrawValidatorCommission}`, MsgWithdrawValidatorCommission],
    ];

    ctx: Context;

    constructor(ctx: Context) {
        this.ctx = ctx;
    }

    [DistributionMsg.SetWithdrawAddress](request: MsgSetWithdrawAddress) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            this.ctx.signerAddress,
            [
                {
                    typeUrl: `${this.package}.Msg${DistributionMsg.SetWithdrawAddress}`,
                    value: request,
                },
            ],
            this.ctx.fees.delegate,
        );
    }

    [DistributionMsg.WithdrawDelegatorReward](request: MsgWithdrawDelegatorReward) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            this.ctx.signerAddress,
            [
                {
                    typeUrl: `${this.package}.Msg${DistributionMsg.WithdrawDelegatorReward}`,
                    value: request,
                },
            ],
            this.ctx.fees.delegate,
        );
    }

    [DistributionMsg.WithdrawValidatorCommission](request: MsgWithdrawValidatorCommission) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            this.ctx.signerAddress,
            [
                {
                    typeUrl: `${this.package}.Msg${DistributionMsg.WithdrawValidatorCommission}`,
                    value: request,
                },
            ],
            this.ctx.fees.delegate,
        );
    }

    [DistributionMsg.FundCommunityPool](request: MsgFundCommunityPool) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            this.ctx.signerAddress,
            [
                {
                    typeUrl: `${this.package}.Msg${DistributionMsg.FundCommunityPool}`,
                    value: request,
                },
            ],
            this.ctx.fees.delegate,
        );
    }
}
