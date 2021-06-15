import { MsgSend } from '../../../codec/cosmos/bank/v1beta1/tx';

export const buildMsgSend = (value: MsgSend) => ({
    typeUrl: '/cosmos.bank.v1beta1.MsgSend',
    value,
});
