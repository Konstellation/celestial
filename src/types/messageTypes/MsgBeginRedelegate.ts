import Message from '../Message';

const type = 'cosmos-sdk/MsgBeginRedelegate';

function builder({
    amount: { amount, denom },
    delegatorAddr,
    validatorDstAddr,
    validatorSrcAddr,
}: {
    amount: { amount: string; denom: string };
    delegatorAddr: string;
    validatorDstAddr: string;
    validatorSrcAddr: string;
}) {
    return [
        {
            type,
            value: {
                amount: {
                    amount: String(amount),
                    denom: String(denom),
                },
                delegator_address: delegatorAddr,
                validator_dst_address: validatorDstAddr,
                validator_src_address: validatorSrcAddr,
            },
        },
    ];
}

export default new Message({
    type,
    builder,
});
