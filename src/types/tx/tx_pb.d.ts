// package: cosmos.tx.v1beta1
// file: tx/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as coin_pb from "../coin_pb";
import * as tx_signing_pb from "../tx/signing_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class Tx extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): TxBody | undefined;
    setBody(value?: TxBody): Tx;

    hasAuthInfo(): boolean;
    clearAuthInfo(): void;
    getAuthInfo(): AuthInfo | undefined;
    setAuthInfo(value?: AuthInfo): Tx;
    clearSignaturesList(): void;
    getSignaturesList(): Array<Uint8Array | string>;
    getSignaturesList_asU8(): Array<Uint8Array>;
    getSignaturesList_asB64(): Array<string>;
    setSignaturesList(value: Array<Uint8Array | string>): Tx;
    addSignatures(value: Uint8Array | string, index?: number): Uint8Array | string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Tx.AsObject;
    static toObject(includeInstance: boolean, msg: Tx): Tx.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Tx, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Tx;
    static deserializeBinaryFromReader(message: Tx, reader: jspb.BinaryReader): Tx;
}

export namespace Tx {
    export type AsObject = {
        body?: TxBody.AsObject,
        authInfo?: AuthInfo.AsObject,
        signaturesList: Array<Uint8Array | string>,
    }
}

export class TxRaw extends jspb.Message { 
    getBodyBytes(): Uint8Array | string;
    getBodyBytes_asU8(): Uint8Array;
    getBodyBytes_asB64(): string;
    setBodyBytes(value: Uint8Array | string): TxRaw;
    getAuthInfoBytes(): Uint8Array | string;
    getAuthInfoBytes_asU8(): Uint8Array;
    getAuthInfoBytes_asB64(): string;
    setAuthInfoBytes(value: Uint8Array | string): TxRaw;
    clearSignaturesList(): void;
    getSignaturesList(): Array<Uint8Array | string>;
    getSignaturesList_asU8(): Array<Uint8Array>;
    getSignaturesList_asB64(): Array<string>;
    setSignaturesList(value: Array<Uint8Array | string>): TxRaw;
    addSignatures(value: Uint8Array | string, index?: number): Uint8Array | string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TxRaw.AsObject;
    static toObject(includeInstance: boolean, msg: TxRaw): TxRaw.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TxRaw, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TxRaw;
    static deserializeBinaryFromReader(message: TxRaw, reader: jspb.BinaryReader): TxRaw;
}

export namespace TxRaw {
    export type AsObject = {
        bodyBytes: Uint8Array | string,
        authInfoBytes: Uint8Array | string,
        signaturesList: Array<Uint8Array | string>,
    }
}

export class SignDoc extends jspb.Message { 
    getBodyBytes(): Uint8Array | string;
    getBodyBytes_asU8(): Uint8Array;
    getBodyBytes_asB64(): string;
    setBodyBytes(value: Uint8Array | string): SignDoc;
    getAuthInfoBytes(): Uint8Array | string;
    getAuthInfoBytes_asU8(): Uint8Array;
    getAuthInfoBytes_asB64(): string;
    setAuthInfoBytes(value: Uint8Array | string): SignDoc;
    getChainId(): string;
    setChainId(value: string): SignDoc;
    getAccountNumber(): number;
    setAccountNumber(value: number): SignDoc;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignDoc.AsObject;
    static toObject(includeInstance: boolean, msg: SignDoc): SignDoc.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignDoc, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignDoc;
    static deserializeBinaryFromReader(message: SignDoc, reader: jspb.BinaryReader): SignDoc;
}

export namespace SignDoc {
    export type AsObject = {
        bodyBytes: Uint8Array | string,
        authInfoBytes: Uint8Array | string,
        chainId: string,
        accountNumber: number,
    }
}

