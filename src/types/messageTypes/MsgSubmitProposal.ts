import Message from '../Message';

const type = 'cosmos-sdk/MsgSubmitProposal';

function builder({
    description,
    initialDeposit: { amount, denom },
    proposal_type,
    proposer,
    title,
}: {
    description: string;
    initialDeposit: { amount: string; denom: string };
    proposal_type: string;
    proposer: string;
    title: string;
}) {
    return [
        {
            type,
            value: {
                description,
                initial_deposit: [
                    {
                        amount: String(amount),
                        denom,
                    },
                ],
                proposal_type,
                proposer,
                title,
            },
        },
    ];
}

export default new Message({
    type,
    builder,
});
