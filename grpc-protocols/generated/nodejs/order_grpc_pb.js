// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var order_pb = require('./order_pb.js');

function serialize_order_CreateOrderRequest(arg) {
  if (!(arg instanceof order_pb.CreateOrderRequest)) {
    throw new Error('Expected argument of type order.CreateOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_CreateOrderRequest(buffer_arg) {
  return order_pb.CreateOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_Empty(arg) {
  if (!(arg instanceof order_pb.Empty)) {
    throw new Error('Expected argument of type order.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_Empty(buffer_arg) {
  return order_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_FindAllResponse(arg) {
  if (!(arg instanceof order_pb.FindAllResponse)) {
    throw new Error('Expected argument of type order.FindAllResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_FindAllResponse(buffer_arg) {
  return order_pb.FindAllResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_OrderResponse(arg) {
  if (!(arg instanceof order_pb.OrderResponse)) {
    throw new Error('Expected argument of type order.OrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_OrderResponse(buffer_arg) {
  return order_pb.OrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OrderServiceService = exports.OrderServiceService = {
  create: {
    path: '/order.OrderService/Create',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.CreateOrderRequest,
    responseType: order_pb.OrderResponse,
    requestSerialize: serialize_order_CreateOrderRequest,
    requestDeserialize: deserialize_order_CreateOrderRequest,
    responseSerialize: serialize_order_OrderResponse,
    responseDeserialize: deserialize_order_OrderResponse,
  },
  findAll: {
    path: '/order.OrderService/FindAll',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.Empty,
    responseType: order_pb.FindAllResponse,
    requestSerialize: serialize_order_Empty,
    requestDeserialize: deserialize_order_Empty,
    responseSerialize: serialize_order_FindAllResponse,
    responseDeserialize: deserialize_order_FindAllResponse,
  },
};

exports.OrderServiceClient = grpc.makeGenericClientConstructor(OrderServiceService);
