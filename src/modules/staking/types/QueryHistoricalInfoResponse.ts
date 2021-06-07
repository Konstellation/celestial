import { Reader, Writer } from 'protobufjs';
import { HistoricalInfo } from './HistoricalInfo';

export interface QueryHistoricalInfoResponse {
    hist?: HistoricalInfo;
}

export const QueryHistoricalInfoResponse = {
    encode(message: QueryHistoricalInfoResponse, writer: Writer = Writer.create()): Writer {
        if (message.hist !== undefined) {
            HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QueryHistoricalInfoResponse {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QueryHistoricalInfoResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hist = HistoricalInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