export class TxBody extends jspb.Message { 
    clearMessagesList(): void;
    getMessagesList(): Array<google_protobuf_any_pb.Any>;
    setMessagesList(value: Array<google_protobuf_any_pb.Any>): TxBody;
    addMessages(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;
    getMemo(): string;
    setMemo(value: string): TxBody;
    getTimeoutHeight(): number;
    setTimeoutHeight(value: number): TxBody;
    clearExtensionOptionsList(): void;
    getExtensionOptionsList(): Array<google_protobuf_any_pb.Any>;
    setExtensionOptionsList(value: Array<google_protobuf_any_pb.Any>): TxBody;
    addExtensionOptions(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;
    clearNonCriticalExtensionOptionsList(): void;
    getNonCriticalExtensionOptionsList(): Array<google_protobuf_any_pb.Any>;
    setNonCriticalExtensionOptionsList(value: Array<google_protobuf_any_pb.Any>): TxBody;
    addNonCriticalExtensionOptions(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TxBody.AsObject;
    static toObject(includeInstance: boolean, msg: TxBody): TxBody.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TxBody, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TxBody;
    static deserializeBinaryFromReader(message: TxBody, reader: jspb.BinaryReader): TxBody;
}

export namespace TxBody {
    export type AsObject = {
        messagesList: Array<google_protobuf_any_pb.Any.AsObject>,
        memo: string,
        timeoutHeight: number,
        extensionOptionsList: Array<google_protobuf_any_pb.Any.AsObject>,
        nonCriticalExtensionOptionsList: Array<google_protobuf_any_pb.Any.AsObject>,
    }
}

export class AuthInfo extends jspb.Message { 
    clearSignerInfosList(): void;
    getSignerInfosList(): Array<SignerInfo>;
    setSignerInfosList(value: Array<SignerInfo>): AuthInfo;
    addSignerInfos(value?: SignerInfo, index?: number): SignerInfo;

    hasFee(): boolean;
    clearFee(): void;
    getFee(): Fee | undefined;
    setFee(value?: Fee): AuthInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthInfo.AsObject;
    static toObject(includeInstance: boolean, msg: AuthInfo): AuthInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthInfo;
    static deserializeBinaryFromReader(message: AuthInfo, reader: jspb.BinaryReader): AuthInfo;
}

export namespace AuthInfo {
    export type AsObject = {
        signerInfosList: Array<SignerInfo.AsObject>,
        fee?: Fee.AsObject,
    }
}

export class SignerInfo extends jspb.Message { 

    hasPublicKey(): boolean;
    clearPublicKey(): void;
    getPublicKey(): google_protobuf_any_pb.Any | undefined;
    setPublicKey(value?: google_protobuf_any_pb.Any): SignerInfo;

    hasModeInfo(): boolean;
    clearModeInfo(): void;
    getModeInfo(): ModeInfo | undefined;
    setModeInfo(value?: ModeInfo): SignerInfo;
    getSequence(): number;
    setSequence(value: number): SignerInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignerInfo.AsObject;
    static toObject(includeInstance: boolean, msg: SignerInfo): SignerInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignerInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignerInfo;
    static deserializeBinaryFromReader(message: SignerInfo, reader: jspb.BinaryReader): SignerInfo;
}

export namespace SignerInfo {
    export type AsObject = {
        publicKey?: google_protobuf_any_pb.Any.AsObject,
        modeInfo?: ModeInfo.AsObject,
        sequence: number,
    }
}

export class ModeInfo extends jspb.Message { 

    hasSingle(): boolean;
    clearSingle(): void;
    getSingle(): ModeInfo.Single | undefined;
    setSingle(value?: ModeInfo.Single): ModeInfo;

    getSumCase(): ModeInfo.SumCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModeInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ModeInfo): ModeInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModeInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModeInfo;
    static deserializeBinaryFromReader(message: ModeInfo, reader: jspb.BinaryReader): ModeInfo;
}

export namespace ModeInfo {
    export type AsObject = {
        single?: ModeInfo.Single.AsObject,
    }


    export class Single extends jspb.Message { 
        getMode(): tx_signing_pb.SignMode;
        setMode(value: tx_signing_pb.SignMode): Single;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Single.AsObject;
        static toObject(includeInstance: boolean, msg: Single): Single.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Single, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Single;
        static deserializeBinaryFromReader(message: Single, reader: jspb.BinaryReader): Single;
    }

    export namespace Single {
        export type AsObject = {
            mode: tx_signing_pb.SignMode,
        }
    }


    export enum SumCase {
        SUM_NOT_SET = 0,
        SINGLE = 1,
    }

}

export class Fee extends jspb.Message { 
    clearAmountList(): void;
    getAmountList(): Array<coin_pb.Coin>;
    setAmountList(value: Array<coin_pb.Coin>): Fee;
    addAmount(value?: coin_pb.Coin, index?: number): coin_pb.Coin;
    getGasLimit(): number;
    setGasLimit(value: number): Fee;
    getPayer(): string;
    setPayer(value: string): Fee;
    getGranter(): string;
    setGranter(value: string): Fee;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Fee.AsObject;
    static toObject(includeInstance: boolean, msg: Fee): Fee.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Fee, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Fee;
    static deserializeBinaryFromReader(message: Fee, reader: jspb.BinaryReader): Fee;
}

export namespace Fee {
    export type AsObject = {
        amountList: Array<coin_pb.Coin.AsObject>,
        gasLimit: number,
        payer: string,
        granter: string,
    }
}
