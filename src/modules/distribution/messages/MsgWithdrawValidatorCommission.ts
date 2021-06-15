import { MsgWithdrawValidatorCommission } from '../../../codec/cosmos/distribution/v1beta1/tx';

export const buildMsgWithdrawValidatorCommission = (value: MsgWithdrawValidatorCommission) => ({
    typeUrl: '/cosmos.bank.v1beta1.MsgWithdrawValidatorCommission',
    value,
});
