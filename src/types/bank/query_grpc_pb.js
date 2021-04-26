// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var bank_query_pb = require('../bank/query_pb.js');
var pagination_pb = require('../pagination_pb.js');
var coin_pb = require('../coin_pb.js');
var bank_bank_pb = require('../bank/bank_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_cosmos_bank_v1beta1_QueryAllBalancesRequest(arg) {
  if (!(arg instanceof bank_query_pb.QueryAllBalancesRequest)) {
    throw new Error('Expected argument of type cosmos.bank.v1beta1.QueryAllBalancesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_bank_v1beta1_QueryAllBalancesRequest(buffer_arg) {
  return bank_query_pb.QueryAllBalancesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_bank_v1beta1_QueryAllBalancesResponse(arg) {
  if (!(arg instanceof bank_query_pb.QueryAllBalancesResponse)) {
    throw new Error('Expected argument of type cosmos.bank.v1beta1.QueryAllBalancesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_bank_v1beta1_QueryAllBalancesResponse(buffer_arg) {
  return bank_query_pb.QueryAllBalancesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_bank_v1beta1_QueryBalanceRequest(arg) {
  if (!(arg instanceof bank_query_pb.QueryBalanceRequest)) {
    throw new Error('Expected argument of type cosmos.bank.v1beta1.QueryBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_bank_v1beta1_QueryBalanceRequest(buffer_arg) {
  return bank_query_pb.QueryBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_bank_v1beta1_QueryBalanceResponse(arg) {
  if (!(arg instanceof bank_query_pb.QueryBalanceResponse)) {
    throw new Error('Expected argument of type cosmos.bank.v1beta1.QueryBalanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_bank_v1beta1_QueryBalanceResponse(buffer_arg) {
  return bank_query_pb.QueryBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_bank_v1beta1_QueryDenomMetadataRequest(arg) {
  if (!(arg instanceof bank_query_pb.QueryDenomMetadataRequest)) {
    throw new Error('Expected argument of type cosmos.bank.v1beta1.QueryDenomMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_bank_v1beta1_QueryDenomMetadataRequest(buffer_arg) {
  return bank_query_pb.QueryDenomMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_bank_v1beta1_QueryDenomMetadataResponse(arg) {
  if (!(arg instanceof bank_query_pb.QueryDenomMetadataResponse)) {
    throw new Error('Expected argument of type cosmos.bank.v1beta1.QueryDenomMetadataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_bank_v1beta1_QueryDenomMetadataResponse(buffer_arg) {
  return bank_query_pb.QueryDenomMetadataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_bank_v1beta1_QueryDenomsMetadataRequest(arg) {
  if (!(arg instanceof bank_query_pb.QueryDenomsMetadataRequest)) {
    throw new Error('Expected argument of type cosmos.bank.v1beta1.QueryDenomsMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_bank_v1beta1_QueryDenomsMetadataRequest(buffer_arg) {
  return bank_query_pb.QueryDenomsMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_bank_v1beta1_QueryDenomsMetadataResponse(arg) {
  if (!(arg instanceof bank_query_pb.QueryDenomsMetadataResponse)) {
    throw new Error('Expected argument of type cosmos.bank.v1beta1.QueryDenomsMetadataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_bank_v1beta1_QueryDenomsMetadataResponse(buffer_arg) {
  return bank_query_pb.QueryDenomsMetadataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_bank_v1beta1_QueryParamsRequest(arg) {
  if (!(arg instanceof bank_query_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type cosmos.bank.v1beta1.QueryParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_bank_v1beta1_QueryParamsRequest(buffer_arg) {
  return bank_query_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_bank_v1beta1_QueryParamsResponse(arg) {
  if (!(arg instanceof bank_query_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type cosmos.bank.v1beta1.QueryParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_bank_v1beta1_QueryParamsResponse(buffer_arg) {
  return bank_query_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_bank_v1beta1_QuerySupplyOfRequest(arg) {
  if (!(arg instanceof bank_query_pb.QuerySupplyOfRequest)) {
    throw new Error('Expected argument of type cosmos.bank.v1beta1.QuerySupplyOfRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_bank_v1beta1_QuerySupplyOfRequest(buffer_arg) {
  return bank_query_pb.QuerySupplyOfRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_bank_v1beta1_QuerySupplyOfResponse(arg) {
  if (!(arg instanceof bank_query_pb.QuerySupplyOfResponse)) {
    throw new Error('Expected argument of type cosmos.bank.v1beta1.QuerySupplyOfResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_bank_v1beta1_QuerySupplyOfResponse(buffer_arg) {
  return bank_query_pb.QuerySupplyOfResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_bank_v1beta1_QueryTotalSupplyRequest(arg) {
  if (!(arg instanceof bank_query_pb.QueryTotalSupplyRequest)) {
    throw new Error('Expected argument of type cosmos.bank.v1beta1.QueryTotalSupplyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_bank_v1beta1_QueryTotalSupplyRequest(buffer_arg) {
  return bank_query_pb.QueryTotalSupplyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_bank_v1beta1_QueryTotalSupplyResponse(arg) {
  if (!(arg instanceof bank_query_pb.QueryTotalSupplyResponse)) {
    throw new Error('Expected argument of type cosmos.bank.v1beta1.QueryTotalSupplyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_bank_v1beta1_QueryTotalSupplyResponse(buffer_arg) {
  return bank_query_pb.QueryTotalSupplyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var QueryService = exports.QueryService = {
  balance: {
    path: '/cosmos.bank.v1beta1.Query/Balance',
    requestStream: false,
    responseStream: false,
    requestType: bank_query_pb.QueryBalanceRequest,
    responseType: bank_query_pb.QueryBalanceResponse,
    requestSerialize: serialize_cosmos_bank_v1beta1_QueryBalanceRequest,
    requestDeserialize: deserialize_cosmos_bank_v1beta1_QueryBalanceRequest,
    responseSerialize: serialize_cosmos_bank_v1beta1_QueryBalanceResponse,
    responseDeserialize: deserialize_cosmos_bank_v1beta1_QueryBalanceResponse,
  },
  allBalances: {
    path: '/cosmos.bank.v1beta1.Query/AllBalances',
    requestStream: false,
    responseStream: false,
    requestType: bank_query_pb.QueryAllBalancesRequest,
    responseType: bank_query_pb.QueryAllBalancesResponse,
    requestSerialize: serialize_cosmos_bank_v1beta1_QueryAllBalancesRequest,
    requestDeserialize: deserialize_cosmos_bank_v1beta1_QueryAllBalancesRequest,
    responseSerialize: serialize_cosmos_bank_v1beta1_QueryAllBalancesResponse,
    responseDeserialize: deserialize_cosmos_bank_v1beta1_QueryAllBalancesResponse,
  },
  totalSupply: {
    path: '/cosmos.bank.v1beta1.Query/TotalSupply',
    requestStream: false,
    responseStream: false,
    requestType: bank_query_pb.QueryTotalSupplyRequest,
    responseType: bank_query_pb.QueryTotalSupplyResponse,
    requestSerialize: serialize_cosmos_bank_v1beta1_QueryTotalSupplyRequest,
    requestDeserialize: deserialize_cosmos_bank_v1beta1_QueryTotalSupplyRequest,
    responseSerialize: serialize_cosmos_bank_v1beta1_QueryTotalSupplyResponse,
    responseDeserialize: deserialize_cosmos_bank_v1beta1_QueryTotalSupplyResponse,
  },
  supplyOf: {
    path: '/cosmos.bank.v1beta1.Query/SupplyOf',
    requestStream: false,
    responseStream: false,
    requestType: bank_query_pb.QuerySupplyOfRequest,
    responseType: bank_query_pb.QuerySupplyOfResponse,
    requestSerialize: serialize_cosmos_bank_v1beta1_QuerySupplyOfRequest,
    requestDeserialize: deserialize_cosmos_bank_v1beta1_QuerySupplyOfRequest,
    responseSerialize: serialize_cosmos_bank_v1beta1_QuerySupplyOfResponse,
    responseDeserialize: deserialize_cosmos_bank_v1beta1_QuerySupplyOfResponse,
  },
  params: {
    path: '/cosmos.bank.v1beta1.Query/Params',
    requestStream: false,
    responseStream: false,
    requestType: bank_query_pb.QueryParamsRequest,
    responseType: bank_query_pb.QueryParamsResponse,
    requestSerialize: serialize_cosmos_bank_v1beta1_QueryParamsRequest,
    requestDeserialize: deserialize_cosmos_bank_v1beta1_QueryParamsRequest,
    responseSerialize: serialize_cosmos_bank_v1beta1_QueryParamsResponse,
    responseDeserialize: deserialize_cosmos_bank_v1beta1_QueryParamsResponse,
  },
  denomMetadata: {
    path: '/cosmos.bank.v1beta1.Query/DenomMetadata',
    requestStream: false,
    responseStream: false,
    requestType: bank_query_pb.QueryDenomMetadataRequest,
    responseType: bank_query_pb.QueryDenomMetadataResponse,
    requestSerialize: serialize_cosmos_bank_v1beta1_QueryDenomMetadataRequest,
    requestDeserialize: deserialize_cosmos_bank_v1beta1_QueryDenomMetadataRequest,
    responseSerialize: serialize_cosmos_bank_v1beta1_QueryDenomMetadataResponse,
    responseDeserialize: deserialize_cosmos_bank_v1beta1_QueryDenomMetadataResponse,
  },
  denomsMetadata: {
    path: '/cosmos.bank.v1beta1.Query/DenomsMetadata',
    requestStream: false,
    responseStream: false,
    requestType: bank_query_pb.QueryDenomsMetadataRequest,
    responseType: bank_query_pb.QueryDenomsMetadataResponse,
    requestSerialize: serialize_cosmos_bank_v1beta1_QueryDenomsMetadataRequest,
    requestDeserialize: deserialize_cosmos_bank_v1beta1_QueryDenomsMetadataRequest,
    responseSerialize: serialize_cosmos_bank_v1beta1_QueryDenomsMetadataResponse,
    responseDeserialize: deserialize_cosmos_bank_v1beta1_QueryDenomsMetadataResponse,
  },
};

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService);
