import { Reader, Writer } from 'protobufjs';
import { RedelegationEntry } from './RedelegationEntry';

export interface RedelegationEntryResponse {
    redelegationEntry?: RedelegationEntry;
    balance: string;
}

export const RedelegationEntryResponse = {
    encode(message: RedelegationEntryResponse, writer: Writer = Writer.create()): Writer {
        if (message.redelegationEntry !== undefined) {
            RedelegationEntry.encode(message.redelegationEntry, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== '') {
            writer.uint32(34).string(message.balance);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): RedelegationEntryResponse {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as RedelegationEntryResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegationEntry = RedelegationEntry.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.balance = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
