import Message from '../Message';

const type = 'issue/MsgTransfer';

function builder({ fromAddr, toAddr, amount }: { fromAddr: string; toAddr: string; amount: string }) {
    return [
        {
            type,
            value: {
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
