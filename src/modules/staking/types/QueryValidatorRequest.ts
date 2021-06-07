import { Reader, Writer } from 'protobufjs';

export interface QueryValidatorRequest {
    validatorAddr: string;
}

export const QueryValidatorRequest = {
    encode(message: QueryValidatorRequest, writer: Writer = Writer.create()): Writer {
        if (message.validatorAddr !== '') {
            writer.uint32(10).string(message.validatorAddr);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QueryValidatorRequest {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QueryValidatorRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
