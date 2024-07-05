// package: order
// file: order.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class CreateOrderRequest extends jspb.Message { 
    getCustomername(): string;
    setCustomername(value: string): CreateOrderRequest;
    clearProductidsList(): void;
    getProductidsList(): Array<number>;
    setProductidsList(value: Array<number>): CreateOrderRequest;
    addProductids(value: number, index?: number): number;
    clearQuantitiesList(): void;
    getQuantitiesList(): Array<number>;
    setQuantitiesList(value: Array<number>): CreateOrderRequest;
    addQuantities(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateOrderRequest): CreateOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateOrderRequest;
    static deserializeBinaryFromReader(message: CreateOrderRequest, reader: jspb.BinaryReader): CreateOrderRequest;
}

export namespace CreateOrderRequest {
    export type AsObject = {
        customername: string,
        productidsList: Array<number>,
        quantitiesList: Array<number>,
    }
}

export class OrderResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): OrderResponse;
    getMessage(): string;
    setMessage(value: string): OrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OrderResponse): OrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderResponse;
    static deserializeBinaryFromReader(message: OrderResponse, reader: jspb.BinaryReader): OrderResponse;
}

export namespace OrderResponse {
    export type AsObject = {
        success: boolean,
        message: string,
    }
}

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class FindAllResponse extends jspb.Message { 
    clearOrdersList(): void;
    getOrdersList(): Array<FindOneOrderResponse>;
    setOrdersList(value: Array<FindOneOrderResponse>): FindAllResponse;
    addOrders(value?: FindOneOrderResponse, index?: number): FindOneOrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindAllResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FindAllResponse): FindAllResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindAllResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindAllResponse;
    static deserializeBinaryFromReader(message: FindAllResponse, reader: jspb.BinaryReader): FindAllResponse;
}

export namespace FindAllResponse {
    export type AsObject = {
        ordersList: Array<FindOneOrderResponse.AsObject>,
    }
}

export class FindOneOrderResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): FindOneOrderResponse;
    getCustomername(): string;
    setCustomername(value: string): FindOneOrderResponse;
    clearProductsList(): void;
    getProductsList(): Array<Product>;
    setProductsList(value: Array<Product>): FindOneOrderResponse;
    addProducts(value?: Product, index?: number): Product;
    clearQuantitiesList(): void;
    getQuantitiesList(): Array<number>;
    setQuantitiesList(value: Array<number>): FindOneOrderResponse;
    addQuantities(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindOneOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FindOneOrderResponse): FindOneOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindOneOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindOneOrderResponse;
    static deserializeBinaryFromReader(message: FindOneOrderResponse, reader: jspb.BinaryReader): FindOneOrderResponse;
}

export namespace FindOneOrderResponse {
    export type AsObject = {
        id: number,
        customername: string,
        productsList: Array<Product.AsObject>,
        quantitiesList: Array<number>,
    }
}

export class Product extends jspb.Message { 
    getId(): number;
    setId(value: number): Product;
    getName(): string;
    setName(value: string): Product;
    getDescription(): string;
    setDescription(value: string): Product;
    getPrice(): number;
    setPrice(value: number): Product;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Product.AsObject;
    static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Product;
    static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
    export type AsObject = {
        id: number,
        name: string,
        description: string,
        price: number,
    }
}
