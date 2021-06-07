import { Coin } from '../../../types/Coin';
import { Reader, Writer } from 'protobufjs';

export interface QueryTotalSupplyResponse {
    supply: Coin[];
}

export const QueryTotalSupplyResponse = {
    encode(message: QueryTotalSupplyResponse, writer: Writer = Writer.create()): Writer {
        for (const v of message.supply) {
            Coin.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QueryTotalSupplyResponse {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QueryTotalSupplyResponse;
        message.supply = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.supply.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
