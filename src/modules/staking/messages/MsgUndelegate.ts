import { MsgUndelegate } from '../../../codec/cosmos/staking/v1beta1/tx';

export const buildMsgUndelegate = (value: MsgUndelegate) => ({
    typeUrl: '/cosmos.staking.v1beta1.MsgUndelegate',
    value,
});
