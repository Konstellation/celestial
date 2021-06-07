import { Reader, Writer } from 'protobufjs';

export interface PartSetHeader {
    total: number;
    hash: Uint8Array;
}

export const PartSetHeader = {
    encode(message: PartSetHeader, writer: Writer = Writer.create()): Writer {
        if (message.total !== 0) {
            writer.uint32(8).uint32(message.total);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): PartSetHeader {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as PartSetHeader;
        message.hash = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total = reader.uint32();
                    break;
                case 2:
                    message.hash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
