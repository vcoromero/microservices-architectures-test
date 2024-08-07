// source: order.proto
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
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.order.CreateOrderRequest', null, global);
goog.exportSymbol('proto.order.Empty', null, global);
goog.exportSymbol('proto.order.FindAllResponse', null, global);
goog.exportSymbol('proto.order.FindOneOrderResponse', null, global);
goog.exportSymbol('proto.order.OrderResponse', null, global);
goog.exportSymbol('proto.order.Product', null, global);
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
proto.order.CreateOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.order.CreateOrderRequest.repeatedFields_, null);
};
goog.inherits(proto.order.CreateOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.order.CreateOrderRequest.displayName = 'proto.order.CreateOrderRequest';
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
proto.order.OrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.order.OrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.order.OrderResponse.displayName = 'proto.order.OrderResponse';
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
proto.order.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.order.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.order.Empty.displayName = 'proto.order.Empty';
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
proto.order.FindAllResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.order.FindAllResponse.repeatedFields_, null);
};
goog.inherits(proto.order.FindAllResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.order.FindAllResponse.displayName = 'proto.order.FindAllResponse';
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
proto.order.FindOneOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.order.FindOneOrderResponse.repeatedFields_, null);
};
goog.inherits(proto.order.FindOneOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.order.FindOneOrderResponse.displayName = 'proto.order.FindOneOrderResponse';
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
proto.order.Product = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.order.Product, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.order.Product.displayName = 'proto.order.Product';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.order.CreateOrderRequest.repeatedFields_ = [2,3];



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
proto.order.CreateOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.order.CreateOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.order.CreateOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.order.CreateOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    customername: jspb.Message.getFieldWithDefault(msg, 1, ""),
    productidsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    quantitiesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.order.CreateOrderRequest}
 */
proto.order.CreateOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.order.CreateOrderRequest;
  return proto.order.CreateOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.order.CreateOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.order.CreateOrderRequest}
 */
proto.order.CreateOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomername(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addProductids(values[i]);
      }
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addQuantities(values[i]);
      }
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
proto.order.CreateOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.order.CreateOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.order.CreateOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.order.CreateOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProductidsList();
  if (f.length > 0) {
    writer.writePackedInt32(
      2,
      f
    );
  }
  f = message.getQuantitiesList();
  if (f.length > 0) {
    writer.writePackedInt32(
      3,
      f
    );
  }
};


/**
 * optional string customerName = 1;
 * @return {string}
 */
proto.order.CreateOrderRequest.prototype.getCustomername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.order.CreateOrderRequest} returns this
 */
proto.order.CreateOrderRequest.prototype.setCustomername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated int32 productIds = 2;
 * @return {!Array<number>}
 */
proto.order.CreateOrderRequest.prototype.getProductidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.order.CreateOrderRequest} returns this
 */
proto.order.CreateOrderRequest.prototype.setProductidsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.order.CreateOrderRequest} returns this
 */
proto.order.CreateOrderRequest.prototype.addProductids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.order.CreateOrderRequest} returns this
 */
proto.order.CreateOrderRequest.prototype.clearProductidsList = function() {
  return this.setProductidsList([]);
};


/**
 * repeated int32 quantities = 3;
 * @return {!Array<number>}
 */
proto.order.CreateOrderRequest.prototype.getQuantitiesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.order.CreateOrderRequest} returns this
 */
proto.order.CreateOrderRequest.prototype.setQuantitiesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.order.CreateOrderRequest} returns this
 */
proto.order.CreateOrderRequest.prototype.addQuantities = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.order.CreateOrderRequest} returns this
 */
proto.order.CreateOrderRequest.prototype.clearQuantitiesList = function() {
  return this.setQuantitiesList([]);
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
proto.order.OrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.order.OrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.order.OrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.order.OrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.order.OrderResponse}
 */
proto.order.OrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.order.OrderResponse;
  return proto.order.OrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.order.OrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.order.OrderResponse}
 */
proto.order.OrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.order.OrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.order.OrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.order.OrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.order.OrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.order.OrderResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.order.OrderResponse} returns this
 */
proto.order.OrderResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.order.OrderResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.order.OrderResponse} returns this
 */
proto.order.OrderResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.order.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.order.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.order.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.order.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.order.Empty}
 */
proto.order.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.order.Empty;
  return proto.order.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.order.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.order.Empty}
 */
proto.order.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.order.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.order.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.order.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.order.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.order.FindAllResponse.repeatedFields_ = [1];



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
proto.order.FindAllResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.order.FindAllResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.order.FindAllResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.order.FindAllResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ordersList: jspb.Message.toObjectList(msg.getOrdersList(),
    proto.order.FindOneOrderResponse.toObject, includeInstance)
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
 * @return {!proto.order.FindAllResponse}
 */
