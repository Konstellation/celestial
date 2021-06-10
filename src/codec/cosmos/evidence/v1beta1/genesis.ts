/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Any } from '../../../google/protobuf/any';

export const protobufPackage = 'cosmos.evidence.v1beta1';

/** GenesisState defines the evidence module's genesis state. */
export interface GenesisState {
    /** evidence defines all the evidence at genesis. */
    evidence: Any[];
}

const baseGenesisState: object = {};

export const GenesisState = {
    encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.evidence) {
            Any.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState } as GenesisState;
        message.evidence = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evidence.push(Any.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GenesisState {
        const message = { ...baseGenesisState } as GenesisState;
        message.evidence = [];
        if (object.evidence !== undefined && object.evidence !== null) {
            for (const e of object.evidence) {
                message.evidence.push(Any.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: GenesisState): unknown {
        const obj: any = {};
        if (message.evidence) {
            obj.evidence = message.evidence.map((e) => (e ? Any.toJSON(e) : undefined));
        } else {
            obj.evidence = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<GenesisState>): GenesisState {
        const message = { ...baseGenesisState } as GenesisState;
        message.evidence = [];
        if (object.evidence !== undefined && object.evidence !== null) {
            for (const e of object.evidence) {
                message.evidence.push(Any.fromPartial(e));
            }
        }
        return message;
    },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
