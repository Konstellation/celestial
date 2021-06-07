import { Reader, Writer } from 'protobufjs';
import { fromTimestamp, Timestamp, toTimestamp } from './Timestamp';

export interface RedelegationEntry {
    creationHeight: Long;
    completionTime?: Date;
    initialBalance: string;
    sharesDst: string;
}

export const RedelegationEntry = {
    encode(message: RedelegationEntry, writer: Writer = Writer.create()): Writer {
        if (!message.creationHeight.isZero()) {
            writer.uint32(8).int64(message.creationHeight);
        }
        if (message.completionTime !== undefined) {
            Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.initialBalance !== '') {
            writer.uint32(26).string(message.initialBalance);
        }
        if (message.sharesDst !== '') {
            writer.uint32(34).string(message.sharesDst);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): RedelegationEntry {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as RedelegationEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creationHeight = reader.int64() as Long;
                    break;
                case 2:
                    message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.initialBalance = reader.string();
                    break;
                case 4:
                    message.sharesDst = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
