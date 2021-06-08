import { Coin, coins } from '../../../types/Coin';

interface SendTokens {
    fromAddress: string;
    toAddress: string;
    amount: Coin;
}

export const SendTokens = ({ fromAddress, toAddress, amount }: SendTokens) => ({
    typeUrl: '/cosmos.bank.v1beta1.MsgSend',
    value: {
        fromAddress,
        toAddress,
        amount: coins(parseInt(amount.amount), amount.denom),
    },
});
