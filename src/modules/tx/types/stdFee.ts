import { Coin } from '../../../codec/cosmos/base/v1beta1/coin';

export interface StdFee {
    readonly amount: readonly Coin[];
    readonly gas: string;
}
