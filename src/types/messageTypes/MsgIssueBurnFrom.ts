import Message from '../Message';

const type = 'issue/MsgBurnFrom';

function builder({ burnerAddr, fromAddr, amount }: { burnerAddr: string; fromAddr: string; amount: string }) {
    return [
        {
            type,
            value: {
                burner: burnerAddr,
                from_address: fromAddr,
                amount,
            },
        },
    ];
}

export default new Message({
    type,
    builder,
});
