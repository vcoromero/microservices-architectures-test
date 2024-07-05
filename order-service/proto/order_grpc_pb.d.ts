// package: order
// file: order.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as order_pb from "./order_pb";

interface IOrderServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IOrderServiceService_ICreate;
    findAll: IOrderServiceService_IFindAll;
}

interface IOrderServiceService_ICreate extends grpc.MethodDefinition<order_pb.CreateOrderRequest, order_pb.OrderResponse> {
    path: "/order.OrderService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<order_pb.CreateOrderRequest>;
    requestDeserialize: grpc.deserialize<order_pb.CreateOrderRequest>;
    responseSerialize: grpc.serialize<order_pb.OrderResponse>;
    responseDeserialize: grpc.deserialize<order_pb.OrderResponse>;
}
interface IOrderServiceService_IFindAll extends grpc.MethodDefinition<order_pb.Empty, order_pb.FindAllResponse> {
    path: "/order.OrderService/FindAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<order_pb.Empty>;
    requestDeserialize: grpc.deserialize<order_pb.Empty>;
    responseSerialize: grpc.serialize<order_pb.FindAllResponse>;
    responseDeserialize: grpc.deserialize<order_pb.FindAllResponse>;
}

export const OrderServiceService: IOrderServiceService;

export interface IOrderServiceServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<order_pb.CreateOrderRequest, order_pb.OrderResponse>;
    findAll: grpc.handleUnaryCall<order_pb.Empty, order_pb.FindAllResponse>;
}

export interface IOrderServiceClient {
    create(request: order_pb.CreateOrderRequest, callback: (error: grpc.ServiceError | null, response: order_pb.OrderResponse) => void): grpc.ClientUnaryCall;
    create(request: order_pb.CreateOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.OrderResponse) => void): grpc.ClientUnaryCall;
    create(request: order_pb.CreateOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.OrderResponse) => void): grpc.ClientUnaryCall;
    findAll(request: order_pb.Empty, callback: (error: grpc.ServiceError | null, response: order_pb.FindAllResponse) => void): grpc.ClientUnaryCall;
    findAll(request: order_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.FindAllResponse) => void): grpc.ClientUnaryCall;
    findAll(request: order_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.FindAllResponse) => void): grpc.ClientUnaryCall;
}

export class OrderServiceClient extends grpc.Client implements IOrderServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: order_pb.CreateOrderRequest, callback: (error: grpc.ServiceError | null, response: order_pb.OrderResponse) => void): grpc.ClientUnaryCall;
    public create(request: order_pb.CreateOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.OrderResponse) => void): grpc.ClientUnaryCall;
    public create(request: order_pb.CreateOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.OrderResponse) => void): grpc.ClientUnaryCall;
    public findAll(request: order_pb.Empty, callback: (error: grpc.ServiceError | null, response: order_pb.FindAllResponse) => void): grpc.ClientUnaryCall;
    public findAll(request: order_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.FindAllResponse) => void): grpc.ClientUnaryCall;
    public findAll(request: order_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.FindAllResponse) => void): grpc.ClientUnaryCall;
}
