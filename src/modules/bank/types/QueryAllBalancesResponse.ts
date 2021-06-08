import { PageResponse } from '../../../types/PageResponse';
import { Reader, Writer } from 'protobufjs';
import { Coin } from '../../../types/Coin';

export interface QueryAllBalancesResponse {
    balances: Coin[];
    pagination?: PageResponse;
}

export const QueryAllBalancesResponse = {
    encode(message: QueryAllBalancesResponse, writer: Writer = Writer.create()): Writer {
        for (const v of message.balances) {
            Coin.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QueryAllBalancesResponse {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QueryAllBalancesResponse;
        message.balances = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balances.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
