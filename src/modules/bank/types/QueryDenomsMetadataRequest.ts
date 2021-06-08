import { PageRequest } from '../../../types/PageRequest';
import { Reader, Writer } from 'protobufjs';

export interface QueryDenomsMetadataRequest {
    pagination?: PageRequest;
}

export const QueryDenomsMetadataRequest = {
    encode(message: QueryDenomsMetadataRequest, writer: Writer = Writer.create()): Writer {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QueryDenomsMetadataRequest {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QueryDenomsMetadataRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
