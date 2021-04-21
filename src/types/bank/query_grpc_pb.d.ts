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

export const QueryService: IQueryService;

export interface IQueryServer {
    balance: grpc.handleUnaryCall<bank_query_pb.QueryBalanceRequest, bank_query_pb.QueryBalanceResponse>;
}

export interface IQueryClient {
    balance(request: bank_query_pb.QueryBalanceRequest, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryBalanceResponse) => void): grpc.ClientUnaryCall;
    balance(request: bank_query_pb.QueryBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryBalanceResponse) => void): grpc.ClientUnaryCall;
    balance(request: bank_query_pb.QueryBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryBalanceResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public balance(request: bank_query_pb.QueryBalanceRequest, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryBalanceResponse) => void): grpc.ClientUnaryCall;
    public balance(request: bank_query_pb.QueryBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryBalanceResponse) => void): grpc.ClientUnaryCall;
    public balance(request: bank_query_pb.QueryBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bank_query_pb.QueryBalanceResponse) => void): grpc.ClientUnaryCall;
}
