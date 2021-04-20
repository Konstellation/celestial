import Message from '../Message';

const type = 'cosmos-sdk/MsgUnjail';

function builder({ validatorAddr: address }: { validatorAddr: string }) {
    return [
        {
            type,
            value: {
                address,
            },
        },
    ];
}

export default new Message({
    type,
    builder,
});
