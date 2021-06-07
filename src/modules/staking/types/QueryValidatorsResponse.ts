import { PageResponse } from '../../../types/PageResponse';
import { Reader, Writer } from 'protobufjs';
import { Validator } from './Validator';

export interface QueryValidatorsResponse {
    validators: Validator[];
    pagination?: PageResponse;
}

export const QueryValidatorsResponse = {
    encode(message: QueryValidatorsResponse, writer: Writer = Writer.create()): Writer {
        for (const v of message.validators) {
            Validator.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QueryValidatorsResponse {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QueryValidatorsResponse;
        message.validators = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(Validator.decode(reader, reader.uint32()));
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
