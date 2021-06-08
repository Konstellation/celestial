import { Coin } from '../../../types/Coin';

export interface StdFee {
    readonly amount: readonly Coin[];
    readonly gas: string;
}
