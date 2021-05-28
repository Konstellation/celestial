import { Writer, Reader } from 'protobufjs';

export interface QueryAccountRequest {
    address: string;
}

export const QueryAccountRequest = {
    encode(address: string, writer: Writer = Writer.create()): Writer {
        if (address !== '') {
            writer.uint32(10).string(address);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QueryAccountRequest {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QueryAccountRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    console.log(reader.string());
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
