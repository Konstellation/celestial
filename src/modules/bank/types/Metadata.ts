import { DenomUnit } from './DenomUnit';
import { Reader, Writer } from 'protobufjs';

export interface Metadata {
    description: string;
    /** denom_units represents the list of DenomUnit's for a given coin */
    denomUnits: DenomUnit[];
    /** base represents the base denom (should be the DenomUnit with exponent = 0). */
    base: string;
    /**
     * display indicates the suggested denom that should be
     * displayed in clients.
     */
    display: string;
}

export const Metadata = {
    encode(message: Metadata, writer: Writer = Writer.create()): Writer {
        if (message.description !== '') {
            writer.uint32(10).string(message.description);
        }
        for (const v of message.denomUnits) {
            DenomUnit.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.base !== '') {
            writer.uint32(26).string(message.base);
        }
        if (message.display !== '') {
            writer.uint32(34).string(message.display);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): Metadata {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as Metadata;
        message.denomUnits = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = reader.string();
                    break;
                case 2:
                    message.denomUnits.push(DenomUnit.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.base = reader.string();
                    break;
                case 4:
                    message.display = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
