import { Reader, Writer } from 'protobufjs';
import { Coin } from '../../../types/Coin';

export interface QueryBalanceResponse {
    balance?: Coin;
}

export const QueryBalanceResponse = {
    encode(message: QueryBalanceResponse, writer: Writer = Writer.create()): Writer {
        if (message.balance !== undefined) {
            Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QueryBalanceResponse {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QueryBalanceResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balance = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
