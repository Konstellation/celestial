import {
    MsgFundCommunityPool,
    MsgSetWithdrawAddress,
    MsgWithdrawDelegatorReward,
    MsgWithdrawValidatorCommission,
} from '../../codec/cosmos/distribution/v1beta1/tx';
import { BroadcastTxResponse } from '../../types/broadcastTxResponse';
import { Context } from '../../types/Context';
import { TsProtoGeneratedType } from '../../types/TsProtoGeneratedType';
// @ts-ignore
import Account from '@konstellation/cosmosjs/src/types/Account';

enum DistributionMsg {
    SetWithdrawAddress = 'SetWithdrawAddress',
    WithdrawDelegatorReward = 'WithdrawDelegatorReward',
    WithdrawValidatorCommission = 'WithdrawValidatorCommission',
    FundCommunityPool = 'FundCommunityPool',
}

interface MsgClient {
    [DistributionMsg.SetWithdrawAddress](
        request: MsgSetWithdrawAddress,
        account: Account,
    ): Promise<BroadcastTxResponse> | undefined;
    [DistributionMsg.WithdrawDelegatorReward](
        request: MsgWithdrawDelegatorReward,
        account: Account,
    ): Promise<BroadcastTxResponse> | undefined;
    [DistributionMsg.WithdrawValidatorCommission](
        request: MsgWithdrawValidatorCommission,
        account: Account,
    ): Promise<BroadcastTxResponse> | undefined;
    [DistributionMsg.FundCommunityPool](
        request: MsgFundCommunityPool,
        account: Account,
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

    [DistributionMsg.SetWithdrawAddress](request: MsgSetWithdrawAddress, account: Account) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            [
                {
                    typeUrl: `${this.package}.Msg${DistributionMsg.SetWithdrawAddress}`,
                    value: request,
                },
            ],
            this.ctx.fees.setWithdrawAddress,
            account,
        );
    }

    [DistributionMsg.WithdrawDelegatorReward](request: MsgWithdrawDelegatorReward, account: Account) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            [
                {
                    typeUrl: `${this.package}.Msg${DistributionMsg.WithdrawDelegatorReward}`,
                    value: request,
                },
            ],
            this.ctx.fees.withdrawDelegatorReward,
            account,
        );
    }

    [DistributionMsg.WithdrawValidatorCommission](request: MsgWithdrawValidatorCommission, account: Account) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            [
                {
                    typeUrl: `${this.package}.Msg${DistributionMsg.WithdrawValidatorCommission}`,
                    value: request,
                },
            ],
            this.ctx.fees.withdrawValidatorCommission,
            account,
        );
    }

    [DistributionMsg.FundCommunityPool](request: MsgFundCommunityPool, account: Account) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            [
                {
                    typeUrl: `${this.package}.Msg${DistributionMsg.FundCommunityPool}`,
                    value: request,
                },
            ],
            this.ctx.fees.fundCommunityPool,
            account,
        );
    }
}
