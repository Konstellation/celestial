import Message from '../Message';

const type = 'cosmos-sdk/MsgModifyWithdrawAddress';

function builder({ delegator_address, withdraw_address }: { delegator_address: string; withdraw_address: string }) {
    return [
        {
            type,
            value: {
                delegator_address,
                withdraw_address,
            },
        },
    ];
}

export default new Message({
    type,
    builder,
});
