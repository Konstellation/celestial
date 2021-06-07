import { Reader, Writer } from 'protobufjs';
import { PageRequest } from '../../../types/PageRequest';

export interface QueryDelegatorUnbondingDelegationsRequest {
    delegatorAddr: string;
    pagination?: PageRequest;
}

export const QueryDelegatorUnbondingDelegationsRequest = {
    encode(message: QueryDelegatorUnbondingDelegationsRequest, writer: Writer = Writer.create()): Writer {
        if (message.delegatorAddr !== '') {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsRequest {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QueryDelegatorUnbondingDelegationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
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
