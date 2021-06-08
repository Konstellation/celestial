import { Reader, Writer } from 'protobufjs';

export interface Params {
    maxMemoCharacters: Long;
    txSigLimit: Long;
    txSizeCostPerByte: Long;
    sigVerifyCostEd25519: Long;
    sigVerifyCostSecp256k1: Long;
}

export const Params = {
    encode(message: Params, writer: Writer = Writer.create()): Writer {
        if (!message.maxMemoCharacters.isZero()) {
            writer.uint32(8).uint64(message.maxMemoCharacters);
        }
        if (!message.txSigLimit.isZero()) {
            writer.uint32(16).uint64(message.txSigLimit);
        }
        if (!message.txSizeCostPerByte.isZero()) {
            writer.uint32(24).uint64(message.txSizeCostPerByte);
        }
        if (!message.sigVerifyCostEd25519.isZero()) {
            writer.uint32(32).uint64(message.sigVerifyCostEd25519);
        }
        if (!message.sigVerifyCostSecp256k1.isZero()) {
            writer.uint32(40).uint64(message.sigVerifyCostSecp256k1);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): Params {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as Params;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxMemoCharacters = reader.uint64() as Long;
                    break;
                case 2:
                    message.txSigLimit = reader.uint64() as Long;
                    break;
                case 3:
                    message.txSizeCostPerByte = reader.uint64() as Long;
                    break;
                case 4:
                    message.sigVerifyCostEd25519 = reader.uint64() as Long;
                    break;
                case 5:
                    message.sigVerifyCostSecp256k1 = reader.uint64() as Long;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
