// package: cosmos.bank.v1beta1
// file: bank/query.proto

import * as bank_query_pb from '../bank/query_pb';
import { grpc } from '@improbable-eng/grpc-web';

type QueryBalance = {
    readonly methodName: string;
    readonly service: typeof Query;
    readonly requestStream: false;
    readonly responseStream: false;
    readonly requestType: typeof bank_query_pb.QueryBalanceRequest;
    readonly responseType: typeof bank_query_pb.QueryBalanceResponse;
};

type QueryAllBalances = {
    readonly methodName: string;
    readonly service: typeof Query;
    readonly requestStream: false;
    readonly responseStream: false;
    readonly requestType: typeof bank_query_pb.QueryAllBalancesRequest;
    readonly responseType: typeof bank_query_pb.QueryAllBalancesResponse;
};

type QueryTotalSupply = {
    readonly methodName: string;
    readonly service: typeof Query;
    readonly requestStream: false;
    readonly responseStream: false;
    readonly requestType: typeof bank_query_pb.QueryTotalSupplyRequest;
    readonly responseType: typeof bank_query_pb.QueryTotalSupplyResponse;
};

type QuerySupplyOf = {
    readonly methodName: string;
    readonly service: typeof Query;
    readonly requestStream: false;
    readonly responseStream: false;
    readonly requestType: typeof bank_query_pb.QuerySupplyOfRequest;
    readonly responseType: typeof bank_query_pb.QuerySupplyOfResponse;
};

type QueryParams = {
    readonly methodName: string;
    readonly service: typeof Query;
    readonly requestStream: false;
    readonly responseStream: false;
    readonly requestType: typeof bank_query_pb.QueryParamsRequest;
    readonly responseType: typeof bank_query_pb.QueryParamsResponse;
};

type QueryDenomMetadata = {
    readonly methodName: string;
    readonly service: typeof Query;
    readonly requestStream: false;
    readonly responseStream: false;
    readonly requestType: typeof bank_query_pb.QueryDenomMetadataRequest;
    readonly responseType: typeof bank_query_pb.QueryDenomMetadataResponse;
};

type QueryDenomsMetadata = {
    readonly methodName: string;
    readonly service: typeof Query;
    readonly requestStream: false;
    readonly responseStream: false;
    readonly requestType: typeof bank_query_pb.QueryDenomsMetadataRequest;
    readonly responseType: typeof bank_query_pb.QueryDenomsMetadataResponse;
};

export class Query {
    static readonly serviceName: string;
    static readonly Balance: QueryBalance;
    static readonly AllBalances: QueryAllBalances;
    static readonly TotalSupply: QueryTotalSupply;
    static readonly SupplyOf: QuerySupplyOf;
    static readonly Params: QueryParams;
    static readonly DenomMetadata: QueryDenomMetadata;
    static readonly DenomsMetadata: QueryDenomsMetadata;
}

export type ServiceError = { message: string; code: number; metadata: grpc.Metadata };
export type Status = { details: string; code: number; metadata: grpc.Metadata };

interface UnaryResponse {
    cancel(): void;
}
interface ResponseStream<T> {
    cancel(): void;
    on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
    on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
    on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
    write(message: T): RequestStream<T>;
    end(): void;
    cancel(): void;
    on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
    on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
    write(message: ReqT): BidirectionalStream<ReqT, ResT>;
    end(): void;
    cancel(): void;
    on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
    on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
    on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class QueryClient {
    readonly serviceHost: string;

    constructor(serviceHost: string, options?: grpc.RpcOptions);
    balance(
        requestMessage: bank_query_pb.QueryBalanceRequest,
        metadata: grpc.Metadata,
        callback: (error: ServiceError | null, responseMessage: bank_query_pb.QueryBalanceResponse | null) => void,
    ): UnaryResponse;
    balance(
        requestMessage: bank_query_pb.QueryBalanceRequest,
        callback: (error: ServiceError | null, responseMessage: bank_query_pb.QueryBalanceResponse | null) => void,
    ): UnaryResponse;
    allBalances(
        requestMessage: bank_query_pb.QueryAllBalancesRequest,
        metadata: grpc.Metadata,
        callback: (error: ServiceError | null, responseMessage: bank_query_pb.QueryAllBalancesResponse | null) => void,
    ): UnaryResponse;
    allBalances(
        requestMessage: bank_query_pb.QueryAllBalancesRequest,
        callback: (error: ServiceError | null, responseMessage: bank_query_pb.QueryAllBalancesResponse | null) => void,
    ): UnaryResponse;
    totalSupply(
        requestMessage: bank_query_pb.QueryTotalSupplyRequest,
        metadata: grpc.Metadata,
        callback: (error: ServiceError | null, responseMessage: bank_query_pb.QueryTotalSupplyResponse | null) => void,
    ): UnaryResponse;
    totalSupply(
        requestMessage: bank_query_pb.QueryTotalSupplyRequest,
        callback: (error: ServiceError | null, responseMessage: bank_query_pb.QueryTotalSupplyResponse | null) => void,
    ): UnaryResponse;
    supplyOf(
        requestMessage: bank_query_pb.QuerySupplyOfRequest,
        metadata: grpc.Metadata,
        callback: (error: ServiceError | null, responseMessage: bank_query_pb.QuerySupplyOfResponse | null) => void,
    ): UnaryResponse;
    supplyOf(
        requestMessage: bank_query_pb.QuerySupplyOfRequest,
        callback: (error: ServiceError | null, responseMessage: bank_query_pb.QuerySupplyOfResponse | null) => void,
    ): UnaryResponse;
    params(
        requestMessage: bank_query_pb.QueryParamsRequest,
        metadata: grpc.Metadata,
        callback: (error: ServiceError | null, responseMessage: bank_query_pb.QueryParamsResponse | null) => void,
    ): UnaryResponse;
    params(
        requestMessage: bank_query_pb.QueryParamsRequest,
        callback: (error: ServiceError | null, responseMessage: bank_query_pb.QueryParamsResponse | null) => void,
    ): UnaryResponse;
    denomMetadata(
        requestMessage: bank_query_pb.QueryDenomMetadataRequest,
        metadata: grpc.Metadata,
        callback: (
            error: ServiceError | null,
            responseMessage: bank_query_pb.QueryDenomMetadataResponse | null,
        ) => void,
    ): UnaryResponse;
    denomMetadata(
        requestMessage: bank_query_pb.QueryDenomMetadataRequest,
        callback: (
            error: ServiceError | null,
            responseMessage: bank_query_pb.QueryDenomMetadataResponse | null,
        ) => void,
    ): UnaryResponse;
    denomsMetadata(
        requestMessage: bank_query_pb.QueryDenomsMetadataRequest,
        metadata: grpc.Metadata,
        callback: (
            error: ServiceError | null,
            responseMessage: bank_query_pb.QueryDenomsMetadataResponse | null,
        ) => void,
    ): UnaryResponse;
    denomsMetadata(
        requestMessage: bank_query_pb.QueryDenomsMetadataRequest,
        callback: (
            error: ServiceError | null,
            responseMessage: bank_query_pb.QueryDenomsMetadataResponse | null,
        ) => void,
    ): UnaryResponse;
}
