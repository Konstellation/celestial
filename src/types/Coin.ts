import { Reader, Writer } from 'protobufjs';

export interface Coin {
    denom: string;
    amount: string;
}

export const Coin = {
    encode(message: Coin, writer: Writer = Writer.create()): Writer {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== '') {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): Coin {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as Coin;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
