// package: cosmos.bank.v1beta1
// file: bank/query.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf';
import * as pagination_pb from '../pagination_pb';
import * as coin_pb from '../coin_pb';
import * as bank_bank_pb from '../bank/bank_pb';

export class QueryBalanceRequest extends jspb.Message {
    getAddress(): string;
    setAddress(value: string): QueryBalanceRequest;
    getDenom(): string;
    setDenom(value: string): QueryBalanceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryBalanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryBalanceRequest): QueryBalanceRequest.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: QueryBalanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryBalanceRequest;
    static deserializeBinaryFromReader(message: QueryBalanceRequest, reader: jspb.BinaryReader): QueryBalanceRequest;
}

export namespace QueryBalanceRequest {
    export type AsObject = {
        address: string;
        denom: string;
    };
}

export class QueryBalanceResponse extends jspb.Message {
    hasBalance(): boolean;
    clearBalance(): void;
    getBalance(): coin_pb.Coin | undefined;
    setBalance(value?: coin_pb.Coin): QueryBalanceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryBalanceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryBalanceResponse): QueryBalanceResponse.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: QueryBalanceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryBalanceResponse;
    static deserializeBinaryFromReader(message: QueryBalanceResponse, reader: jspb.BinaryReader): QueryBalanceResponse;
}

export namespace QueryBalanceResponse {
    export type AsObject = {
        balance?: coin_pb.Coin.AsObject;
    };
}

export class QueryAllBalancesRequest extends jspb.Message {
    getAddress(): string;
    setAddress(value: string): QueryAllBalancesRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): pagination_pb.PageRequest | undefined;
    setPagination(value?: pagination_pb.PageRequest): QueryAllBalancesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryAllBalancesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryAllBalancesRequest): QueryAllBalancesRequest.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: QueryAllBalancesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryAllBalancesRequest;
    static deserializeBinaryFromReader(
        message: QueryAllBalancesRequest,
        reader: jspb.BinaryReader,
    ): QueryAllBalancesRequest;
}

export namespace QueryAllBalancesRequest {
    export type AsObject = {
        address: string;
        pagination?: pagination_pb.PageRequest.AsObject;
    };
}

export class QueryAllBalancesResponse extends jspb.Message {
    clearBalancesList(): void;
    getBalancesList(): Array<coin_pb.Coin>;
    setBalancesList(value: Array<coin_pb.Coin>): QueryAllBalancesResponse;
    addBalances(value?: coin_pb.Coin, index?: number): coin_pb.Coin;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): pagination_pb.PageResponse | undefined;
    setPagination(value?: pagination_pb.PageResponse): QueryAllBalancesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryAllBalancesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryAllBalancesResponse): QueryAllBalancesResponse.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: QueryAllBalancesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryAllBalancesResponse;
    static deserializeBinaryFromReader(
        message: QueryAllBalancesResponse,
        reader: jspb.BinaryReader,
    ): QueryAllBalancesResponse;
}

export namespace QueryAllBalancesResponse {
    export type AsObject = {
        balancesList: Array<coin_pb.Coin.AsObject>;
        pagination?: pagination_pb.PageResponse.AsObject;
    };
}

export class QueryTotalSupplyRequest extends jspb.Message {
    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): pagination_pb.PageRequest | undefined;
    setPagination(value?: pagination_pb.PageRequest): QueryTotalSupplyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryTotalSupplyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryTotalSupplyRequest): QueryTotalSupplyRequest.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: QueryTotalSupplyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryTotalSupplyRequest;
    static deserializeBinaryFromReader(
        message: QueryTotalSupplyRequest,
        reader: jspb.BinaryReader,
    ): QueryTotalSupplyRequest;
}

export namespace QueryTotalSupplyRequest {
    export type AsObject = {
        pagination?: pagination_pb.PageRequest.AsObject;
    };
}

export class QueryTotalSupplyResponse extends jspb.Message {
    clearSupplyList(): void;
    getSupplyList(): Array<coin_pb.Coin>;
    setSupplyList(value: Array<coin_pb.Coin>): QueryTotalSupplyResponse;
    addSupply(value?: coin_pb.Coin, index?: number): coin_pb.Coin;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): pagination_pb.PageResponse | undefined;
    setPagination(value?: pagination_pb.PageResponse): QueryTotalSupplyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryTotalSupplyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryTotalSupplyResponse): QueryTotalSupplyResponse.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: QueryTotalSupplyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryTotalSupplyResponse;
    static deserializeBinaryFromReader(
        message: QueryTotalSupplyResponse,
        reader: jspb.BinaryReader,
    ): QueryTotalSupplyResponse;
}

export namespace QueryTotalSupplyResponse {
    export type AsObject = {
        supplyList: Array<coin_pb.Coin.AsObject>;
        pagination?: pagination_pb.PageResponse.AsObject;
    };
}

