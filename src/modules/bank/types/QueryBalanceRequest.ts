import { Writer, Reader } from 'protobufjs';

export interface QueryBalanceRequest {
    address: string;
    denom: string;
}

export const QueryBalanceRequest = {
    encode(message: QueryBalanceRequest, writer: Writer = Writer.create()): Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.denom !== '') {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QueryBalanceRequest {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QueryBalanceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
