// package: cosmos.bank.v1beta1
// file: bank/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as bank_query_pb from "../bank/query_pb";
import * as pagination_pb from "../pagination_pb";
import * as coin_pb from "../coin_pb";
import * as bank_bank_pb from "../bank/bank_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    balance: IQueryService_IBalance;
    allBalances: IQueryService_IAllBalances;
    totalSupply: IQueryService_ITotalSupply;
    supplyOf: IQueryService_ISupplyOf;
    params: IQueryService_IParams;
    denomMetadata: IQueryService_IDenomMetadata;
    denomsMetadata: IQueryService_IDenomsMetadata;
}

interface IQueryService_IBalance extends grpc.MethodDefinition<bank_query_pb.QueryBalanceRequest, bank_query_pb.QueryBalanceResponse> {
    path: "/cosmos.bank.v1beta1.Query/Balance";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bank_query_pb.QueryBalanceRequest>;
    requestDeserialize: grpc.deserialize<bank_query_pb.QueryBalanceRequest>;
    responseSerialize: grpc.serialize<bank_query_pb.QueryBalanceResponse>;
    responseDeserialize: grpc.deserialize<bank_query_pb.QueryBalanceResponse>;
}
interface IQueryService_IAllBalances extends grpc.MethodDefinition<bank_query_pb.QueryAllBalancesRequest, bank_query_pb.QueryAllBalancesResponse> {
    path: "/cosmos.bank.v1beta1.Query/AllBalances";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bank_query_pb.QueryAllBalancesRequest>;
    requestDeserialize: grpc.deserialize<bank_query_pb.QueryAllBalancesRequest>;
    responseSerialize: grpc.serialize<bank_query_pb.QueryAllBalancesResponse>;
    responseDeserialize: grpc.deserialize<bank_query_pb.QueryAllBalancesResponse>;
}
interface IQueryService_ITotalSupply extends grpc.MethodDefinition<bank_query_pb.QueryTotalSupplyRequest, bank_query_pb.QueryTotalSupplyResponse> {
    path: "/cosmos.bank.v1beta1.Query/TotalSupply";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bank_query_pb.QueryTotalSupplyRequest>;
    requestDeserialize: grpc.deserialize<bank_query_pb.QueryTotalSupplyRequest>;
    responseSerialize: grpc.serialize<bank_query_pb.QueryTotalSupplyResponse>;
    responseDeserialize: grpc.deserialize<bank_query_pb.QueryTotalSupplyResponse>;
}
interface IQueryService_ISupplyOf extends grpc.MethodDefinition<bank_query_pb.QuerySupplyOfRequest, bank_query_pb.QuerySupplyOfResponse> {
    path: "/cosmos.bank.v1beta1.Query/SupplyOf";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bank_query_pb.QuerySupplyOfRequest>;
    requestDeserialize: grpc.deserialize<bank_query_pb.QuerySupplyOfRequest>;
    responseSerialize: grpc.serialize<bank_query_pb.QuerySupplyOfResponse>;
    responseDeserialize: grpc.deserialize<bank_query_pb.QuerySupplyOfResponse>;
}
interface IQueryService_IParams extends grpc.MethodDefinition<bank_query_pb.QueryParamsRequest, bank_query_pb.QueryParamsResponse> {
    path: "/cosmos.bank.v1beta1.Query/Params";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bank_query_pb.QueryParamsRequest>;
    requestDeserialize: grpc.deserialize<bank_query_pb.QueryParamsRequest>;
    responseSerialize: grpc.serialize<bank_query_pb.QueryParamsResponse>;
    responseDeserialize: grpc.deserialize<bank_query_pb.QueryParamsResponse>;
}
interface IQueryService_IDenomMetadata extends grpc.MethodDefinition<bank_query_pb.QueryDenomMetadataRequest, bank_query_pb.QueryDenomMetadataResponse> {
    path: "/cosmos.bank.v1beta1.Query/DenomMetadata";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bank_query_pb.QueryDenomMetadataRequest>;
    requestDeserialize: grpc.deserialize<bank_query_pb.QueryDenomMetadataRequest>;
    responseSerialize: grpc.serialize<bank_query_pb.QueryDenomMetadataResponse>;
    responseDeserialize: grpc.deserialize<bank_query_pb.QueryDenomMetadataResponse>;
}
interface IQueryService_IDenomsMetadata extends grpc.MethodDefinition<bank_query_pb.QueryDenomsMetadataRequest, bank_query_pb.QueryDenomsMetadataResponse> {
    path: "/cosmos.bank.v1beta1.Query/DenomsMetadata";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bank_query_pb.QueryDenomsMetadataRequest>;
    requestDeserialize: grpc.deserialize<bank_query_pb.QueryDenomsMetadataRequest>;
    responseSerialize: grpc.serialize<bank_query_pb.QueryDenomsMetadataResponse>;
    responseDeserialize: grpc.deserialize<bank_query_pb.QueryDenomsMetadataResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer {
    balance: grpc.handleUnaryCall<bank_query_pb.QueryBalanceRequest, bank_query_pb.QueryBalanceResponse>;
    allBalances: grpc.handleUnaryCall<bank_query_pb.QueryAllBalancesRequest, bank_query_pb.QueryAllBalancesResponse>;
    totalSupply: grpc.handleUnaryCall<bank_query_pb.QueryTotalSupplyRequest, bank_query_pb.QueryTotalSupplyResponse>;
    supplyOf: grpc.handleUnaryCall<bank_query_pb.QuerySupplyOfRequest, bank_query_pb.QuerySupplyOfResponse>;
    params: grpc.handleUnaryCall<bank_query_pb.QueryParamsRequest, bank_query_pb.QueryParamsResponse>;
    denomMetadata: grpc.handleUnaryCall<bank_query_pb.QueryDenomMetadataRequest, bank_query_pb.QueryDenomMetadataResponse>;
    denomsMetadata: grpc.handleUnaryCall<bank_query_pb.QueryDenomsMetadataRequest, bank_query_pb.QueryDenomsMetadataResponse>;
}

export interface IQueryClient {
    balance(request: bank_query_pb.QueryBalanceRequest, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryBalanceResponse) => void): grpc.ClientUnaryCall;
    balance(request: bank_query_pb.QueryBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryBalanceResponse) => void): grpc.ClientUnaryCall;
    balance(request: bank_query_pb.QueryBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryBalanceResponse) => void): grpc.ClientUnaryCall;
    allBalances(request: bank_query_pb.QueryAllBalancesRequest, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryAllBalancesResponse) => void): grpc.ClientUnaryCall;
    allBalances(request: bank_query_pb.QueryAllBalancesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryAllBalancesResponse) => void): grpc.ClientUnaryCall;
    allBalances(request: bank_query_pb.QueryAllBalancesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryAllBalancesResponse) => void): grpc.ClientUnaryCall;
    totalSupply(request: bank_query_pb.QueryTotalSupplyRequest, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryTotalSupplyResponse) => void): grpc.ClientUnaryCall;
    totalSupply(request: bank_query_pb.QueryTotalSupplyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryTotalSupplyResponse) => void): grpc.ClientUnaryCall;
    totalSupply(request: bank_query_pb.QueryTotalSupplyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryTotalSupplyResponse) => void): grpc.ClientUnaryCall;
    supplyOf(request: bank_query_pb.QuerySupplyOfRequest, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QuerySupplyOfResponse) => void): grpc.ClientUnaryCall;
    supplyOf(request: bank_query_pb.QuerySupplyOfRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QuerySupplyOfResponse) => void): grpc.ClientUnaryCall;
    supplyOf(request: bank_query_pb.QuerySupplyOfRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QuerySupplyOfResponse) => void): grpc.ClientUnaryCall;
    params(request: bank_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: bank_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: bank_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    denomMetadata(request: bank_query_pb.QueryDenomMetadataRequest, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    denomMetadata(request: bank_query_pb.QueryDenomMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    denomMetadata(request: bank_query_pb.QueryDenomMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    denomsMetadata(request: bank_query_pb.QueryDenomsMetadataRequest, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryDenomsMetadataResponse) => void): grpc.ClientUnaryCall;
    denomsMetadata(request: bank_query_pb.QueryDenomsMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryDenomsMetadataResponse) => void): grpc.ClientUnaryCall;
    denomsMetadata(request: bank_query_pb.QueryDenomsMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryDenomsMetadataResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public balance(request: bank_query_pb.QueryBalanceRequest, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryBalanceResponse) => void): grpc.ClientUnaryCall;
    public balance(request: bank_query_pb.QueryBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryBalanceResponse) => void): grpc.ClientUnaryCall;
    public balance(request: bank_query_pb.QueryBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryBalanceResponse) => void): grpc.ClientUnaryCall;
    public allBalances(request: bank_query_pb.QueryAllBalancesRequest, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryAllBalancesResponse) => void): grpc.ClientUnaryCall;
    public allBalances(request: bank_query_pb.QueryAllBalancesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryAllBalancesResponse) => void): grpc.ClientUnaryCall;
    public allBalances(request: bank_query_pb.QueryAllBalancesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryAllBalancesResponse) => void): grpc.ClientUnaryCall;
    public totalSupply(request: bank_query_pb.QueryTotalSupplyRequest, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryTotalSupplyResponse) => void): grpc.ClientUnaryCall;
    public totalSupply(request: bank_query_pb.QueryTotalSupplyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryTotalSupplyResponse) => void): grpc.ClientUnaryCall;
    public totalSupply(request: bank_query_pb.QueryTotalSupplyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryTotalSupplyResponse) => void): grpc.ClientUnaryCall;
    public supplyOf(request: bank_query_pb.QuerySupplyOfRequest, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QuerySupplyOfResponse) => void): grpc.ClientUnaryCall;
    public supplyOf(request: bank_query_pb.QuerySupplyOfRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QuerySupplyOfResponse) => void): grpc.ClientUnaryCall;
    public supplyOf(request: bank_query_pb.QuerySupplyOfRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QuerySupplyOfResponse) => void): grpc.ClientUnaryCall;
    public params(request: bank_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: bank_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: bank_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public denomMetadata(request: bank_query_pb.QueryDenomMetadataRequest, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    public denomMetadata(request: bank_query_pb.QueryDenomMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    public denomMetadata(request: bank_query_pb.QueryDenomMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    public denomsMetadata(request: bank_query_pb.QueryDenomsMetadataRequest, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryDenomsMetadataResponse) => void): grpc.ClientUnaryCall;
    public denomsMetadata(request: bank_query_pb.QueryDenomsMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryDenomsMetadataResponse) => void): grpc.ClientUnaryCall;
    public denomsMetadata(request: bank_query_pb.QueryDenomsMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryDenomsMetadataResponse) => void): grpc.ClientUnaryCall;
}
