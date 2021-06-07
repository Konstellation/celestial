import { Reader, Writer } from 'protobufjs';

export interface QueryHistoricalInfoRequest {
    height: Long;
}

export const QueryHistoricalInfoRequest = {
    encode(message: QueryHistoricalInfoRequest, writer: Writer = Writer.create()): Writer {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QueryHistoricalInfoRequest {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QueryHistoricalInfoRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64() as Long;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
