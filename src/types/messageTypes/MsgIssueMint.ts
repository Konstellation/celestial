import Message from '../Message';

const type = 'issue/MsgMint';

function builder({ minterAddr, toAddr, amount }: { minterAddr: string; toAddr: string; amount: string }) {
    return [
        {
            type,
            value: {
                minter: minterAddr,
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
