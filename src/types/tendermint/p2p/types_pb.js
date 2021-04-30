// source: tendermint/p2p/types.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.tendermint.p2p.DefaultNodeInfo', null, global);
goog.exportSymbol('proto.tendermint.p2p.DefaultNodeInfoOther', null, global);
goog.exportSymbol('proto.tendermint.p2p.NetAddress', null, global);
goog.exportSymbol('proto.tendermint.p2p.ProtocolVersion', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tendermint.p2p.NetAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.p2p.NetAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.p2p.NetAddress.displayName = 'proto.tendermint.p2p.NetAddress';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tendermint.p2p.ProtocolVersion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.p2p.ProtocolVersion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.p2p.ProtocolVersion.displayName = 'proto.tendermint.p2p.ProtocolVersion';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tendermint.p2p.DefaultNodeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.p2p.DefaultNodeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.p2p.DefaultNodeInfo.displayName = 'proto.tendermint.p2p.DefaultNodeInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tendermint.p2p.DefaultNodeInfoOther = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.p2p.DefaultNodeInfoOther, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.p2p.DefaultNodeInfoOther.displayName = 'proto.tendermint.p2p.DefaultNodeInfoOther';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tendermint.p2p.NetAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.p2p.NetAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.p2p.NetAddress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.p2p.NetAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ip: jspb.Message.getFieldWithDefault(msg, 2, ""),
    port: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tendermint.p2p.NetAddress}
 */
proto.tendermint.p2p.NetAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.p2p.NetAddress;
  return proto.tendermint.p2p.NetAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.p2p.NetAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.p2p.NetAddress}
 */
proto.tendermint.p2p.NetAddress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tendermint.p2p.NetAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.p2p.NetAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.p2p.NetAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.p2p.NetAddress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.tendermint.p2p.NetAddress.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.p2p.NetAddress} returns this
 */
proto.tendermint.p2p.NetAddress.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ip = 2;
 * @return {string}
 */
proto.tendermint.p2p.NetAddress.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.p2p.NetAddress} returns this
 */
proto.tendermint.p2p.NetAddress.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 port = 3;
 * @return {number}
 */
proto.tendermint.p2p.NetAddress.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.p2p.NetAddress} returns this
 */
proto.tendermint.p2p.NetAddress.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tendermint.p2p.ProtocolVersion.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.p2p.ProtocolVersion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.p2p.ProtocolVersion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.p2p.ProtocolVersion.toObject = function(includeInstance, msg) {
  var f, obj = {
    p2p: jspb.Message.getFieldWithDefault(msg, 1, 0),
    block: jspb.Message.getFieldWithDefault(msg, 2, 0),
    app: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tendermint.p2p.ProtocolVersion}
 */
proto.tendermint.p2p.ProtocolVersion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.p2p.ProtocolVersion;
  return proto.tendermint.p2p.ProtocolVersion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.p2p.ProtocolVersion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.p2p.ProtocolVersion}
 */
proto.tendermint.p2p.ProtocolVersion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setP2p(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlock(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setApp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tendermint.p2p.ProtocolVersion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.p2p.ProtocolVersion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.p2p.ProtocolVersion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.p2p.ProtocolVersion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getP2p();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getBlock();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getApp();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional uint64 p2p = 1;
 * @return {number}
 */
proto.tendermint.p2p.ProtocolVersion.prototype.getP2p = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.p2p.ProtocolVersion} returns this
 */
proto.tendermint.p2p.ProtocolVersion.prototype.setP2p = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 block = 2;
 * @return {number}
 */
proto.tendermint.p2p.ProtocolVersion.prototype.getBlock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.p2p.ProtocolVersion} returns this
 */
proto.tendermint.p2p.ProtocolVersion.prototype.setBlock = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 app = 3;
 * @return {number}
 */
proto.tendermint.p2p.ProtocolVersion.prototype.getApp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.p2p.ProtocolVersion} returns this
 */
proto.tendermint.p2p.ProtocolVersion.prototype.setApp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tendermint.p2p.DefaultNodeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.p2p.DefaultNodeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.p2p.DefaultNodeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.p2p.DefaultNodeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    protocolVersion: (f = msg.getProtocolVersion()) && proto.tendermint.p2p.ProtocolVersion.toObject(includeInstance, f),
    defaultNodeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    listenAddr: jspb.Message.getFieldWithDefault(msg, 3, ""),
    network: jspb.Message.getFieldWithDefault(msg, 4, ""),
    version: jspb.Message.getFieldWithDefault(msg, 5, ""),
    channels: msg.getChannels_asB64(),
    moniker: jspb.Message.getFieldWithDefault(msg, 7, ""),
    other: (f = msg.getOther()) && proto.tendermint.p2p.DefaultNodeInfoOther.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tendermint.p2p.DefaultNodeInfo}
 */
proto.tendermint.p2p.DefaultNodeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.p2p.DefaultNodeInfo;
  return proto.tendermint.p2p.DefaultNodeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.p2p.DefaultNodeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.p2p.DefaultNodeInfo}
 */
