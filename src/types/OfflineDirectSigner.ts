export interface OfflineDirectSigner {
    readonly getAccounts: () => Promise<readonly AccountData[]>;
    readonly signDirect: (signerAddress: string, signDoc: SignDoc) => Promise<DirectSignResponse>;
}

export type Algo = 'secp256k1' | 'ed25519' | 'sr25519';

/**
 * This is the same as AccountData from @cosmjs/launchpad but those might diverge in the future.
 */
export interface AccountData {
    /** A printable address (typically bech32 encoded) */
    readonly address: string;
    readonly algo: Algo;
    readonly pubkey: Uint8Array;
}

export interface SignDoc {
    /**
     * body_bytes is protobuf serialization of a TxBody that matches the
     * representation in TxRaw.
     */
    bodyBytes: Uint8Array;
    /**
     * auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
     * representation in TxRaw.
     */
    authInfoBytes: Uint8Array;
    /**
     * chain_id is the unique identifier of the chain this transaction targets.
     * It prevents signed transactions from being used on another chain by an
     * attacker
     */
    chainId: string;
    /** account_number is the account number of the account in state */
    accountNumber: Long;
}
export interface DirectSignResponse {
    /**
     * The sign doc that was signed.
     * This may be different from the input signDoc when the signer modifies it as part of the signing process.
     */
    readonly signed: SignDoc;
    readonly signature: StdSignature;
}

export interface StdSignature {
    readonly pub_key: Pubkey;
    readonly signature: string;
}

export interface Pubkey {
    readonly type: string;
    readonly value: any;
}
