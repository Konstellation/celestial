import { MsgUnjail } from '../../codec/cosmos/slashing/v1beta1/tx';
// import Account from '../../types/Account';
// @ts-ignore
import Account from '@konstellation/cosmosjs/src/types/Account';
import { BroadcastTxResponse } from '../../types/broadcastTxResponse';
import { Context } from '../../types/Context';
import { TsProtoGeneratedType } from '../../types/TsProtoGeneratedType';

enum SlashingMsg {
    Unjail = 'Unjail',
}

interface MsgClient {
    [SlashingMsg.Unjail](request: MsgUnjail, account: Account): Promise<BroadcastTxResponse> | undefined;
}

export class MsgClientImpl implements MsgClient {
    private package = '/cosmos.slashing.v1beta1';
    private ctx: Context;
    protected registryTypes: ReadonlyArray<[string, TsProtoGeneratedType]> = [
        [`${this.package}.Msg${SlashingMsg.Unjail}`, MsgUnjail],
    ];

    constructor(ctx: Context) {
        this.ctx = ctx;
    }

    // TODO fix fees
    [SlashingMsg.Unjail](request: MsgUnjail, account: Account) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            [
                {
                    typeUrl: `${this.package}.Msg${SlashingMsg.Unjail}`,
                    value: request,
                },
            ],
            this.ctx.fees.delegate,
            account,
        );
    }
}
