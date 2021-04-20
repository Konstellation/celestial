import Message from '../Message';

const type = 'issue/MsgTransferOwnership';

function builder({ ownerAddr, toAddr, denom }: { ownerAddr: string; toAddr: string; denom: string }) {
    return [
        {
            type,
            value: {
                owner: ownerAddr,
                to_address: toAddr,
                denom,
            },
        },
    ];
}

export default new Message({
    type,
    builder,
});