proto.tendermint.p2p.DefaultNodeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tendermint.p2p.ProtocolVersion;
      reader.readMessage(value,proto.tendermint.p2p.ProtocolVersion.deserializeBinaryFromReader);
      msg.setProtocolVersion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultNodeId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setListenAddr(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetwork(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChannels(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMoniker(value);
      break;
    case 8:
      var value = new proto.tendermint.p2p.DefaultNodeInfoOther;
      reader.readMessage(value,proto.tendermint.p2p.DefaultNodeInfoOther.deserializeBinaryFromReader);
      msg.setOther(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tendermint.p2p.DefaultNodeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.p2p.DefaultNodeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.p2p.DefaultNodeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.p2p.DefaultNodeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProtocolVersion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tendermint.p2p.ProtocolVersion.serializeBinaryToWriter
    );
  }
  f = message.getDefaultNodeId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getListenAddr();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNetwork();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getChannels_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getMoniker();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getOther();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.tendermint.p2p.DefaultNodeInfoOther.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProtocolVersion protocol_version = 1;
 * @return {?proto.tendermint.p2p.ProtocolVersion}
 */
proto.tendermint.p2p.DefaultNodeInfo.prototype.getProtocolVersion = function() {
  return /** @type{?proto.tendermint.p2p.ProtocolVersion} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.p2p.ProtocolVersion, 1));
};


/**
 * @param {?proto.tendermint.p2p.ProtocolVersion|undefined} value
 * @return {!proto.tendermint.p2p.DefaultNodeInfo} returns this
*/
proto.tendermint.p2p.DefaultNodeInfo.prototype.setProtocolVersion = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.p2p.DefaultNodeInfo} returns this
 */
proto.tendermint.p2p.DefaultNodeInfo.prototype.clearProtocolVersion = function() {
  return this.setProtocolVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.p2p.DefaultNodeInfo.prototype.hasProtocolVersion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string default_node_id = 2;
 * @return {string}
 */
proto.tendermint.p2p.DefaultNodeInfo.prototype.getDefaultNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.p2p.DefaultNodeInfo} returns this
 */
proto.tendermint.p2p.DefaultNodeInfo.prototype.setDefaultNodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string listen_addr = 3;
 * @return {string}
 */
proto.tendermint.p2p.DefaultNodeInfo.prototype.getListenAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.p2p.DefaultNodeInfo} returns this
 */
proto.tendermint.p2p.DefaultNodeInfo.prototype.setListenAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string network = 4;
 * @return {string}
 */
proto.tendermint.p2p.DefaultNodeInfo.prototype.getNetwork = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.p2p.DefaultNodeInfo} returns this
 */
proto.tendermint.p2p.DefaultNodeInfo.prototype.setNetwork = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string version = 5;
 * @return {string}
 */
proto.tendermint.p2p.DefaultNodeInfo.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.p2p.DefaultNodeInfo} returns this
 */
proto.tendermint.p2p.DefaultNodeInfo.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bytes channels = 6;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.p2p.DefaultNodeInfo.prototype.getChannels = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes channels = 6;
 * This is a type-conversion wrapper around `getChannels()`
 * @return {string}
 */
proto.tendermint.p2p.DefaultNodeInfo.prototype.getChannels_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChannels()));
};


/**
 * optional bytes channels = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChannels()`
 * @return {!Uint8Array}
 */
proto.tendermint.p2p.DefaultNodeInfo.prototype.getChannels_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChannels()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.p2p.DefaultNodeInfo} returns this
 */
proto.tendermint.p2p.DefaultNodeInfo.prototype.setChannels = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional string moniker = 7;
 * @return {string}
 */
proto.tendermint.p2p.DefaultNodeInfo.prototype.getMoniker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.p2p.DefaultNodeInfo} returns this
 */
proto.tendermint.p2p.DefaultNodeInfo.prototype.setMoniker = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional DefaultNodeInfoOther other = 8;
 * @return {?proto.tendermint.p2p.DefaultNodeInfoOther}
 */
proto.tendermint.p2p.DefaultNodeInfo.prototype.getOther = function() {
  return /** @type{?proto.tendermint.p2p.DefaultNodeInfoOther} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.p2p.DefaultNodeInfoOther, 8));
};


/**
 * @param {?proto.tendermint.p2p.DefaultNodeInfoOther|undefined} value
 * @return {!proto.tendermint.p2p.DefaultNodeInfo} returns this
*/
proto.tendermint.p2p.DefaultNodeInfo.prototype.setOther = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.p2p.DefaultNodeInfo} returns this
 */
proto.tendermint.p2p.DefaultNodeInfo.prototype.clearOther = function() {
  return this.setOther(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.p2p.DefaultNodeInfo.prototype.hasOther = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tendermint.p2p.DefaultNodeInfoOther.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.p2p.DefaultNodeInfoOther.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.p2p.DefaultNodeInfoOther} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.p2p.DefaultNodeInfoOther.toObject = function(includeInstance, msg) {
  var f, obj = {
    txIndex: jspb.Message.getFieldWithDefault(msg, 1, ""),
    rpcAddress: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tendermint.p2p.DefaultNodeInfoOther}
 */
proto.tendermint.p2p.DefaultNodeInfoOther.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.p2p.DefaultNodeInfoOther;
  return proto.tendermint.p2p.DefaultNodeInfoOther.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.p2p.DefaultNodeInfoOther} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.p2p.DefaultNodeInfoOther}
 */
proto.tendermint.p2p.DefaultNodeInfoOther.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxIndex(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRpcAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tendermint.p2p.DefaultNodeInfoOther.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.p2p.DefaultNodeInfoOther.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.p2p.DefaultNodeInfoOther} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.p2p.DefaultNodeInfoOther.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxIndex();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRpcAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string tx_index = 1;
 * @return {string}
 */
proto.tendermint.p2p.DefaultNodeInfoOther.prototype.getTxIndex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.p2p.DefaultNodeInfoOther} returns this
 */
proto.tendermint.p2p.DefaultNodeInfoOther.prototype.setTxIndex = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string rpc_address = 2;
 * @return {string}
 */
proto.tendermint.p2p.DefaultNodeInfoOther.prototype.getRpcAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.p2p.DefaultNodeInfoOther} returns this
 */
proto.tendermint.p2p.DefaultNodeInfoOther.prototype.setRpcAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.tendermint.p2p);
