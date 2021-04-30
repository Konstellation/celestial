// package: cosmos.tx.signing.v1beta1
// file: tx/signing.proto

import * as jspb from 'google-protobuf';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';

export class SignatureDescriptors extends jspb.Message {
    clearSignaturesList(): void;
    getSignaturesList(): Array<SignatureDescriptor>;
    setSignaturesList(value: Array<SignatureDescriptor>): void;
    addSignatures(value?: SignatureDescriptor, index?: number): SignatureDescriptor;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignatureDescriptors.AsObject;
    static toObject(includeInstance: boolean, msg: SignatureDescriptors): SignatureDescriptors.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: SignatureDescriptors, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignatureDescriptors;
    static deserializeBinaryFromReader(message: SignatureDescriptors, reader: jspb.BinaryReader): SignatureDescriptors;
}

export namespace SignatureDescriptors {
    export type AsObject = {
        signaturesList: Array<SignatureDescriptor.AsObject>;
    };
}

export class SignatureDescriptor extends jspb.Message {
    hasPublicKey(): boolean;
    clearPublicKey(): void;
    getPublicKey(): google_protobuf_any_pb.Any | undefined;
    setPublicKey(value?: google_protobuf_any_pb.Any): void;

    hasData(): boolean;
    clearData(): void;
    getData(): SignatureDescriptor.Data | undefined;
    setData(value?: SignatureDescriptor.Data): void;

    getSequence(): number;
    setSequence(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignatureDescriptor.AsObject;
    static toObject(includeInstance: boolean, msg: SignatureDescriptor): SignatureDescriptor.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: SignatureDescriptor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignatureDescriptor;
    static deserializeBinaryFromReader(message: SignatureDescriptor, reader: jspb.BinaryReader): SignatureDescriptor;
}

export namespace SignatureDescriptor {
    export type AsObject = {
        publicKey?: google_protobuf_any_pb.Any.AsObject;
        data?: SignatureDescriptor.Data.AsObject;
        sequence: number;
    };

    export class Data extends jspb.Message {
        hasSingle(): boolean;
        clearSingle(): void;
        getSingle(): SignatureDescriptor.Data.Single | undefined;
        setSingle(value?: SignatureDescriptor.Data.Single): void;

        getSumCase(): Data.SumCase;
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Data.AsObject;
        static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
        static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
        static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
        static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Data;
        static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
    }

    export namespace Data {
        export type AsObject = {
            single?: SignatureDescriptor.Data.Single.AsObject;
        };

        export class Single extends jspb.Message {
            getMode(): SignModeMap[keyof SignModeMap];
            setMode(value: SignModeMap[keyof SignModeMap]): void;

            getSignature(): Uint8Array | string;
            getSignature_asU8(): Uint8Array;
            getSignature_asB64(): string;
            setSignature(value: Uint8Array | string): void;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Single.AsObject;
            static toObject(includeInstance: boolean, msg: Single): Single.AsObject;
            static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
            static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
            static serializeBinaryToWriter(message: Single, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Single;
            static deserializeBinaryFromReader(message: Single, reader: jspb.BinaryReader): Single;
        }

        export namespace Single {
            export type AsObject = {
                mode: SignModeMap[keyof SignModeMap];
                signature: Uint8Array | string;
            };
        }

        export enum SumCase {
            SUM_NOT_SET = 0,
            SINGLE = 1,
        }
    }
}

export interface SignModeMap {
    SIGN_MODE_UNSPECIFIED: 0;
    SIGN_MODE_DIRECT: 1;
    SIGN_MODE_TEXTUAL: 2;
    SIGN_MODE_LEGACY_AMINO_JSON: 127;
}

export const SignMode: SignModeMap;
