import { MsgBeginRedelegate } from '../../../codec/cosmos/staking/v1beta1/tx';

export const buildMsgBeginRedelegate = (value: MsgBeginRedelegate) => ({
    typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
    value,
});
