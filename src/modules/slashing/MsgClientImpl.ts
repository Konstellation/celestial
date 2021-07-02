import { MsgUnjail } from '../../codec/cosmos/slashing/v1beta1/tx';
import { BroadcastTxResponse } from '../../types/broadcastTxResponse';
import { Context } from '../../types/Context';
import { TsProtoGeneratedType } from '../../types/TsProtoGeneratedType';

enum SlashingMsg {
    Unjail = 'Unjail',
}

interface MsgClient {
    [SlashingMsg.Unjail](request: MsgUnjail, password: string): Promise<BroadcastTxResponse> | undefined;
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
    [SlashingMsg.Unjail](request: MsgUnjail, password: string) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            [
                {
                    typeUrl: `${this.package}.Msg${SlashingMsg.Unjail}`,
                    value: request,
                },
            ],
            this.ctx.fees.delegate,
            password,
        );
    }
}
