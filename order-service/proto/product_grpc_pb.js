// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var product_pb = require('./product_pb.js');

function serialize_product_CreateRequest(arg) {
  if (!(arg instanceof product_pb.CreateRequest)) {
    throw new Error('Expected argument of type product.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_CreateRequest(buffer_arg) {
  return product_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_DeleteRequest(arg) {
  if (!(arg instanceof product_pb.DeleteRequest)) {
    throw new Error('Expected argument of type product.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_DeleteRequest(buffer_arg) {
  return product_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_FindAllRequest(arg) {
  if (!(arg instanceof product_pb.FindAllRequest)) {
    throw new Error('Expected argument of type product.FindAllRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_FindAllRequest(buffer_arg) {
  return product_pb.FindAllRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_FindAllResponse(arg) {
  if (!(arg instanceof product_pb.FindAllResponse)) {
    throw new Error('Expected argument of type product.FindAllResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_FindAllResponse(buffer_arg) {
  return product_pb.FindAllResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_FindOneRequest(arg) {
  if (!(arg instanceof product_pb.FindOneRequest)) {
    throw new Error('Expected argument of type product.FindOneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_FindOneRequest(buffer_arg) {
  return product_pb.FindOneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_FindOneResponse(arg) {
  if (!(arg instanceof product_pb.FindOneResponse)) {
    throw new Error('Expected argument of type product.FindOneResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_FindOneResponse(buffer_arg) {
  return product_pb.FindOneResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_ProductResponse(arg) {
  if (!(arg instanceof product_pb.ProductResponse)) {
    throw new Error('Expected argument of type product.ProductResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_ProductResponse(buffer_arg) {
  return product_pb.ProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_UpdateRequest(arg) {
  if (!(arg instanceof product_pb.UpdateRequest)) {
    throw new Error('Expected argument of type product.UpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_UpdateRequest(buffer_arg) {
  return product_pb.UpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProductServiceService = exports.ProductServiceService = {
  findOne: {
    path: '/product.ProductService/FindOne',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.FindOneRequest,
    responseType: product_pb.FindOneResponse,
    requestSerialize: serialize_product_FindOneRequest,
    requestDeserialize: deserialize_product_FindOneRequest,
    responseSerialize: serialize_product_FindOneResponse,
    responseDeserialize: deserialize_product_FindOneResponse,
  },
  create: {
    path: '/product.ProductService/Create',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.CreateRequest,
    responseType: product_pb.ProductResponse,
    requestSerialize: serialize_product_CreateRequest,
    requestDeserialize: deserialize_product_CreateRequest,
    responseSerialize: serialize_product_ProductResponse,
    responseDeserialize: deserialize_product_ProductResponse,
  },
  update: {
    path: '/product.ProductService/Update',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.UpdateRequest,
    responseType: product_pb.ProductResponse,
    requestSerialize: serialize_product_UpdateRequest,
    requestDeserialize: deserialize_product_UpdateRequest,
    responseSerialize: serialize_product_ProductResponse,
    responseDeserialize: deserialize_product_ProductResponse,
  },
  delete: {
    path: '/product.ProductService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.DeleteRequest,
    responseType: product_pb.ProductResponse,
    requestSerialize: serialize_product_DeleteRequest,
    requestDeserialize: deserialize_product_DeleteRequest,
    responseSerialize: serialize_product_ProductResponse,
    responseDeserialize: deserialize_product_ProductResponse,
  },
  findAll: {
    path: '/product.ProductService/FindAll',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.FindAllRequest,
    responseType: product_pb.FindAllResponse,
    requestSerialize: serialize_product_FindAllRequest,
    requestDeserialize: deserialize_product_FindAllRequest,
    responseSerialize: serialize_product_FindAllResponse,
    responseDeserialize: deserialize_product_FindAllResponse,
  },
};

exports.ProductServiceClient = grpc.makeGenericClientConstructor(ProductServiceService);
