import { Reader, Writer } from 'protobufjs';
import { SendEnabled } from './SendEnabled';

export interface Params {
    sendEnabled: SendEnabled[];
    defaultSendEnabled: boolean;
}

export const Params = {
    encode(message: Params, writer: Writer = Writer.create()): Writer {
        for (const v of message.sendEnabled) {
            SendEnabled.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.defaultSendEnabled === true) {
            writer.uint32(16).bool(message.defaultSendEnabled);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): Params {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as Params;
        message.sendEnabled = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sendEnabled.push(SendEnabled.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.defaultSendEnabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
