// package: cosmos.bank.v1beta1
// file: bank/query.proto

import * as jspb from "google-protobuf";
import * as pagination_pb from "../pagination_pb";
import * as coin_pb from "../coin_pb";
import * as bank_bank_pb from "../bank/bank_pb";
import * as google_api_annotations_pb from "../google/api/annotations_pb";

export class QueryBalanceRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getDenom(): string;
  setDenom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryBalanceRequest): QueryBalanceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryBalanceRequest;
  static deserializeBinaryFromReader(message: QueryBalanceRequest, reader: jspb.BinaryReader): QueryBalanceRequest;
}

export namespace QueryBalanceRequest {
  export type AsObject = {
    address: string,
    denom: string,
  }
}

export class QueryBalanceResponse extends jspb.Message {
  hasBalance(): boolean;
  clearBalance(): void;
  getBalance(): coin_pb.Coin | undefined;
  setBalance(value?: coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryBalanceResponse): QueryBalanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryBalanceResponse;
  static deserializeBinaryFromReader(message: QueryBalanceResponse, reader: jspb.BinaryReader): QueryBalanceResponse;
}

export namespace QueryBalanceResponse {
  export type AsObject = {
    balance?: coin_pb.Coin.AsObject,
  }
}

