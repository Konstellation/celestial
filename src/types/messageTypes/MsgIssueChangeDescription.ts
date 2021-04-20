import Message from '../Message';

const type = 'issue/MsgDescription';

function builder({ ownerAddr: owner, denom, description }: { ownerAddr: string; denom: string; description: string }) {
    return [
        {
            type,
            value: {
                owner,
                denom,
                description,
            },
        },
    ];
}

export default new Message({
    type,
    builder,
});
