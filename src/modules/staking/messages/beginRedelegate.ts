import { Coin } from '../../../types/Coin';

export interface MsgBeginRedelegate {
    delegatorAddress: string;
    validatorSrcAddress: string;
    validatorDstAddress: string;
    amount?: Coin;
}

export const MsgBeginRedelegate = (value: MsgBeginRedelegate) => ({
    typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
    value,
});
