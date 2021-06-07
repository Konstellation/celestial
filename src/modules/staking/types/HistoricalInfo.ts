import { Reader, Writer } from 'protobufjs';
import { Header } from '../../../types/Header';
import { Validator } from './Validator';

export interface HistoricalInfo {
    header?: Header;
    valset: Validator[];
}

export const HistoricalInfo = {
    encode(message: HistoricalInfo, writer: Writer = Writer.create()): Writer {
        if (message.header !== undefined) {
            Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.valset) {
            Validator.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): HistoricalInfo {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as HistoricalInfo;
        message.valset = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.valset.push(Validator.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
