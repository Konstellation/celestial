import { Reader, Writer } from 'protobufjs';

export interface QueryTotalSupplyRequest {}

export const QueryTotalSupplyRequest = {
    encode(_: QueryTotalSupplyRequest, writer: Writer = Writer.create()): Writer {
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QueryTotalSupplyRequest {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QueryTotalSupplyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
