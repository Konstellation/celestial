// package: cosmos.tx.v1beta1
// file: tx/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as tx_service_pb from "../tx/service_pb";
import * as abci_pb from "../abci_pb";
import * as tx_tx_pb from "../tx/tx_pb";
import * as pagination_pb from "../pagination_pb";

interface IServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    simulate: IServiceService_ISimulate;
    getTx: IServiceService_IGetTx;
    broadcastTx: IServiceService_IBroadcastTx;
    getTxsEvent: IServiceService_IGetTxsEvent;
}

interface IServiceService_ISimulate extends grpc.MethodDefinition<tx_service_pb.SimulateRequest, tx_service_pb.SimulateResponse> {
    path: "/cosmos.tx.v1beta1.Service/Simulate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tx_service_pb.SimulateRequest>;
    requestDeserialize: grpc.deserialize<tx_service_pb.SimulateRequest>;
    responseSerialize: grpc.serialize<tx_service_pb.SimulateResponse>;
    responseDeserialize: grpc.deserialize<tx_service_pb.SimulateResponse>;
}
interface IServiceService_IGetTx extends grpc.MethodDefinition<tx_service_pb.GetTxRequest, tx_service_pb.GetTxResponse> {
    path: "/cosmos.tx.v1beta1.Service/GetTx";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tx_service_pb.GetTxRequest>;
    requestDeserialize: grpc.deserialize<tx_service_pb.GetTxRequest>;
    responseSerialize: grpc.serialize<tx_service_pb.GetTxResponse>;
    responseDeserialize: grpc.deserialize<tx_service_pb.GetTxResponse>;
}
interface IServiceService_IBroadcastTx extends grpc.MethodDefinition<tx_service_pb.BroadcastTxRequest, tx_service_pb.BroadcastTxResponse> {
    path: "/cosmos.tx.v1beta1.Service/BroadcastTx";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tx_service_pb.BroadcastTxRequest>;
    requestDeserialize: grpc.deserialize<tx_service_pb.BroadcastTxRequest>;
    responseSerialize: grpc.serialize<tx_service_pb.BroadcastTxResponse>;
    responseDeserialize: grpc.deserialize<tx_service_pb.BroadcastTxResponse>;
}
interface IServiceService_IGetTxsEvent extends grpc.MethodDefinition<tx_service_pb.GetTxsEventRequest, tx_service_pb.GetTxsEventResponse> {
    path: "/cosmos.tx.v1beta1.Service/GetTxsEvent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tx_service_pb.GetTxsEventRequest>;
    requestDeserialize: grpc.deserialize<tx_service_pb.GetTxsEventRequest>;
    responseSerialize: grpc.serialize<tx_service_pb.GetTxsEventResponse>;
    responseDeserialize: grpc.deserialize<tx_service_pb.GetTxsEventResponse>;
}

export const ServiceService: IServiceService;

export interface IServiceServer {
    simulate: grpc.handleUnaryCall<tx_service_pb.SimulateRequest, tx_service_pb.SimulateResponse>;
    getTx: grpc.handleUnaryCall<tx_service_pb.GetTxRequest, tx_service_pb.GetTxResponse>;
    broadcastTx: grpc.handleUnaryCall<tx_service_pb.BroadcastTxRequest, tx_service_pb.BroadcastTxResponse>;
    getTxsEvent: grpc.handleUnaryCall<tx_service_pb.GetTxsEventRequest, tx_service_pb.GetTxsEventResponse>;
}

export interface IServiceClient {
    simulate(request: tx_service_pb.SimulateRequest, callback: (error: grpc.ServiceError | null, response: tx_service_pb.SimulateResponse) => void): grpc.ClientUnaryCall;
    simulate(request: tx_service_pb.SimulateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tx_service_pb.SimulateResponse) => void): grpc.ClientUnaryCall;
    simulate(request: tx_service_pb.SimulateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tx_service_pb.SimulateResponse) => void): grpc.ClientUnaryCall;
    getTx(request: tx_service_pb.GetTxRequest, callback: (error: grpc.ServiceError | null, response: tx_service_pb.GetTxResponse) => void): grpc.ClientUnaryCall;
    getTx(request: tx_service_pb.GetTxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tx_service_pb.GetTxResponse) => void): grpc.ClientUnaryCall;
    getTx(request: tx_service_pb.GetTxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tx_service_pb.GetTxResponse) => void): grpc.ClientUnaryCall;
    broadcastTx(request: tx_service_pb.BroadcastTxRequest, callback: (error: grpc.ServiceError | null, response: tx_service_pb.BroadcastTxResponse) => void): grpc.ClientUnaryCall;
    broadcastTx(request: tx_service_pb.BroadcastTxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tx_service_pb.BroadcastTxResponse) => void): grpc.ClientUnaryCall;
    broadcastTx(request: tx_service_pb.BroadcastTxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tx_service_pb.BroadcastTxResponse) => void): grpc.ClientUnaryCall;
    getTxsEvent(request: tx_service_pb.GetTxsEventRequest, callback: (error: grpc.ServiceError | null, response: tx_service_pb.GetTxsEventResponse) => void): grpc.ClientUnaryCall;
    getTxsEvent(request: tx_service_pb.GetTxsEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tx_service_pb.GetTxsEventResponse) => void): grpc.ClientUnaryCall;
    getTxsEvent(request: tx_service_pb.GetTxsEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tx_service_pb.GetTxsEventResponse) => void): grpc.ClientUnaryCall;
}

export class ServiceClient extends grpc.Client implements IServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public simulate(request: tx_service_pb.SimulateRequest, callback: (error: grpc.ServiceError | null, response: tx_service_pb.SimulateResponse) => void): grpc.ClientUnaryCall;
    public simulate(request: tx_service_pb.SimulateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tx_service_pb.SimulateResponse) => void): grpc.ClientUnaryCall;
    public simulate(request: tx_service_pb.SimulateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tx_service_pb.SimulateResponse) => void): grpc.ClientUnaryCall;
    public getTx(request: tx_service_pb.GetTxRequest, callback: (error: grpc.ServiceError | null, response: tx_service_pb.GetTxResponse) => void): grpc.ClientUnaryCall;
    public getTx(request: tx_service_pb.GetTxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tx_service_pb.GetTxResponse) => void): grpc.ClientUnaryCall;
    public getTx(request: tx_service_pb.GetTxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tx_service_pb.GetTxResponse) => void): grpc.ClientUnaryCall;
    public broadcastTx(request: tx_service_pb.BroadcastTxRequest, callback: (error: grpc.ServiceError | null, response: tx_service_pb.BroadcastTxResponse) => void): grpc.ClientUnaryCall;
    public broadcastTx(request: tx_service_pb.BroadcastTxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tx_service_pb.BroadcastTxResponse) => void): grpc.ClientUnaryCall;
    public broadcastTx(request: tx_service_pb.BroadcastTxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tx_service_pb.BroadcastTxResponse) => void): grpc.ClientUnaryCall;
    public getTxsEvent(request: tx_service_pb.GetTxsEventRequest, callback: (error: grpc.ServiceError | null, response: tx_service_pb.GetTxsEventResponse) => void): grpc.ClientUnaryCall;
    public getTxsEvent(request: tx_service_pb.GetTxsEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tx_service_pb.GetTxsEventResponse) => void): grpc.ClientUnaryCall;
    public getTxsEvent(request: tx_service_pb.GetTxsEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tx_service_pb.GetTxsEventResponse) => void): grpc.ClientUnaryCall;
}
