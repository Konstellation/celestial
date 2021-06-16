import { MsgDeposit, MsgSubmitProposal, MsgVote } from '../../codec/cosmos/gov/v1beta1/tx';
import { BroadcastTxResponse } from '../../types/broadcastTxResponse';
import { Context } from '../../types/Context';
import { TsProtoGeneratedType } from '../../types/TsProtoGeneratedType';

enum GovMsg {
    SubmitProposal = 'SubmitProposal',
    Vote = 'Vote',
    Deposit = 'Deposit',
}

interface MsgClient {
    [GovMsg.SubmitProposal](request: MsgSubmitProposal): Promise<BroadcastTxResponse> | undefined;
    [GovMsg.Vote](request: MsgVote): Promise<BroadcastTxResponse> | undefined;
    [GovMsg.Deposit](request: MsgDeposit): Promise<BroadcastTxResponse> | undefined;
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

    // TODO fix fees
    [GovMsg.SubmitProposal](request: MsgSubmitProposal) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            this.ctx.signerAddress,
            [
                {
                    typeUrl: `${this.package}.Msg${GovMsg.SubmitProposal}`,
                    value: request,
                },
            ],
            this.ctx.fees.delegate,
        );
    }

    [GovMsg.Vote](request: MsgVote) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            this.ctx.signerAddress,
            [
                {
                    typeUrl: `${this.package}.Msg${GovMsg.SubmitProposal}`,
                    value: request,
                },
            ],
            this.ctx.fees.delegate,
        );
    }

    [GovMsg.Deposit](request: MsgDeposit) {
        return this.ctx.modules?.tx?.signAndBroadcast(
            this.ctx.signerAddress,
            [
                {
                    typeUrl: `${this.package}.Msg${GovMsg.Deposit}`,
                    value: request,
                },
            ],
            this.ctx.fees.delegate,
        );
    }
}
