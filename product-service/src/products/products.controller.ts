import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  CreateRequest,
  DeleteRequest,
  FindAllResponse,
  FindOneRequest,
  FindOneResponse,
  ProductResponse,
  UpdateRequest,
} from 'proto/product_pb';
import { ProductsService } from './products.service';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @GrpcMethod('ProductService', 'Create')
  create(data: CreateRequest): Promise<ProductResponse> {
    return this.productsService.create(data);
  }

  @GrpcMethod('ProductService', 'FindAll')
  findAll(): Promise<FindAllResponse> {
    return this.productsService.findAll();
  }

  @GrpcMethod('ProductService', 'FindOne')
  findOne(data: FindOneRequest): Promise<FindOneResponse> {
    return this.productsService.findOne(data);
  }

  @GrpcMethod('ProductService', 'Update')
  update(data: UpdateRequest): Promise<ProductResponse> {
    return this.productsService.update(data);
  }

  @GrpcMethod('ProductService', 'Delete')
  delete(data: DeleteRequest): Promise<ProductResponse> {
    return this.productsService.delete(data);
  }
}
