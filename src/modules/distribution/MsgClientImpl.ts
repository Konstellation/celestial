import {
    MsgFundCommunityPool,
    MsgSetWithdrawAddress,
    MsgWithdrawDelegatorReward,
    MsgWithdrawValidatorCommission,
} from '../../codec/cosmos/distribution/v1beta1/tx';
import { BroadcastTxResponse } from '../../types/broadcastTxResponse';
import { Context } from '../../types/Context';
import { TsProtoGeneratedType } from '../../types/TsProtoGeneratedType';

enum DistributionMsg {
    SetWithdrawAddress = 'SetWithdrawAddress',
    WithdrawDelegatorReward = 'WithdrawDelegatorReward',
    WithdrawValidatorCommission = 'WithdrawValidatorCommission',
    FundCommunityPool = 'FundCommunityPool',
}

interface MsgClient {
    [DistributionMsg.SetWithdrawAddress](
        request: MsgSetWithdrawAddress,
        password: string,
    ): Promise<BroadcastTxResponse> | undefined;
    [DistributionMsg.WithdrawDelegatorReward](
        request: MsgWithdrawDelegatorReward,
        password: string,
    ): Promise<BroadcastTxResponse> | undefined;
    [DistributionMsg.WithdrawValidatorCommission](
        request: MsgWithdrawValidatorCommission,
        password: string,
    ): Promise<BroadcastTxResponse> | undefined;
    [DistributionMsg.FundCommunityPool](
        request: MsgFundCommunityPool,
        password: string,
    ): Promise<BroadcastTxResponse> | undefined;
}

export class MsgClientImpl implements MsgClient {
    private package = '/cosmos.distribution.v1beta1';
    protected registryTypes: ReadonlyArray<[string, TsProtoGeneratedType]> = [
        [`${this.package}.Msg${DistributionMsg.FundCommunityPool}`, MsgFundCommunityPool],
        [`${this.package}.Msg${DistributionMsg.SetWithdrawAddress}`, MsgSetWithdrawAddress],
        [`${this.package}.Msg${DistributionMsg.WithdrawDelegatorReward}`, MsgWithdrawDelegatorReward],
        [`${this.package}.Msg${DistributionMsg.WithdrawValidatorCommission}`, MsgWithdrawValidatorCommission],
    ];
    private ctx: Context;

    constructor(ctx: Context) {
        this.ctx = ctx;
    }

    [DistributionMsg.SetWithdrawAddress](request: MsgSetWithdrawAddress, password: string) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            [
                {
                    typeUrl: `${this.package}.Msg${DistributionMsg.SetWithdrawAddress}`,
                    value: request,
                },
            ],
            this.ctx.fees.delegate,
            password,
        );
    }

    [DistributionMsg.WithdrawDelegatorReward](request: MsgWithdrawDelegatorReward, password: string) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            [
                {
                    typeUrl: `${this.package}.Msg${DistributionMsg.WithdrawDelegatorReward}`,
                    value: request,
                },
            ],
            this.ctx.fees.delegate,
            password,
        );
    }

    [DistributionMsg.WithdrawValidatorCommission](request: MsgWithdrawValidatorCommission, password: string) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            [
                {
                    typeUrl: `${this.package}.Msg${DistributionMsg.WithdrawValidatorCommission}`,
                    value: request,
                },
            ],
            this.ctx.fees.delegate,
            password,
        );
    }

    [DistributionMsg.FundCommunityPool](request: MsgFundCommunityPool, password: string) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            [
                {
                    typeUrl: `${this.package}.Msg${DistributionMsg.FundCommunityPool}`,
                    value: request,
                },
            ],
            this.ctx.fees.delegate,
            password,
        );
    }
}
