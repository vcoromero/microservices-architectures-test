// package: product
// file: product.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as product_pb from "./product_pb";

interface IProductServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    findOne: IProductServiceService_IFindOne;
    create: IProductServiceService_ICreate;
    update: IProductServiceService_IUpdate;
    delete: IProductServiceService_IDelete;
    findAll: IProductServiceService_IFindAll;
}

interface IProductServiceService_IFindOne extends grpc.MethodDefinition<product_pb.FindOneRequest, product_pb.FindOneResponse> {
    path: "/product.ProductService/FindOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.FindOneRequest>;
    requestDeserialize: grpc.deserialize<product_pb.FindOneRequest>;
    responseSerialize: grpc.serialize<product_pb.FindOneResponse>;
    responseDeserialize: grpc.deserialize<product_pb.FindOneResponse>;
}
interface IProductServiceService_ICreate extends grpc.MethodDefinition<product_pb.CreateRequest, product_pb.ProductResponse> {
    path: "/product.ProductService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.CreateRequest>;
    requestDeserialize: grpc.deserialize<product_pb.CreateRequest>;
    responseSerialize: grpc.serialize<product_pb.ProductResponse>;
    responseDeserialize: grpc.deserialize<product_pb.ProductResponse>;
}
interface IProductServiceService_IUpdate extends grpc.MethodDefinition<product_pb.UpdateRequest, product_pb.ProductResponse> {
    path: "/product.ProductService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.UpdateRequest>;
    requestDeserialize: grpc.deserialize<product_pb.UpdateRequest>;
    responseSerialize: grpc.serialize<product_pb.ProductResponse>;
    responseDeserialize: grpc.deserialize<product_pb.ProductResponse>;
}
interface IProductServiceService_IDelete extends grpc.MethodDefinition<product_pb.DeleteRequest, product_pb.ProductResponse> {
    path: "/product.ProductService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.DeleteRequest>;
    requestDeserialize: grpc.deserialize<product_pb.DeleteRequest>;
    responseSerialize: grpc.serialize<product_pb.ProductResponse>;
    responseDeserialize: grpc.deserialize<product_pb.ProductResponse>;
}
interface IProductServiceService_IFindAll extends grpc.MethodDefinition<product_pb.FindAllRequest, product_pb.FindAllResponse> {
    path: "/product.ProductService/FindAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.FindAllRequest>;
    requestDeserialize: grpc.deserialize<product_pb.FindAllRequest>;
    responseSerialize: grpc.serialize<product_pb.FindAllResponse>;
    responseDeserialize: grpc.deserialize<product_pb.FindAllResponse>;
}

export const ProductServiceService: IProductServiceService;

export interface IProductServiceServer extends grpc.UntypedServiceImplementation {
    findOne: grpc.handleUnaryCall<product_pb.FindOneRequest, product_pb.FindOneResponse>;
    create: grpc.handleUnaryCall<product_pb.CreateRequest, product_pb.ProductResponse>;
    update: grpc.handleUnaryCall<product_pb.UpdateRequest, product_pb.ProductResponse>;
    delete: grpc.handleUnaryCall<product_pb.DeleteRequest, product_pb.ProductResponse>;
    findAll: grpc.handleUnaryCall<product_pb.FindAllRequest, product_pb.FindAllResponse>;
}

export interface IProductServiceClient {
    findOne(request: product_pb.FindOneRequest, callback: (error: grpc.ServiceError | null, response: product_pb.FindOneResponse) => void): grpc.ClientUnaryCall;
    findOne(request: product_pb.FindOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.FindOneResponse) => void): grpc.ClientUnaryCall;
    findOne(request: product_pb.FindOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.FindOneResponse) => void): grpc.ClientUnaryCall;
    create(request: product_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    create(request: product_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    create(request: product_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    update(request: product_pb.UpdateRequest, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    update(request: product_pb.UpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    update(request: product_pb.UpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    delete(request: product_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    delete(request: product_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    delete(request: product_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    findAll(request: product_pb.FindAllRequest, callback: (error: grpc.ServiceError | null, response: product_pb.FindAllResponse) => void): grpc.ClientUnaryCall;
    findAll(request: product_pb.FindAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.FindAllResponse) => void): grpc.ClientUnaryCall;
    findAll(request: product_pb.FindAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.FindAllResponse) => void): grpc.ClientUnaryCall;
}

export class ProductServiceClient extends grpc.Client implements IProductServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public findOne(request: product_pb.FindOneRequest, callback: (error: grpc.ServiceError | null, response: product_pb.FindOneResponse) => void): grpc.ClientUnaryCall;
    public findOne(request: product_pb.FindOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.FindOneResponse) => void): grpc.ClientUnaryCall;
    public findOne(request: product_pb.FindOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.FindOneResponse) => void): grpc.ClientUnaryCall;
    public create(request: product_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    public create(request: product_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    public create(request: product_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    public update(request: product_pb.UpdateRequest, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    public update(request: product_pb.UpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    public update(request: product_pb.UpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    public delete(request: product_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    public delete(request: product_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    public delete(request: product_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    public findAll(request: product_pb.FindAllRequest, callback: (error: grpc.ServiceError | null, response: product_pb.FindAllResponse) => void): grpc.ClientUnaryCall;
    public findAll(request: product_pb.FindAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.FindAllResponse) => void): grpc.ClientUnaryCall;
    public findAll(request: product_pb.FindAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.FindAllResponse) => void): grpc.ClientUnaryCall;
}
