import Message from '../Message';

const type = 'cosmos-sdk/MsgVote';

function builder({ option, proposalId, voterAddr }: { option: string; proposalId: string; voterAddr: string }) {
    return [
        {
            type,
            value: {
                option,
                proposal_id: String(proposalId),
                voter: voterAddr,
            },
        },
    ];
}

export default new Message({
    type,
    builder,
});
