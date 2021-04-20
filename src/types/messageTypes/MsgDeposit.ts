import Message from '../Message';

const type = 'cosmos-sdk/MsgDeposit';

function builder({
    amount,
    denom,
    depositorAddr,
    proposalId,
}: {
    amount: string;
    denom: string;
    depositorAddr: string;
    proposalId: string;
}) {
    return [
        {
            type,
            value: {
                amount: [
                    {
                        amount: String(amount),
                        denom,
                    },
                ],
                depositor: depositorAddr,
                proposal_id: String(proposalId),
            },
        },
    ];
}

export default new Message({
    type,
    builder,
});
