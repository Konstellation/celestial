import { Reader, Writer } from 'protobufjs';

export interface QueryDelegatorValidatorRequest {
    delegatorAddr: string;
    validatorAddr: string;
}

export const QueryDelegatorValidatorRequest = {
    encode(message: QueryDelegatorValidatorRequest, writer: Writer = Writer.create()): Writer {
        if (message.delegatorAddr !== '') {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.validatorAddr !== '') {
            writer.uint32(18).string(message.validatorAddr);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QueryDelegatorValidatorRequest {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QueryDelegatorValidatorRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
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
