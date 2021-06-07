import { Reader, Writer } from 'protobufjs';

export interface Delegation {
    delegatorAddress: string;
    validatorAddress: string;
    shares: string;
}

export const Delegation = {
    encode(message: Delegation, writer: Writer = Writer.create()): Writer {
        if (message.delegatorAddress !== '') {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== '') {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.shares !== '') {
            writer.uint32(26).string(message.shares);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): Delegation {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as Delegation;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.shares = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
