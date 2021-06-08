import { Coin } from '../../../types/Coin';
import { Reader, Writer } from 'protobufjs';

export interface QuerySupplyOfResponse {
    amount?: Coin;
}

export const QuerySupplyOfResponse = {
    encode(message: QuerySupplyOfResponse, writer: Writer = Writer.create()): Writer {
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QuerySupplyOfResponse {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QuerySupplyOfResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
