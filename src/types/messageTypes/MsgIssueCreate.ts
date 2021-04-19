import Message from '../Message';

const type = 'issue/MsgIssueCreate';

function builder({
    issuerAddr: issuer,
    denom,
    symbol,
    totalSupply,
    decimals,
    description,
    burnOwnerDisabled: burn_owner_disabled,
    burnHolderDisabled: burn_holder_disabled,
    burnFromDisabled: burn_from_disabled,
    mintDisabled: mint_disabled,
    freezeDisabled: freeze_disabled,
}: {
    issuerAddr: string;
    denom: string;
    symbol: string;
    totalSupply: number;
    decimals: number;
    description: string;
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
                owner: issuer,
                issuer,
                params: {
                    denom,
                    symbol,
                    total_supply: String(totalSupply),
                    decimals: String(decimals),
                    description,
                    features: {
                        burn_from_disabled,
                        burn_holder_disabled,
                        burn_owner_disabled,
                        mint_disabled,
                        freeze_disabled,
                    },
                },
            },
        },
    ];
}

export default new Message({
    type,
    builder,
});
