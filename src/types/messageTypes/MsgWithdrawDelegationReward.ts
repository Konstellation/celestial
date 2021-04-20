import Message from '../Message';

const type = 'cosmos-sdk/MsgWithdrawDelegationReward';

function builder({ delegatorAddr, validatorAddr }: { delegatorAddr: string; validatorAddr: string }) {
    return [
        {
            type,
            value: {
                delegator_address: delegatorAddr,
                validator_address: validatorAddr,
            },
        },
    ];
}

export default new Message({
    type,
    builder,
});
