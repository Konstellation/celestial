import { DecodedTxRaw } from '@cosmjs/proto-signing';

/** A transaction that is indexed as part of the transaction history */
export interface IndexedTx {
    readonly height: number;
    /** Transaction hash (might be used as transaction ID). Guaranteed to be non-empty upper-case hex */
    readonly hash: string;
    /** Transaction execution error code. 0 on success. */
    readonly code: number;
    readonly rawLog: string;
    /**
     * Raw transaction bytes stored in Tendermint.
     *
     * If you hash this, you get the transaction hash (= transaction ID):
     *
     * ```js
     * import { sha256 } from "@cosmjs/crypto";
     * import { toHex } from "@cosmjs/encoding";
     *
     * const transactionId = toHex(sha256(indexTx.tx)).toUpperCase();
     * ```
     *
     * Use `decodeTxRaw` from @cosmjs/proto-signing to decode this.
     */
    readonly tx: DecodedTxRaw;
    // readonly tx: Uint8Array;
    readonly gasUsed: number;
    readonly gasWanted: number;
}
