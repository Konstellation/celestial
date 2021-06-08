import { Coin } from '../../../types/Coin';

export interface MsgUndelegate {
    delegatorAddress: string;
    validatorAddress: string;
    amount?: Coin;
}

export const MsgUndelegate = (value: MsgUndelegate) => ({
    typeUrl: '/cosmos.staking.v1beta1.MsgUndelegate',
    value,
});
