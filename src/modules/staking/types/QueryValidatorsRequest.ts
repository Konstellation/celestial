import { PageRequest } from '../../../types/PageRequest';
import { Reader, Writer } from 'protobufjs';

export interface QueryValidatorsRequest {
    status: string;
    pagination?: PageRequest;
}

const baseQueryValidatorsRequest = { status: '' };

export const QueryValidatorsRequest = {
    encode(message: QueryValidatorsRequest, writer: Writer = Writer.create()): Writer {
        if (message.status !== '') {
            writer.uint32(10).string(message.status);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QueryValidatorsRequest {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryValidatorsRequest } as QueryValidatorsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.string();
                    break;
                case 2:
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
