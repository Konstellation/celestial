import { PageResponse } from '../../../types/PageResponse';
import { Metadata } from './Metadata';
import { Reader, Writer } from 'protobufjs';

export interface QueryDenomsMetadataResponse {
    metadatas: Metadata[];
    pagination?: PageResponse;
}

export const QueryDenomsMetadataResponse = {
    encode(message: QueryDenomsMetadataResponse, writer: Writer = Writer.create()): Writer {
        for (const v of message.metadatas) {
            Metadata.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QueryDenomsMetadataResponse {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QueryDenomsMetadataResponse;
        message.metadatas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadatas.push(Metadata.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
