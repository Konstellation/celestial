// package: cosmos.bank.v1beta1
// file: bank/bank.proto

import * as jspb from 'google-protobuf';
import * as coin_pb from '../coin_pb';

export class Params extends jspb.Message {
    clearSendEnabledList(): void;
    getSendEnabledList(): Array<SendEnabled>;
    setSendEnabledList(value: Array<SendEnabled>): void;
    addSendEnabled(value?: SendEnabled, index?: number): SendEnabled;

    getDefaultSendEnabled(): boolean;
    setDefaultSendEnabled(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Params.AsObject;
    static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Params;
    static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
    export type AsObject = {
        sendEnabledList: Array<SendEnabled.AsObject>;
        defaultSendEnabled: boolean;
    };
}

export class SendEnabled extends jspb.Message {
    getDenom(): string;
    setDenom(value: string): void;

    getEnabled(): boolean;
    setEnabled(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendEnabled.AsObject;
    static toObject(includeInstance: boolean, msg: SendEnabled): SendEnabled.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: SendEnabled, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendEnabled;
    static deserializeBinaryFromReader(message: SendEnabled, reader: jspb.BinaryReader): SendEnabled;
}

export namespace SendEnabled {
    export type AsObject = {
        denom: string;
        enabled: boolean;
    };
}

export class Input extends jspb.Message {
    getAddress(): string;
    setAddress(value: string): void;

    clearCoinsList(): void;
    getCoinsList(): Array<coin_pb.Coin>;
    setCoinsList(value: Array<coin_pb.Coin>): void;
    addCoins(value?: coin_pb.Coin, index?: number): coin_pb.Coin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Input.AsObject;
    static toObject(includeInstance: boolean, msg: Input): Input.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: Input, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Input;
    static deserializeBinaryFromReader(message: Input, reader: jspb.BinaryReader): Input;
}

export namespace Input {
    export type AsObject = {
        address: string;
        coinsList: Array<coin_pb.Coin.AsObject>;
    };
}

export class Output extends jspb.Message {
    getAddress(): string;
    setAddress(value: string): void;

    clearCoinsList(): void;
    getCoinsList(): Array<coin_pb.Coin>;
    setCoinsList(value: Array<coin_pb.Coin>): void;
    addCoins(value?: coin_pb.Coin, index?: number): coin_pb.Coin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Output.AsObject;
    static toObject(includeInstance: boolean, msg: Output): Output.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: Output, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Output;
    static deserializeBinaryFromReader(message: Output, reader: jspb.BinaryReader): Output;
}

export namespace Output {
    export type AsObject = {
        address: string;
        coinsList: Array<coin_pb.Coin.AsObject>;
    };
}

export class DenomUnit extends jspb.Message {
    getDenom(): string;
    setDenom(value: string): void;

    getExponent(): number;
    setExponent(value: number): void;

    clearAliasesList(): void;
    getAliasesList(): Array<string>;
    setAliasesList(value: Array<string>): void;
    addAliases(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DenomUnit.AsObject;
    static toObject(includeInstance: boolean, msg: DenomUnit): DenomUnit.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: DenomUnit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DenomUnit;
    static deserializeBinaryFromReader(message: DenomUnit, reader: jspb.BinaryReader): DenomUnit;
}

export namespace DenomUnit {
    export type AsObject = {
        denom: string;
        exponent: number;
        aliasesList: Array<string>;
    };
}

export class Metadata extends jspb.Message {
    getDescription(): string;
    setDescription(value: string): void;

    clearDenomUnitsList(): void;
    getDenomUnitsList(): Array<DenomUnit>;
    setDenomUnitsList(value: Array<DenomUnit>): void;
    addDenomUnits(value?: DenomUnit, index?: number): DenomUnit;

    getBase(): string;
    setBase(value: string): void;

    getDisplay(): string;
    setDisplay(value: string): void;

    getName(): string;
    setName(value: string): void;

    getSymbol(): string;
    setSymbol(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Metadata.AsObject;
    static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Metadata;
    static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
    export type AsObject = {
        description: string;
        denomUnitsList: Array<DenomUnit.AsObject>;
        base: string;
        display: string;
        name: string;
        symbol: string;
    };
}
