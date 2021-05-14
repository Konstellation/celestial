import { Coin } from '../../types/coin_pb';

export interface StdFee {
    readonly amount: readonly Coin[];
    readonly gas: string;
}
