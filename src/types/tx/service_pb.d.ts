// package: cosmos.tx.v1beta1
// file: tx/service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf';
import * as abci_pb from '../abci_pb';
import * as tx_tx_pb from '../tx/tx_pb';
import * as pagination_pb from '../pagination_pb';

export class GetTxsEventRequest extends jspb.Message {
    clearEventsList(): void;
    getEventsList(): Array<string>;
    setEventsList(value: Array<string>): GetTxsEventRequest;
    addEvents(value: string, index?: number): string;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): pagination_pb.PageRequest | undefined;
    setPagination(value?: pagination_pb.PageRequest): GetTxsEventRequest;
    getOrderBy(): OrderBy;
    setOrderBy(value: OrderBy): GetTxsEventRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTxsEventRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTxsEventRequest): GetTxsEventRequest.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: GetTxsEventRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTxsEventRequest;
    static deserializeBinaryFromReader(message: GetTxsEventRequest, reader: jspb.BinaryReader): GetTxsEventRequest;
}

export namespace GetTxsEventRequest {
    export type AsObject = {
        eventsList: Array<string>;
        pagination?: pagination_pb.PageRequest.AsObject;
        orderBy: OrderBy;
    };
}

export class GetTxsEventResponse extends jspb.Message {
    clearTxsList(): void;
    getTxsList(): Array<tx_tx_pb.Tx>;
    setTxsList(value: Array<tx_tx_pb.Tx>): GetTxsEventResponse;
    addTxs(value?: tx_tx_pb.Tx, index?: number): tx_tx_pb.Tx;
    clearTxResponsesList(): void;
    getTxResponsesList(): Array<abci_pb.TxResponse>;
    setTxResponsesList(value: Array<abci_pb.TxResponse>): GetTxsEventResponse;
    addTxResponses(value?: abci_pb.TxResponse, index?: number): abci_pb.TxResponse;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): pagination_pb.PageResponse | undefined;
    setPagination(value?: pagination_pb.PageResponse): GetTxsEventResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTxsEventResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTxsEventResponse): GetTxsEventResponse.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: GetTxsEventResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTxsEventResponse;
    static deserializeBinaryFromReader(message: GetTxsEventResponse, reader: jspb.BinaryReader): GetTxsEventResponse;
}

export namespace GetTxsEventResponse {
    export type AsObject = {
        txsList: Array<tx_tx_pb.Tx.AsObject>;
        txResponsesList: Array<abci_pb.TxResponse.AsObject>;
        pagination?: pagination_pb.PageResponse.AsObject;
    };
}

export class BroadcastTxRequest extends jspb.Message {
    getTxBytes(): Uint8Array | string;
    getTxBytes_asU8(): Uint8Array;
    getTxBytes_asB64(): string;
    setTxBytes(value: Uint8Array | string): BroadcastTxRequest;
    getMode(): BroadcastMode;
    setMode(value: BroadcastMode): BroadcastTxRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BroadcastTxRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BroadcastTxRequest): BroadcastTxRequest.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: BroadcastTxRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BroadcastTxRequest;
    static deserializeBinaryFromReader(message: BroadcastTxRequest, reader: jspb.BinaryReader): BroadcastTxRequest;
}

export namespace BroadcastTxRequest {
    export type AsObject = {
        txBytes: Uint8Array | string;
        mode: BroadcastMode;
    };
}

export class BroadcastTxResponse extends jspb.Message {
    hasTxResponse(): boolean;
    clearTxResponse(): void;
    getTxResponse(): abci_pb.TxResponse | undefined;
    setTxResponse(value?: abci_pb.TxResponse): BroadcastTxResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BroadcastTxResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BroadcastTxResponse): BroadcastTxResponse.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: BroadcastTxResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BroadcastTxResponse;
    static deserializeBinaryFromReader(message: BroadcastTxResponse, reader: jspb.BinaryReader): BroadcastTxResponse;
}

export namespace BroadcastTxResponse {
    export type AsObject = {
        txResponse?: abci_pb.TxResponse.AsObject;
    };
}

export class SimulateRequest extends jspb.Message {
    hasTx(): boolean;
    clearTx(): void;
    getTx(): tx_tx_pb.Tx | undefined;
    setTx(value?: tx_tx_pb.Tx): SimulateRequest;
    getTxBytes(): Uint8Array | string;
    getTxBytes_asU8(): Uint8Array;
    getTxBytes_asB64(): string;
    setTxBytes(value: Uint8Array | string): SimulateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SimulateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SimulateRequest): SimulateRequest.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: SimulateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SimulateRequest;
    static deserializeBinaryFromReader(message: SimulateRequest, reader: jspb.BinaryReader): SimulateRequest;
}

export namespace SimulateRequest {
    export type AsObject = {
        tx?: tx_tx_pb.Tx.AsObject;
        txBytes: Uint8Array | string;
    };
}

export class SimulateResponse extends jspb.Message {
    hasGasInfo(): boolean;
    clearGasInfo(): void;
    getGasInfo(): abci_pb.GasInfo | undefined;
    setGasInfo(value?: abci_pb.GasInfo): SimulateResponse;

    hasResult(): boolean;
    clearResult(): void;
    getResult(): abci_pb.Result | undefined;
    setResult(value?: abci_pb.Result): SimulateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SimulateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SimulateResponse): SimulateResponse.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: SimulateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SimulateResponse;
    static deserializeBinaryFromReader(message: SimulateResponse, reader: jspb.BinaryReader): SimulateResponse;
}

export namespace SimulateResponse {
    export type AsObject = {
        gasInfo?: abci_pb.GasInfo.AsObject;
        result?: abci_pb.Result.AsObject;
    };
}

export class GetTxRequest extends jspb.Message {
    getHash(): string;
    setHash(value: string): GetTxRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTxRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTxRequest): GetTxRequest.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: GetTxRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTxRequest;
    static deserializeBinaryFromReader(message: GetTxRequest, reader: jspb.BinaryReader): GetTxRequest;
}

export namespace GetTxRequest {
    export type AsObject = {
        hash: string;
    };
}

export class GetTxResponse extends jspb.Message {
    hasTx(): boolean;
    clearTx(): void;
    getTx(): tx_tx_pb.Tx | undefined;
    setTx(value?: tx_tx_pb.Tx): GetTxResponse;

    hasTxResponse(): boolean;
    clearTxResponse(): void;
    getTxResponse(): abci_pb.TxResponse | undefined;
    setTxResponse(value?: abci_pb.TxResponse): GetTxResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTxResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTxResponse): GetTxResponse.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: GetTxResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTxResponse;
    static deserializeBinaryFromReader(message: GetTxResponse, reader: jspb.BinaryReader): GetTxResponse;
}

export namespace GetTxResponse {
    export type AsObject = {
        tx?: tx_tx_pb.Tx.AsObject;
        txResponse?: abci_pb.TxResponse.AsObject;
    };
}

export enum OrderBy {
    ORDER_BY_UNSPECIFIED = 0,
    ORDER_BY_ASC = 1,
    ORDER_BY_DESC = 2,
}

export enum BroadcastMode {
    BROADCAST_MODE_UNSPECIFIED = 0,
    BROADCAST_MODE_BLOCK = 1,
    BROADCAST_MODE_SYNC = 2,
    BROADCAST_MODE_ASYNC = 3,
}
