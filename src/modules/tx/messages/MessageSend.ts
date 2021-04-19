import Message from '../../../types/Message';

const type = 'cosmos-sdk/MsgSend';

function builder({
    from,
    to,
    amount: { amount, denom },
}: {
    from: string;
    to: string;
    amount: { amount: string; denom: string };
}) {
    return [
        {
            type,
            value: {
                amount: [
                    {
                        amount: String(amount),
                        denom: String(denom),
                    },
                ],
                from_address: String(from),
                to_address: String(to),
            },
        },
    ];
}

export default new Message({
    type,
    builder,
});
