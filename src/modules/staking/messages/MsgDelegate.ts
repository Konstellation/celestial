import { MsgDelegate } from '../../../codec/cosmos/staking/v1beta1/tx';

export const buildMsgDelegate = (value: MsgDelegate) => ({
    typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
    value,
});
