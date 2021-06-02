import { Any } from '@cosmjs/stargate/build/codec/google/protobuf/any';
import { Reader, Writer } from 'protobufjs';

export interface QueryAccountResponse {
    /** account defines the account of the corresponding address. */
    account?: Any;
}

export const QueryAccountResponse = {
    encode(message: QueryAccountResponse, writer: Writer = Writer.create()): Writer {
        if (message.account !== undefined) {
            Any.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QueryAccountResponse {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QueryAccountResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
