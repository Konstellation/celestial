import { Reader, Writer } from 'protobufjs';
import { DeepPartial } from '../../../types/deepPartial';

export interface TxRaw {
    /**
     * body_bytes is a protobuf serialization of a TxBody that matches the
     * representation in SignDoc.
     */
    bodyBytes: Uint8Array;
    /**
     * auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
     * representation in SignDoc.
     */
    authInfoBytes: Uint8Array;
    /**
     * signatures is a list of signatures that matches the length and order of
     * AuthInfo's signer_infos to allow connecting signature meta information like
     * public key and signing mode by position.
     */
    signatures: Uint8Array[];
}

export const TxRaw = {
    encode(message: TxRaw, writer: Writer = Writer.create()): Writer {
        if (message.bodyBytes.length !== 0) {
            writer.uint32(10).bytes(message.bodyBytes);
        }
        if (message.authInfoBytes.length !== 0) {
            writer.uint32(18).bytes(message.authInfoBytes);
        }
        for (const v of message.signatures) {
            writer.uint32(26).bytes(v!);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): TxRaw {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as TxRaw;
        message.signatures = [];
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
                    message.signatures.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromPartial(object: DeepPartial<TxRaw>): TxRaw {
        const message = {} as TxRaw;
        message.signatures = [];
        if (object.bodyBytes !== undefined && object.bodyBytes !== null) {
            message.bodyBytes = object.bodyBytes;
        } else {
            message.bodyBytes = new Uint8Array();
        }
        if (object.authInfoBytes !== undefined && object.authInfoBytes !== null) {
            message.authInfoBytes = object.authInfoBytes;
        } else {
            message.authInfoBytes = new Uint8Array();
        }
        if (object.signatures !== undefined && object.signatures !== null) {
            for (const e of object.signatures) {
                message.signatures.push(e);
            }
        }
        return message;
    },
};
