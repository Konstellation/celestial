import Long from 'long';
import { Reader, Writer } from 'protobufjs';

export interface PageResponse {
    nextKey: Uint8Array;
    total: Long;
}

export const PageResponse = {
    encode(message: PageResponse, writer: Writer = Writer.create()): Writer {
        if (message.nextKey.length !== 0) {
            writer.uint32(10).bytes(message.nextKey);
        }
        if (!message.total.isZero()) {
            writer.uint32(16).uint64(message.total);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): PageResponse {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as PageResponse;
        message.nextKey = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextKey = reader.bytes();
                    break;
                case 2:
                    message.total = reader.uint64() as Long;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
