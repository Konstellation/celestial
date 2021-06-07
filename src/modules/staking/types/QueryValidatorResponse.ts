import { Reader, Writer } from 'protobufjs';
import { Validator } from './Validator';

export interface QueryValidatorResponse {
    validator?: Validator;
}

export const QueryValidatorResponse = {
    encode(message: QueryValidatorResponse, writer: Writer = Writer.create()): Writer {
        if (message.validator !== undefined) {
            Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QueryValidatorResponse {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QueryValidatorResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = Validator.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
