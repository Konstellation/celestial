import { Reader, Writer } from 'protobufjs';
import { DelegationResponse } from './DelegationResponse';

export interface QueryDelegationResponse {
    delegationResponse?: DelegationResponse;
}

export const QueryDelegationResponse = {
    encode(message: QueryDelegationResponse, writer: Writer = Writer.create()): Writer {
        if (message.delegationResponse !== undefined) {
            DelegationResponse.encode(message.delegationResponse, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QueryDelegationResponse {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QueryDelegationResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegationResponse = DelegationResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
