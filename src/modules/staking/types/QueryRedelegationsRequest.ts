import { Reader, Writer } from 'protobufjs';
import { PageRequest } from '../../../types/PageRequest';

export interface QueryRedelegationsRequest {
    delegatorAddr: string;
    srcValidatorAddr: string;
    dstValidatorAddr: string;
    pagination?: PageRequest;
}

export const QueryRedelegationsRequest = {
    encode(message: QueryRedelegationsRequest, writer: Writer = Writer.create()): Writer {
        if (message.delegatorAddr !== '') {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.srcValidatorAddr !== '') {
            writer.uint32(18).string(message.srcValidatorAddr);
        }
        if (message.dstValidatorAddr !== '') {
            writer.uint32(26).string(message.dstValidatorAddr);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QueryRedelegationsRequest {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QueryRedelegationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.srcValidatorAddr = reader.string();
                    break;
                case 3:
                    message.dstValidatorAddr = reader.string();
                    break;
                case 4:
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
