import { Any } from '@cosmjs/stargate/build/codec/google/protobuf/any';
import { Coin } from '../../../types/Coin';
import { CommissionRates } from '../types/CommissionRates';
import { Description } from '../types/Description';

export interface MsgCreateValidator {
    description?: Description;
    commission?: CommissionRates;
    minSelfDelegation: string;
    delegatorAddress: string;
    validatorAddress: string;
    pubkey?: Any;
    value?: Coin;
}

export const MsgCreateValidator = (value: MsgCreateValidator) => ({
    typeUrl: '/cosmos.staking.v1beta1.MsgCreateValidator',
    value,
});
