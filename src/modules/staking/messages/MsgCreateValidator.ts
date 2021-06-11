import { MsgCreateValidator } from '../../../codec/cosmos/staking/v1beta1/tx';

export const buildMsgCreateValidator = (value: MsgCreateValidator) => ({
    typeUrl: '/cosmos.staking.v1beta1.MsgCreateValidator',
    value,
});
