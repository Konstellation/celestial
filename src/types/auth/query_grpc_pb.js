// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var auth_query_pb = require('../auth/query_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var auth_auth_pb = require('../auth/auth_pb.js');
var pagination_pb = require('../pagination_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var cosmos_proto_cosmos_pb = require('../cosmos_proto/cosmos_pb.js');

function serialize_cosmos_auth_v1beta1_QueryAccountRequest(arg) {
  if (!(arg instanceof auth_query_pb.QueryAccountRequest)) {
    throw new Error('Expected argument of type cosmos.auth.v1beta1.QueryAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_auth_v1beta1_QueryAccountRequest(buffer_arg) {
  return auth_query_pb.QueryAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_auth_v1beta1_QueryAccountResponse(arg) {
  if (!(arg instanceof auth_query_pb.QueryAccountResponse)) {
    throw new Error('Expected argument of type cosmos.auth.v1beta1.QueryAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_auth_v1beta1_QueryAccountResponse(buffer_arg) {
  return auth_query_pb.QueryAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_auth_v1beta1_QueryAccountsRequest(arg) {
  if (!(arg instanceof auth_query_pb.QueryAccountsRequest)) {
    throw new Error('Expected argument of type cosmos.auth.v1beta1.QueryAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_auth_v1beta1_QueryAccountsRequest(buffer_arg) {
  return auth_query_pb.QueryAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_auth_v1beta1_QueryAccountsResponse(arg) {
  if (!(arg instanceof auth_query_pb.QueryAccountsResponse)) {
    throw new Error('Expected argument of type cosmos.auth.v1beta1.QueryAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_auth_v1beta1_QueryAccountsResponse(buffer_arg) {
  return auth_query_pb.QueryAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_auth_v1beta1_QueryParamsRequest(arg) {
  if (!(arg instanceof auth_query_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type cosmos.auth.v1beta1.QueryParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_auth_v1beta1_QueryParamsRequest(buffer_arg) {
  return auth_query_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_auth_v1beta1_QueryParamsResponse(arg) {
  if (!(arg instanceof auth_query_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type cosmos.auth.v1beta1.QueryParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_auth_v1beta1_QueryParamsResponse(buffer_arg) {
  return auth_query_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var QueryService = exports.QueryService = {
  accounts: {
    path: '/cosmos.auth.v1beta1.Query/Accounts',
    requestStream: false,
    responseStream: false,
    requestType: auth_query_pb.QueryAccountsRequest,
    responseType: auth_query_pb.QueryAccountsResponse,
    requestSerialize: serialize_cosmos_auth_v1beta1_QueryAccountsRequest,
    requestDeserialize: deserialize_cosmos_auth_v1beta1_QueryAccountsRequest,
    responseSerialize: serialize_cosmos_auth_v1beta1_QueryAccountsResponse,
    responseDeserialize: deserialize_cosmos_auth_v1beta1_QueryAccountsResponse,
  },
  account: {
    path: '/cosmos.auth.v1beta1.Query/Account',
    requestStream: false,
    responseStream: false,
    requestType: auth_query_pb.QueryAccountRequest,
    responseType: auth_query_pb.QueryAccountResponse,
    requestSerialize: serialize_cosmos_auth_v1beta1_QueryAccountRequest,
    requestDeserialize: deserialize_cosmos_auth_v1beta1_QueryAccountRequest,
    responseSerialize: serialize_cosmos_auth_v1beta1_QueryAccountResponse,
    responseDeserialize: deserialize_cosmos_auth_v1beta1_QueryAccountResponse,
  },
  params: {
    path: '/cosmos.auth.v1beta1.Query/Params',
    requestStream: false,
    responseStream: false,
    requestType: auth_query_pb.QueryParamsRequest,
    responseType: auth_query_pb.QueryParamsResponse,
    requestSerialize: serialize_cosmos_auth_v1beta1_QueryParamsRequest,
    requestDeserialize: deserialize_cosmos_auth_v1beta1_QueryParamsRequest,
    responseSerialize: serialize_cosmos_auth_v1beta1_QueryParamsResponse,
    responseDeserialize: deserialize_cosmos_auth_v1beta1_QueryParamsResponse,
  },
};

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService);
