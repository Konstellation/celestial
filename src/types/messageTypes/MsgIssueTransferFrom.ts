import Message from '../Message';

const type = 'issue/MsgTransferFrom';

function builder({
    spenderAddr,
    fromAddr,
    toAddr,
    amount,
}: {
    spenderAddr: string;
    fromAddr: string;
    toAddr: string;
    amount: string;
}) {
    return [
        {
            type,
            value: {
                sender: spenderAddr,
                from_address: fromAddr,
                to_address: toAddr,
                amount,
            },
        },
    ];
}

export default new Message({
    type,
    builder,
});
