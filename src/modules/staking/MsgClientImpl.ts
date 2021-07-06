import {
    MsgBeginRedelegate,
    MsgCreateValidator,
    MsgDelegate,
    MsgEditValidator,
    MsgUndelegate,
} from '../../codec/cosmos/staking/v1beta1/tx';
import { BroadcastTxResponse } from '../../types/broadcastTxResponse';
import { Context } from '../../types/Context';
import { TsProtoGeneratedType } from '../../types/TsProtoGeneratedType';

enum StakingMsg {
    CreateValidator = 'CreateValidator',
    EditValidator = 'EditValidator',
    Delegate = 'Delegate',
    BeginRedelegate = 'BeginRedelegate',
    Undelegate = 'Undelegate',
}

interface MsgClient {
    [StakingMsg.CreateValidator](
        request: MsgCreateValidator,
        password: string,
    ): Promise<BroadcastTxResponse> | undefined;
    [StakingMsg.EditValidator](request: MsgEditValidator, password: string): Promise<BroadcastTxResponse> | undefined;
    [StakingMsg.Delegate](request: MsgDelegate, password: string): Promise<BroadcastTxResponse> | undefined;
    [StakingMsg.BeginRedelegate](
        request: MsgBeginRedelegate,
        password: string,
    ): Promise<BroadcastTxResponse> | undefined;
    [StakingMsg.Undelegate](request: MsgUndelegate, password: string): Promise<BroadcastTxResponse> | undefined;
}

export class MsgClientImpl implements MsgClient {
    private package = '/cosmos.staking.v1beta1';
    protected registryTypes: ReadonlyArray<[string, TsProtoGeneratedType]> = [
        [`${this.package}.Msg${StakingMsg.BeginRedelegate}`, MsgBeginRedelegate],
        [`${this.package}.Msg${StakingMsg.CreateValidator}`, MsgCreateValidator],
        [`${this.package}.Msg${StakingMsg.Delegate}`, MsgDelegate],
        [`${this.package}.Msg${StakingMsg.EditValidator}`, MsgEditValidator],
        [`${this.package}.Msg${StakingMsg.Undelegate}`, MsgUndelegate],
    ];
    private ctx: Context;

    constructor(ctx: Context) {
        this.ctx = ctx;
    }

    [StakingMsg.CreateValidator](request: MsgCreateValidator, password: string) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            [
                {
                    typeUrl: `${this.package}.Msg${StakingMsg.CreateValidator}`,
                    value: request,
                },
            ],
            this.ctx.fees.delegate,
            password,
        );
    }
    [StakingMsg.EditValidator](request: MsgEditValidator, password: string) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            [
                {
                    typeUrl: `${this.package}.Msg${StakingMsg.EditValidator}`,
                    value: request,
                },
            ],
            this.ctx.fees.delegate,
            password,
        );
    }
    [StakingMsg.Delegate](request: MsgDelegate, password: string) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            [
                {
                    typeUrl: `${this.package}.Msg${StakingMsg.Delegate}`,
                    value: request,
                },
            ],
            this.ctx.fees.delegate,
            password,
        );
    }
    [StakingMsg.BeginRedelegate](request: MsgBeginRedelegate, password: string) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            [
                {
                    typeUrl: `${this.package}.Msg${StakingMsg.BeginRedelegate}`,
                    value: request,
                },
            ],
            this.ctx.fees.delegate,
            password,
        );
    }
    [StakingMsg.Undelegate](request: MsgUndelegate, password: string) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            [
                {
                    typeUrl: `${this.package}.Msg${StakingMsg.Undelegate}`,
                    value: request,
                },
            ],
            this.ctx.fees.undelegate,
            password,
        );
    }
}
