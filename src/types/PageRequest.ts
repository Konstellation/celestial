import { Reader, Writer } from 'protobufjs';

export interface PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     */
    key: Uint8Array;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     */
    offset: Long;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     */
    limit: Long;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal: boolean;
}

export const PageRequest = {
    encode(message: PageRequest, writer: Writer = Writer.create()): Writer {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (!message.offset.isZero()) {
            writer.uint32(16).uint64(message.offset);
        }
        if (!message.limit.isZero()) {
            writer.uint32(24).uint64(message.limit);
        }
        if (message.countTotal === true) {
            writer.uint32(32).bool(message.countTotal);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): PageRequest {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as PageRequest;
        message.key = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.offset = reader.uint64() as Long;
                    break;
                case 3:
                    message.limit = reader.uint64() as Long;
                    break;
                case 4:
                    message.countTotal = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
