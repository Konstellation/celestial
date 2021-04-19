import Message from '../Message';

const type = 'issue/MsgFeatures';

function builder({
    ownerAddr: owner,
    denom,
    burnOwnerDisabled: burn_owner_disabled,
    burnHolderDisabled: burn_holder_disabled,
    burnFromDisabled: burn_from_disabled,
    mintDisabled: mint_disabled,
    freezeDisabled: freeze_disabled,
}: {
    ownerAddr: string;
    denom: string;
    burnOwnerDisabled: boolean;
    burnHolderDisabled: boolean;
    burnFromDisabled: boolean;
    mintDisabled: boolean;
    freezeDisabled: boolean;
}) {
    return [
        {
            type,
            value: {
                owner,
                denom,
                features: {
                    burn_from_disabled,
                    burn_holder_disabled,
                    burn_owner_disabled,
                    mint_disabled,
                    freeze_disabled,
                },
            },
        },
    ];
}

export default new Message({
    type,
    builder,
});
