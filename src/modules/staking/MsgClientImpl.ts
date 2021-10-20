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
// @ts-ignore
import Account from '@konstellation/cosmosjs/src/types/Account';

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
        account: Account,
    ): Promise<BroadcastTxResponse> | undefined;
    [StakingMsg.EditValidator](request: MsgEditValidator, account: Account): Promise<BroadcastTxResponse> | undefined;
    [StakingMsg.Delegate](request: MsgDelegate, account: Account): Promise<BroadcastTxResponse> | undefined;
    [StakingMsg.BeginRedelegate](
        request: MsgBeginRedelegate,
        account: Account,
    ): Promise<BroadcastTxResponse> | undefined;
    [StakingMsg.Undelegate](request: MsgUndelegate, account: Account): Promise<BroadcastTxResponse> | undefined;
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

    [StakingMsg.CreateValidator](request: MsgCreateValidator, account: Account) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            [
                {
                    typeUrl: `${this.package}.Msg${StakingMsg.CreateValidator}`,
                    value: request,
                },
            ],
            this.ctx.fees.createValidator,
            account,
        );
    }
    [StakingMsg.EditValidator](request: MsgEditValidator, account: Account) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            [
                {
                    typeUrl: `${this.package}.Msg${StakingMsg.EditValidator}`,
                    value: request,
                },
            ],
            this.ctx.fees.editValidator,
            account,
        );
    }
    [StakingMsg.Delegate](request: MsgDelegate, account: Account) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            [
                {
                    typeUrl: `${this.package}.Msg${StakingMsg.Delegate}`,
                    value: request,
                },
            ],
            this.ctx.fees.delegate,
            account,
        );
    }
    [StakingMsg.BeginRedelegate](request: MsgBeginRedelegate, account: Account) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            [
                {
                    typeUrl: `${this.package}.Msg${StakingMsg.BeginRedelegate}`,
                    value: request,
                },
            ],
            this.ctx.fees.redelegate,
            account,
        );
    }
    [StakingMsg.Undelegate](request: MsgUndelegate, account: Account) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            [
                {
                    typeUrl: `${this.package}.Msg${StakingMsg.Undelegate}`,
                    value: request,
                },
            ],
            this.ctx.fees.undelegate,
            account,
        );
    }
}
