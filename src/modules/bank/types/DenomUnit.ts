import { Reader, Writer } from 'protobufjs';

export interface DenomUnit {
    denom: string;
    exponent: number;
    aliases: string[];
}

export const DenomUnit = {
    encode(message: DenomUnit, writer: Writer = Writer.create()): Writer {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        if (message.exponent !== 0) {
            writer.uint32(16).uint32(message.exponent);
        }
        for (const v of message.aliases) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): DenomUnit {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as DenomUnit;
        message.aliases = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.exponent = reader.uint32();
                    break;
                case 3:
                    message.aliases.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
