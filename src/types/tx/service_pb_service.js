// package: cosmos.tx.v1beta1
// file: tx/service.proto

var tx_service_pb = require("../tx/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Service = (function () {
  function Service() {}
  Service.serviceName = "cosmos.tx.v1beta1.Service";
  return Service;
}());

Service.Simulate = {
  methodName: "Simulate",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: tx_service_pb.SimulateRequest,
  responseType: tx_service_pb.SimulateResponse
};

Service.GetTx = {
  methodName: "GetTx",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: tx_service_pb.GetTxRequest,
  responseType: tx_service_pb.GetTxResponse
};

Service.BroadcastTx = {
  methodName: "BroadcastTx",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: tx_service_pb.BroadcastTxRequest,
  responseType: tx_service_pb.BroadcastTxResponse
};

Service.GetTxsEvent = {
  methodName: "GetTxsEvent",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: tx_service_pb.GetTxsEventRequest,
  responseType: tx_service_pb.GetTxsEventResponse
};

exports.Service = Service;

function ServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ServiceClient.prototype.simulate = function simulate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Service.Simulate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ServiceClient.prototype.getTx = function getTx(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Service.GetTx, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ServiceClient.prototype.broadcastTx = function broadcastTx(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Service.BroadcastTx, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ServiceClient.prototype.getTxsEvent = function getTxsEvent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Service.GetTxsEvent, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ServiceClient = ServiceClient;

