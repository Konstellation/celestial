import { PageRequest } from '../../../types/PageRequest';
import { Reader, Writer } from 'protobufjs';

export interface QueryAllBalancesRequest {
    address: string;
    pagination?: PageRequest;
}

export const QueryAllBalancesRequest = {
    encode(message: QueryAllBalancesRequest, writer: Writer = Writer.create()): Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): QueryAllBalancesRequest {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as QueryAllBalancesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
