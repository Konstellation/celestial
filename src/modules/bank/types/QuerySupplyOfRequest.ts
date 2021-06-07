import { Reader, Writer } from 'protobufjs';

export interface QuerySupplyOfRequest {
    denom: string;
}

export const QuerySupplyOfRequest = {
    encode(message: QuerySupplyOfRequest, writer: Writer = Writer.create()): Writer {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QuerySupplyOfRequest {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QuerySupplyOfRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
