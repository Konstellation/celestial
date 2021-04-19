import Message from '../Message';

const type = 'issue/MsgApprove';

function builder({
    ownerAddr: owner,
    spenderAddr: spender,
    amount,
}: {
    ownerAddr: string;
    spenderAddr: string;
    amount: string;
}) {
    return [
        {
            type,
            value: {
                owner,
                spender,
                amount,
            },
        },
    ];
}

export default new Message({
    type,
    builder,
});
