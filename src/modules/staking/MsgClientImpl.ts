import {
    MsgBeginRedelegate,
    MsgCreateValidator,
    MsgDelegate,
    MsgEditValidator,
    MsgUndelegate,
} from '../../codec/cosmos/staking/v1beta1/tx';
import { BroadcastTxResponse } from '../../types/broadcastTxResponse';
import { Context } from '../../types/Context';

enum StakingMsg {
    CreateValidator = 'CreateValidator',
    EditValidator = 'EditValidator',
    Delegate = 'Delegate',
    BeginRedelegate = 'BeginRedelegate',
    Undelegate = 'Undelegate',
}

interface MsgClient {
    [StakingMsg.CreateValidator](request: MsgCreateValidator): Promise<BroadcastTxResponse> | undefined;
    [StakingMsg.EditValidator](request: MsgEditValidator): Promise<BroadcastTxResponse> | undefined;
    [StakingMsg.Delegate](request: MsgDelegate): Promise<BroadcastTxResponse> | undefined;
    [StakingMsg.BeginRedelegate](request: MsgBeginRedelegate): Promise<BroadcastTxResponse> | undefined;
    [StakingMsg.Undelegate](request: MsgUndelegate): Promise<BroadcastTxResponse> | undefined;
}

export class MsgClientImpl implements MsgClient {
    private package = '/cosmos.staking.v1beta1';
    protected registryTypes: ReadonlyArray<[string, any]> = [
        [`${this.package}.Msg${StakingMsg.BeginRedelegate}`, MsgBeginRedelegate],
        [`${this.package}.Msg${StakingMsg.CreateValidator}`, MsgCreateValidator],
        [`${this.package}.Msg${StakingMsg.Delegate}`, MsgDelegate],
        [`${this.package}.Msg${StakingMsg.EditValidator}`, MsgEditValidator],
        [`${this.package}.Msg${StakingMsg.Undelegate}`, MsgUndelegate],
    ];

    ctx: Context;

    constructor(ctx: Context) {
        this.ctx = ctx;
    }

    [StakingMsg.CreateValidator](request: MsgCreateValidator) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            this.ctx.signerAddress,
            [
                {
                    typeUrl: `${this.package}.Msg${StakingMsg.CreateValidator}`,
                    value: request,
                },
            ],
            this.ctx.fees.delegate,
        );
    }
    [StakingMsg.EditValidator](request: MsgEditValidator) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            this.ctx.signerAddress,
            [
                {
                    typeUrl: `${this.package}.Msg${StakingMsg.EditValidator}`,
                    value: request,
                },
            ],
            this.ctx.fees.delegate,
        );
    }
    [StakingMsg.Delegate](request: MsgDelegate) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            this.ctx.signerAddress,
            [
                {
                    typeUrl: `${this.package}.Msg${StakingMsg.Delegate}`,
                    value: request,
                },
            ],
            this.ctx.fees.delegate,
        );
    }
    [StakingMsg.BeginRedelegate](request: MsgBeginRedelegate) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            this.ctx.signerAddress,
            [
                {
                    typeUrl: `${this.package}.Msg${StakingMsg.BeginRedelegate}`,
                    value: request,
                },
            ],
            this.ctx.fees.delegate,
        );
    }
    [StakingMsg.Undelegate](request: MsgUndelegate) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            this.ctx.signerAddress,
            [
                {
                    typeUrl: `${this.package}.Msg${StakingMsg.Undelegate}`,
                    value: request,
                },
            ],
            this.ctx.fees.undelegate,
        );
    }
}