proto.order.FindAllResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.order.FindAllResponse;
  return proto.order.FindAllResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.order.FindAllResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.order.FindAllResponse}
 */
proto.order.FindAllResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.order.FindOneOrderResponse;
      reader.readMessage(value,proto.order.FindOneOrderResponse.deserializeBinaryFromReader);
      msg.addOrders(value);
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
proto.order.FindAllResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.order.FindAllResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.order.FindAllResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.order.FindAllResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.order.FindOneOrderResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FindOneOrderResponse orders = 1;
 * @return {!Array<!proto.order.FindOneOrderResponse>}
 */
proto.order.FindAllResponse.prototype.getOrdersList = function() {
  return /** @type{!Array<!proto.order.FindOneOrderResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.order.FindOneOrderResponse, 1));
};


/**
 * @param {!Array<!proto.order.FindOneOrderResponse>} value
 * @return {!proto.order.FindAllResponse} returns this
*/
proto.order.FindAllResponse.prototype.setOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.order.FindOneOrderResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.order.FindOneOrderResponse}
 */
proto.order.FindAllResponse.prototype.addOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.order.FindOneOrderResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.order.FindAllResponse} returns this
 */
proto.order.FindAllResponse.prototype.clearOrdersList = function() {
  return this.setOrdersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.order.FindOneOrderResponse.repeatedFields_ = [3,4];



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
proto.order.FindOneOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.order.FindOneOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.order.FindOneOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.order.FindOneOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    customername: jspb.Message.getFieldWithDefault(msg, 2, ""),
    productsList: jspb.Message.toObjectList(msg.getProductsList(),
    proto.order.Product.toObject, includeInstance),
    quantitiesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.order.FindOneOrderResponse}
 */
proto.order.FindOneOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.order.FindOneOrderResponse;
  return proto.order.FindOneOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.order.FindOneOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.order.FindOneOrderResponse}
 */
proto.order.FindOneOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomername(value);
      break;
    case 3:
      var value = new proto.order.Product;
      reader.readMessage(value,proto.order.Product.deserializeBinaryFromReader);
      msg.addProducts(value);
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addQuantities(values[i]);
      }
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
proto.order.FindOneOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.order.FindOneOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.order.FindOneOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.order.FindOneOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCustomername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProductsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.order.Product.serializeBinaryToWriter
    );
  }
  f = message.getQuantitiesList();
  if (f.length > 0) {
    writer.writePackedInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.order.FindOneOrderResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.order.FindOneOrderResponse} returns this
 */
proto.order.FindOneOrderResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string customerName = 2;
 * @return {string}
 */
proto.order.FindOneOrderResponse.prototype.getCustomername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.order.FindOneOrderResponse} returns this
 */
proto.order.FindOneOrderResponse.prototype.setCustomername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Product products = 3;
 * @return {!Array<!proto.order.Product>}
 */
proto.order.FindOneOrderResponse.prototype.getProductsList = function() {
  return /** @type{!Array<!proto.order.Product>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.order.Product, 3));
};


/**
 * @param {!Array<!proto.order.Product>} value
 * @return {!proto.order.FindOneOrderResponse} returns this
*/
proto.order.FindOneOrderResponse.prototype.setProductsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.order.Product=} opt_value
 * @param {number=} opt_index
 * @return {!proto.order.Product}
 */
proto.order.FindOneOrderResponse.prototype.addProducts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.order.Product, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.order.FindOneOrderResponse} returns this
 */
proto.order.FindOneOrderResponse.prototype.clearProductsList = function() {
  return this.setProductsList([]);
};


/**
 * repeated int32 quantities = 4;
 * @return {!Array<number>}
 */
proto.order.FindOneOrderResponse.prototype.getQuantitiesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.order.FindOneOrderResponse} returns this
 */
proto.order.FindOneOrderResponse.prototype.setQuantitiesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.order.FindOneOrderResponse} returns this
 */
proto.order.FindOneOrderResponse.prototype.addQuantities = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.order.FindOneOrderResponse} returns this
 */
proto.order.FindOneOrderResponse.prototype.clearQuantitiesList = function() {
  return this.setQuantitiesList([]);
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
proto.order.Product.prototype.toObject = function(opt_includeInstance) {
  return proto.order.Product.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.order.Product} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.order.Product.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.order.Product}
 */
proto.order.Product.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.order.Product;
  return proto.order.Product.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.order.Product} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.order.Product}
 */
proto.order.Product.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrice(value);
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
proto.order.Product.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.order.Product.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.order.Product} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.order.Product.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.order.Product.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.order.Product} returns this
 */
proto.order.Product.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.order.Product.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.order.Product} returns this
 */
proto.order.Product.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.order.Product.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.order.Product} returns this
 */
proto.order.Product.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional float price = 4;
 * @return {number}
 */
proto.order.Product.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.order.Product} returns this
 */
proto.order.Product.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


goog.object.extend(exports, proto.order);
