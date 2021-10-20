import { MsgSend } from '../../codec/cosmos/bank/v1beta1/tx';
import { BroadcastTxResponse } from '../../types/broadcastTxResponse';
import { Context } from '../../types/Context';
// @ts-ignore
import Account from '@konstellation/cosmosjs/src/types/Account';

enum BankMsg {
    Send = 'Send',
}

interface MsgClient {
    [BankMsg.Send](request: MsgSend, account: Account, memo?: string): Promise<BroadcastTxResponse> | undefined;
}

export class MsgClientImpl implements MsgClient {
    private package = '/cosmos.bank.v1beta1';
    private ctx: Context;

    constructor(ctx: Context) {
        this.ctx = ctx;
    }

    [BankMsg.Send](request: MsgSend, account: Account, memo?: string) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            [
                {
                    typeUrl: `${this.package}.Msg${BankMsg.Send}`,
                    value: request,
                },
            ],
            this.ctx.fees.send,
            account,
            memo,
        );
    }
}
