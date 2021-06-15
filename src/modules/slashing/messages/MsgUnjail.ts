import { MsgUnjail } from '../../../codec/cosmos/slashing/v1beta1/tx';

export const buildMsgUnjail = (value: MsgUnjail) => ({
    typeUrl: '/cosmos.slashing.v1beta1.MsgUnjail',
    value,
});
