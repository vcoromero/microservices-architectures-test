// package: product
// file: product.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class FindOneRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): FindOneRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindOneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FindOneRequest): FindOneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindOneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindOneRequest;
    static deserializeBinaryFromReader(message: FindOneRequest, reader: jspb.BinaryReader): FindOneRequest;
}

export namespace FindOneRequest {
    export type AsObject = {
        id: number,
    }
}

export class FindOneResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): FindOneResponse;
    getName(): string;
    setName(value: string): FindOneResponse;
    getDescription(): string;
    setDescription(value: string): FindOneResponse;
    getPrice(): number;
    setPrice(value: number): FindOneResponse;
    getQuantity(): number;
    setQuantity(value: number): FindOneResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindOneResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FindOneResponse): FindOneResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindOneResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindOneResponse;
    static deserializeBinaryFromReader(message: FindOneResponse, reader: jspb.BinaryReader): FindOneResponse;
}

export namespace FindOneResponse {
    export type AsObject = {
        id: number,
        name: string,
        description: string,
        price: number,
        quantity: number,
    }
}

export class CreateRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateRequest;
    getDescription(): string;
    setDescription(value: string): CreateRequest;
    getPrice(): number;
    setPrice(value: number): CreateRequest;
    getQuantity(): number;
    setQuantity(value: number): CreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRequest;
    static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
    export type AsObject = {
        name: string,
        description: string,
        price: number,
        quantity: number,
    }
}

export class UpdateRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): UpdateRequest;
    getName(): string;
    setName(value: string): UpdateRequest;
    getDescription(): string;
    setDescription(value: string): UpdateRequest;
    getPrice(): number;
    setPrice(value: number): UpdateRequest;
    getQuantity(): number;
    setQuantity(value: number): UpdateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRequest;
    static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
    export type AsObject = {
        id: number,
        name: string,
        description: string,
        price: number,
        quantity: number,
    }
}

export class DeleteRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): DeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRequest;
    static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
    export type AsObject = {
        id: number,
    }
}

export class ProductResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): ProductResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProductResponse): ProductResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductResponse;
    static deserializeBinaryFromReader(message: ProductResponse, reader: jspb.BinaryReader): ProductResponse;
}

export namespace ProductResponse {
    export type AsObject = {
        success: boolean,
    }
}

export class FindAllRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FindAllRequest): FindAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindAllRequest;
    static deserializeBinaryFromReader(message: FindAllRequest, reader: jspb.BinaryReader): FindAllRequest;
}

export namespace FindAllRequest {
    export type AsObject = {
    }
}

export class FindAllResponse extends jspb.Message { 
    clearProductsList(): void;
    getProductsList(): Array<FindOneResponse>;
    setProductsList(value: Array<FindOneResponse>): FindAllResponse;
    addProducts(value?: FindOneResponse, index?: number): FindOneResponse;

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
        productsList: Array<FindOneResponse.AsObject>,
    }
}
