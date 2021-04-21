// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var bank_query_pb = require('../bank/query_pb.js');
var pagination_pb = require('../pagination_pb.js');
var coin_pb = require('../coin_pb.js');
var bank_bank_pb = require('../bank/bank_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

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
};

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService);
