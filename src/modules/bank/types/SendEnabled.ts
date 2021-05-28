import { Reader, Writer } from 'protobufjs';

export interface SendEnabled {
    denom: string;
    enabled: boolean;
}

export const SendEnabled = {
    encode(message: SendEnabled, writer: Writer = Writer.create()): Writer {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        if (message.enabled === true) {
            writer.uint32(16).bool(message.enabled);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): SendEnabled {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as SendEnabled;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
