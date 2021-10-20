import { StdFee } from './stdFee';

export type FeeTable = Record<string, StdFee>;

export interface CosmosFeeTable extends FeeTable {
    readonly send: StdFee;
    readonly transfer: StdFee;
    readonly delegate: StdFee;
    readonly redelegate: StdFee;
    readonly undelegate: StdFee;
    readonly withdrawDelegatorReward: StdFee;
    readonly withdrawValidatorCommission: StdFee;
    readonly fundCommunityPool: StdFee;
    readonly setWithdrawAddress: StdFee;
    readonly createValidator: StdFee;
    readonly editValidator: StdFee;
    readonly unjail: StdFee;
    readonly submitProposal: StdFee;
    readonly voteProposal: StdFee;
    readonly depositProposal: StdFee;
}
