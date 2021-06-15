import { MsgWithdrawDelegatorReward } from '../../../codec/cosmos/distribution/v1beta1/tx';

export const buildMsgWithdrawDelegatorReward = (value: MsgWithdrawDelegatorReward) => ({
    typeUrl: '/cosmos.bank.v1beta1.MsgWithdrawDelegatorReward',
    value,
});
