import { Reader, Writer } from 'protobufjs';
import { PageResponse } from '../../../types/PageResponse';
import { RedelegationResponse } from './RedelegationResponse';

export interface QueryRedelegationsResponse {
    redelegationResponses: RedelegationResponse[];
    pagination?: PageResponse;
}

export const QueryRedelegationsResponse = {
    encode(message: QueryRedelegationsResponse, writer: Writer = Writer.create()): Writer {
        for (const v of message.redelegationResponses) {
            RedelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QueryRedelegationsResponse {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QueryRedelegationsResponse;
        message.redelegationResponses = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegationResponses.push(RedelegationResponse.decode(reader, reader.uint32()));
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
