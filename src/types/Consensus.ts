import { Reader, Writer } from 'protobufjs';

export interface Consensus {
    block: Long;
    app: Long;
}

export const Consensus = {
    encode(message: Consensus, writer: Writer = Writer.create()): Writer {
        if (!message.block.isZero()) {
            writer.uint32(8).uint64(message.block);
        }
        if (!message.app.isZero()) {
            writer.uint32(16).uint64(message.app);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): Consensus {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as Consensus;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = reader.uint64() as Long;
                    break;
                case 2:
                    message.app = reader.uint64() as Long;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
