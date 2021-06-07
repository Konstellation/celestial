import { Reader, Writer } from 'protobufjs';
import { Redelegation } from './Redelegation';
import { RedelegationEntryResponse } from './RedelegationEntryResponse';

export interface RedelegationResponse {
    redelegation?: Redelegation;
    entries: RedelegationEntryResponse[];
}

export const RedelegationResponse = {
    encode(message: RedelegationResponse, writer: Writer = Writer.create()): Writer {
        if (message.redelegation !== undefined) {
            Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.entries) {
            RedelegationEntryResponse.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): RedelegationResponse {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as RedelegationResponse;
        message.entries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegation = Redelegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.entries.push(RedelegationEntryResponse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
