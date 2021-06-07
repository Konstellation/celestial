import { Reader, Writer } from 'protobufjs';
import { UnbondingDelegation } from './UnbondingDelegation';

export interface QueryUnbondingDelegationResponse {
    unbond?: UnbondingDelegation;
}

export const QueryUnbondingDelegationResponse = {
    encode(message: QueryUnbondingDelegationResponse, writer: Writer = Writer.create()): Writer {
        if (message.unbond !== undefined) {
            UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QueryUnbondingDelegationResponse {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QueryUnbondingDelegationResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbond = UnbondingDelegation.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
