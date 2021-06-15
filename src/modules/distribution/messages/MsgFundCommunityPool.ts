import { MsgFundCommunityPool } from '../../../codec/cosmos/distribution/v1beta1/tx';

export const buildMsgFundCommunityPool = (value: MsgFundCommunityPool) => ({
    typeUrl: '/cosmos.bank.v1beta1.MsgFundCommunityPool',
    value,
});
