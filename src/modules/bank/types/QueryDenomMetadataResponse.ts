import { Metadata } from './Metadata';
import { Reader, Writer } from 'protobufjs';

export interface QueryDenomMetadataResponse {
    metadata?: Metadata;
}

export const QueryDenomMetadataResponse = {
    encode(message: QueryDenomMetadataResponse, writer: Writer = Writer.create()): Writer {
        if (message.metadata !== undefined) {
            Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QueryDenomMetadataResponse {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QueryDenomMetadataResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata = Metadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
