import { Coin } from '../../../types/Coin';

export interface MsgDelegate {
    delegatorAddress: string;
    validatorAddress: string;
    amount?: Coin;
}

export const MsgDelegate = (value: MsgDelegate) => ({
    typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
    value,
});
