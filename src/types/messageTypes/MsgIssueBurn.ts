import Message from '../Message';

const type = 'issue/MsgBurn';

function builder({ burnerAddr, amount }: { burnerAddr: string; amount: string }) {
    return [
        {
            type,
            value: {
                burner: burnerAddr,
                amount,
            },
        },
    ];
}

export default new Message({
    type,
    builder,
});
