import Message from '../Message';

const type = 'cosmos-sdk/MsgCreateValidator';

function builder({
    validatorAddr: address,
    description: { moniker, identity, website, details },
    commission: { rate, max_rate, max_change_rate },
    minSelfDelegation: min_self_delegation,
}: {
    validatorAddr: string;
    description: { moniker: string; identity: string; website: string; details: string };
    commission: { rate: string; max_rate: string; max_change_rate: string };
    minSelfDelegation: string;
}) {
    return [
        {
            type,
            value: {
                address,
                description: { moniker, identity, website, details },
                commission: {
                    rate,
                    max_rate,
                    max_change_rate,
                },
                min_self_delegation,
            },
        },
    ];
}

export default new Message({
    type,
    builder,
});
