import { MsgDeposit, MsgSubmitProposal, MsgVote } from '../../codec/cosmos/gov/v1beta1/tx';
import { BroadcastTxResponse } from '../../types/broadcastTxResponse';
import { Context } from '../../types/Context';
import { TsProtoGeneratedType } from '../../types/TsProtoGeneratedType';
// @ts-ignore
import Account from '@konstellation/cosmosjs/src/types/Account';

enum GovMsg {
    SubmitProposal = 'SubmitProposal',
    Vote = 'Vote',
    Deposit = 'Deposit',
}

interface MsgClient {
    [GovMsg.SubmitProposal](request: MsgSubmitProposal, account: Account): Promise<BroadcastTxResponse> | undefined;
    [GovMsg.Vote](request: MsgVote, account: Account): Promise<BroadcastTxResponse> | undefined;
    [GovMsg.Deposit](request: MsgDeposit, account: Account): Promise<BroadcastTxResponse> | undefined;
}

export class MsgClientImpl implements MsgClient {
    private package = '/cosmos.gov.v1beta1';
    protected registryTypes: ReadonlyArray<[string, TsProtoGeneratedType]> = [
        [`${this.package}.Msg${GovMsg.SubmitProposal}`, MsgSubmitProposal],
        [`${this.package}.Msg${GovMsg.Vote}`, MsgVote],
        [`${this.package}.Msg${GovMsg.Deposit}`, MsgDeposit],
    ];
    private ctx: Context;

    constructor(ctx: Context) {
        this.ctx = ctx;
    }

    [GovMsg.SubmitProposal](request: MsgSubmitProposal, account: Account) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            [
                {
                    typeUrl: `${this.package}.Msg${GovMsg.SubmitProposal}`,
                    value: request,
                },
            ],
            this.ctx.fees.submitProposal,
            account,
        );
    }

    [GovMsg.Vote](request: MsgVote, account: Account) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            [
                {
                    typeUrl: `${this.package}.Msg${GovMsg.SubmitProposal}`,
                    value: request,
                },
            ],
            this.ctx.fees.voteProposal,
            account,
        );
    }

    [GovMsg.Deposit](request: MsgDeposit, account: Account) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            [
                {
                    typeUrl: `${this.package}.Msg${GovMsg.Deposit}`,
                    value: request,
                },
            ],
            this.ctx.fees.depositProposal,
            account,
        );
    }
}
