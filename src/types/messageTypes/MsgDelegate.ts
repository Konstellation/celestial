import Message from '../Message';

const type = 'cosmos-sdk/MsgDelegate';

function builder({
    amount: { amount, denom },
    delegatorAddr,
    validatorAddr,
}: {
    amount: { amount: string; denom: string };
    delegatorAddr: string;
    validatorAddr: string;
}) {
    return [
        {
            type,
            value: {
                amount: {
                    amount: String(amount),
                    denom: String(denom),
                },
                delegator_address: delegatorAddr,
                validator_address: validatorAddr,
            },
        },
    ];
}

export default new Message({
    type,
    builder,
});
