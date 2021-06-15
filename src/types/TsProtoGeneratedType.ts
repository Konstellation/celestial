export interface TsProtoGeneratedType {
    readonly encode: (message: any | { [k: string]: any }, writer?: protobuf.Writer) => protobuf.Writer;
    readonly decode: (input: Uint8Array | protobuf.Reader, length?: number) => any;
    readonly fromJSON: (object: { [k: string]: any }) => any;
    readonly fromPartial: (object: { [k: string]: any }) => any;
    readonly toJSON: (message: any | { [k: string]: any }) => unknown;
}
