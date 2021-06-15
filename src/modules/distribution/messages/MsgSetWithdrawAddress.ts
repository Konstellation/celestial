import { MsgSetWithdrawAddress } from '../../../codec/cosmos/distribution/v1beta1/tx';

export const buildMsgSetWithdrawAddress = (value: MsgSetWithdrawAddress) => ({
    typeUrl: '/cosmos.bank.v1beta1.MsgSetWithdrawAddress',
    value,
});
