// package: cosmos.auth.v1beta1
// file: auth/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as auth_query_pb from "../auth/query_pb";
import * as auth_auth_pb from "../auth/auth_pb";
import * as pagination_pb from "../pagination_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    accounts: IQueryService_IAccounts;
    account: IQueryService_IAccount;
    params: IQueryService_IParams;
}

interface IQueryService_IAccounts extends grpc.MethodDefinition<auth_query_pb.QueryAccountsRequest, auth_query_pb.QueryAccountsResponse> {
    path: "/cosmos.auth.v1beta1.Query/Accounts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_query_pb.QueryAccountsRequest>;
    requestDeserialize: grpc.deserialize<auth_query_pb.QueryAccountsRequest>;
    responseSerialize: grpc.serialize<auth_query_pb.QueryAccountsResponse>;
    responseDeserialize: grpc.deserialize<auth_query_pb.QueryAccountsResponse>;
}
interface IQueryService_IAccount extends grpc.MethodDefinition<auth_query_pb.QueryAccountRequest, auth_query_pb.QueryAccountResponse> {
    path: "/cosmos.auth.v1beta1.Query/Account";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_query_pb.QueryAccountRequest>;
    requestDeserialize: grpc.deserialize<auth_query_pb.QueryAccountRequest>;
    responseSerialize: grpc.serialize<auth_query_pb.QueryAccountResponse>;
    responseDeserialize: grpc.deserialize<auth_query_pb.QueryAccountResponse>;
}
interface IQueryService_IParams extends grpc.MethodDefinition<auth_query_pb.QueryParamsRequest, auth_query_pb.QueryParamsResponse> {
    path: "/cosmos.auth.v1beta1.Query/Params";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_query_pb.QueryParamsRequest>;
    requestDeserialize: grpc.deserialize<auth_query_pb.QueryParamsRequest>;
    responseSerialize: grpc.serialize<auth_query_pb.QueryParamsResponse>;
    responseDeserialize: grpc.deserialize<auth_query_pb.QueryParamsResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer {
    accounts: grpc.handleUnaryCall<auth_query_pb.QueryAccountsRequest, auth_query_pb.QueryAccountsResponse>;
    account: grpc.handleUnaryCall<auth_query_pb.QueryAccountRequest, auth_query_pb.QueryAccountResponse>;
    params: grpc.handleUnaryCall<auth_query_pb.QueryParamsRequest, auth_query_pb.QueryParamsResponse>;
}

export interface IQueryClient {
    accounts(request: auth_query_pb.QueryAccountsRequest, callback: (error: grpc.ServiceError | null, response: auth_query_pb.QueryAccountsResponse) => void): grpc.ClientUnaryCall;
    accounts(request: auth_query_pb.QueryAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_query_pb.QueryAccountsResponse) => void): grpc.ClientUnaryCall;
    accounts(request: auth_query_pb.QueryAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_query_pb.QueryAccountsResponse) => void): grpc.ClientUnaryCall;
    account(request: auth_query_pb.QueryAccountRequest, callback: (error: grpc.ServiceError | null, response: auth_query_pb.QueryAccountResponse) => void): grpc.ClientUnaryCall;
    account(request: auth_query_pb.QueryAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_query_pb.QueryAccountResponse) => void): grpc.ClientUnaryCall;
    account(request: auth_query_pb.QueryAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_query_pb.QueryAccountResponse) => void): grpc.ClientUnaryCall;
    params(request: auth_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: auth_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: auth_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: auth_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public accounts(request: auth_query_pb.QueryAccountsRequest, callback: (error: grpc.ServiceError | null, response: auth_query_pb.QueryAccountsResponse) => void): grpc.ClientUnaryCall;
    public accounts(request: auth_query_pb.QueryAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_query_pb.QueryAccountsResponse) => void): grpc.ClientUnaryCall;
    public accounts(request: auth_query_pb.QueryAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_query_pb.QueryAccountsResponse) => void): grpc.ClientUnaryCall;
    public account(request: auth_query_pb.QueryAccountRequest, callback: (error: grpc.ServiceError | null, response: auth_query_pb.QueryAccountResponse) => void): grpc.ClientUnaryCall;
    public account(request: auth_query_pb.QueryAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_query_pb.QueryAccountResponse) => void): grpc.ClientUnaryCall;
    public account(request: auth_query_pb.QueryAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_query_pb.QueryAccountResponse) => void): grpc.ClientUnaryCall;
    public params(request: auth_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: auth_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: auth_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: auth_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
}
