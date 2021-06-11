import { MsgEditValidator } from '../../../codec/cosmos/staking/v1beta1/tx';

export const buildMsgEditValidator = (value: MsgEditValidator) => ({
    typeUrl: '/cosmos.staking.v1beta1.MsgEditValidator',
    value,
});
