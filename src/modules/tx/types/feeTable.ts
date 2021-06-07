import { StdFee } from './stdFee';

export type FeeTable = Record<string, StdFee>;

export interface CosmosFeeTable extends FeeTable {
    readonly send: StdFee;
    readonly delegate: StdFee;
    readonly transfer: StdFee;
    readonly undelegate: StdFee;
    readonly withdraw: StdFee;
}
