import { Any } from '@cosmjs/stargate/build/codec/google/protobuf/any';
import { Reader, Writer } from 'protobufjs';

export interface BaseAccount {
    address: string;
    pubKey?: Any;
    accountNumber: Long;
    sequence: Long;
}

export const BaseAccount = {
    encode(message: BaseAccount, writer: Writer = Writer.create()): Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.pubKey !== undefined) {
            Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (!message.accountNumber.isZero()) {
            writer.uint32(24).uint64(message.accountNumber);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(32).uint64(message.sequence);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): BaseAccount {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as BaseAccount;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pubKey = Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.accountNumber = reader.uint64() as Long;
                    break;
                case 4:
                    message.sequence = reader.uint64() as Long;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
