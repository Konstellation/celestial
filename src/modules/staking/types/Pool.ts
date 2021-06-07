import { Reader, Writer } from 'protobufjs';

export interface Pool {
    notBondedTokens: string;
    bondedTokens: string;
}

export const Pool = {
    encode(message: Pool, writer: Writer = Writer.create()): Writer {
        if (message.notBondedTokens !== '') {
            writer.uint32(10).string(message.notBondedTokens);
        }
        if (message.bondedTokens !== '') {
            writer.uint32(18).string(message.bondedTokens);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): Pool {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as Pool;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.notBondedTokens = reader.string();
                    break;
                case 2:
                    message.bondedTokens = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
