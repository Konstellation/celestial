import { Reader, Writer } from 'protobufjs';
import { PageResponse } from '../../../types/PageResponse';
import { UnbondingDelegation } from './UnbondingDelegation';

export interface QueryValidatorUnbondingDelegationsResponse {
    unbondingResponses: UnbondingDelegation[];
    pagination?: PageResponse;
}

export const QueryValidatorUnbondingDelegationsResponse = {
    encode(message: QueryValidatorUnbondingDelegationsResponse, writer: Writer = Writer.create()): Writer {
        for (const v of message.unbondingResponses) {
            UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsResponse {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QueryValidatorUnbondingDelegationsResponse;
        message.unbondingResponses = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32()));
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
