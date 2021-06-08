import { Description } from '../types/Description';

export interface MsgEditValidator {
    description?: Description;
    validatorAddress: string;
    commissionRate: string;
    minSelfDelegation: string;
}

export const MsgEditValidator = (value: MsgEditValidator) => ({
    typeUrl: '/cosmos.staking.v1beta1.MsgEditValidator',
    value,
});
