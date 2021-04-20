import Message from '../Message';

const type = 'issue/MsgFreeze';

function builder({
    freezerAddr,
    holderAddr,
    denom,
    op,
}: {
    freezerAddr: string;
    holderAddr: string;
    denom: string;
    op: string;
}) {
    return [
        {
            type,
            value: {
                freezer: freezerAddr,
                holder: holderAddr,
                denom,
                op,
            },
        },
    ];
}

export default new Message({
    type,
    builder,
});