export class QuerySupplyOfRequest extends jspb.Message {
    getDenom(): string;
    setDenom(value: string): QuerySupplyOfRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuerySupplyOfRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QuerySupplyOfRequest): QuerySupplyOfRequest.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: QuerySupplyOfRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuerySupplyOfRequest;
    static deserializeBinaryFromReader(message: QuerySupplyOfRequest, reader: jspb.BinaryReader): QuerySupplyOfRequest;
}

export namespace QuerySupplyOfRequest {
    export type AsObject = {
        denom: string;
    };
}

export class QuerySupplyOfResponse extends jspb.Message {
    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): coin_pb.Coin | undefined;
    setAmount(value?: coin_pb.Coin): QuerySupplyOfResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuerySupplyOfResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QuerySupplyOfResponse): QuerySupplyOfResponse.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: QuerySupplyOfResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuerySupplyOfResponse;
    static deserializeBinaryFromReader(
        message: QuerySupplyOfResponse,
        reader: jspb.BinaryReader,
    ): QuerySupplyOfResponse;
}

export namespace QuerySupplyOfResponse {
    export type AsObject = {
        amount?: coin_pb.Coin.AsObject;
    };
}

export class QueryParamsRequest extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryParamsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryParamsRequest): QueryParamsRequest.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: QueryParamsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
    static deserializeBinaryFromReader(message: QueryParamsRequest, reader: jspb.BinaryReader): QueryParamsRequest;
}

export namespace QueryParamsRequest {
    export type AsObject = {};
}

export class QueryParamsResponse extends jspb.Message {
    hasParams(): boolean;
    clearParams(): void;
    getParams(): bank_bank_pb.Params | undefined;
    setParams(value?: bank_bank_pb.Params): QueryParamsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryParamsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryParamsResponse): QueryParamsResponse.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: QueryParamsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
    static deserializeBinaryFromReader(message: QueryParamsResponse, reader: jspb.BinaryReader): QueryParamsResponse;
}

export namespace QueryParamsResponse {
    export type AsObject = {
        params?: bank_bank_pb.Params.AsObject;
    };
}

export class QueryDenomsMetadataRequest extends jspb.Message {
    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): pagination_pb.PageRequest | undefined;
    setPagination(value?: pagination_pb.PageRequest): QueryDenomsMetadataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryDenomsMetadataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryDenomsMetadataRequest): QueryDenomsMetadataRequest.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: QueryDenomsMetadataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryDenomsMetadataRequest;
    static deserializeBinaryFromReader(
        message: QueryDenomsMetadataRequest,
        reader: jspb.BinaryReader,
    ): QueryDenomsMetadataRequest;
}

export namespace QueryDenomsMetadataRequest {
    export type AsObject = {
        pagination?: pagination_pb.PageRequest.AsObject;
    };
}

export class QueryDenomsMetadataResponse extends jspb.Message {
    clearMetadatasList(): void;
    getMetadatasList(): Array<bank_bank_pb.Metadata>;
    setMetadatasList(value: Array<bank_bank_pb.Metadata>): QueryDenomsMetadataResponse;
    addMetadatas(value?: bank_bank_pb.Metadata, index?: number): bank_bank_pb.Metadata;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): pagination_pb.PageResponse | undefined;
    setPagination(value?: pagination_pb.PageResponse): QueryDenomsMetadataResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryDenomsMetadataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryDenomsMetadataResponse): QueryDenomsMetadataResponse.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: QueryDenomsMetadataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryDenomsMetadataResponse;
    static deserializeBinaryFromReader(
        message: QueryDenomsMetadataResponse,
        reader: jspb.BinaryReader,
    ): QueryDenomsMetadataResponse;
}

export namespace QueryDenomsMetadataResponse {
    export type AsObject = {
        metadatasList: Array<bank_bank_pb.Metadata.AsObject>;
        pagination?: pagination_pb.PageResponse.AsObject;
    };
}

export class QueryDenomMetadataRequest extends jspb.Message {
    getDenom(): string;
    setDenom(value: string): QueryDenomMetadataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryDenomMetadataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryDenomMetadataRequest): QueryDenomMetadataRequest.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: QueryDenomMetadataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryDenomMetadataRequest;
    static deserializeBinaryFromReader(
        message: QueryDenomMetadataRequest,
        reader: jspb.BinaryReader,
    ): QueryDenomMetadataRequest;
}

export namespace QueryDenomMetadataRequest {
    export type AsObject = {
        denom: string;
    };
}

export class QueryDenomMetadataResponse extends jspb.Message {
    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): bank_bank_pb.Metadata | undefined;
    setMetadata(value?: bank_bank_pb.Metadata): QueryDenomMetadataResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryDenomMetadataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryDenomMetadataResponse): QueryDenomMetadataResponse.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: QueryDenomMetadataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryDenomMetadataResponse;
    static deserializeBinaryFromReader(
        message: QueryDenomMetadataResponse,
        reader: jspb.BinaryReader,
    ): QueryDenomMetadataResponse;
}

export namespace QueryDenomMetadataResponse {
    export type AsObject = {
        metadata?: bank_bank_pb.Metadata.AsObject;
    };
}
