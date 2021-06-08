import { Reader, Writer } from 'protobufjs';

/** SignDoc is the type used for generating sign bytes for SIGN_MODE_DIRECT. */
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

export const SignDoc = {
    encode(message: SignDoc, writer: Writer = Writer.create()): Writer {
        if (message.bodyBytes.length !== 0) {
            writer.uint32(10).bytes(message.bodyBytes);
        }
        if (message.authInfoBytes.length !== 0) {
            writer.uint32(18).bytes(message.authInfoBytes);
        }
        if (message.chainId !== '') {
            writer.uint32(26).string(message.chainId);
        }
        if (!message.accountNumber.isZero()) {
            writer.uint32(32).uint64(message.accountNumber);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): SignDoc {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as SignDoc;
        message.bodyBytes = new Uint8Array();
        message.authInfoBytes = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bodyBytes = reader.bytes();
                    break;
                case 2:
                    message.authInfoBytes = reader.bytes();
                    break;
                case 3:
                    message.chainId = reader.string();
                    break;
                case 4:
                    message.accountNumber = reader.uint64() as Long;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
