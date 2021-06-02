export interface Pubkey {
    // type is one of the strings defined in pubkeyType
    // I don't use a string literal union here as that makes trouble with json test data:
    // https://github.com/cosmos/cosmjs/pull/44#pullrequestreview-353280504
    readonly type: string;
    readonly value: any;
}
