import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateRequest,
  DeleteRequest,
  FindAllResponse,
  FindOneRequest,
  FindOneResponse,
  ProductResponse,
  UpdateRequest,
} from 'proto/product_pb';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async create(data: CreateRequest): Promise<ProductResponse> {
    const product = new Product();
    product.name = data.name;
    product.description = data.description;
    product.price = data.price;
    product.quantity = data.quantity;

    const newProduct = await this.productsRepository.save(product);

    const response = new ProductResponse();
    response.success = newProduct ? true : false;

    return response;
  }

  async findAll(): Promise<FindAllResponse> {
    const products = await this.productsRepository.find();
    const response = new FindAllResponse();

    products.forEach((product) => {
      const productResponse = new FindOneResponse();
      productResponse.id = product.id;
      productResponse.name = product.name;
      productResponse.description = product.description;
      productResponse.price = product.price;
      productResponse.quantity = product.quantity;
      response.addProducts(productResponse);
    });

    console.log('findall', response);

    return response[0];
  }

  async findOne(data: FindOneRequest): Promise<FindOneResponse> {
    const product = await this.productsRepository.findOne({
      where: { id: data.id },
    });
    const response = new FindOneResponse();
    if (!product) {
      return response;
    }
    response.id = product.id;
    response.name = product.name;
    response.description = product.description;
    response.price = product.price;
    response.quantity = product.quantity;

    return response;
  }

  async update(data: UpdateRequest): Promise<ProductResponse> {
    const updatedProduct = await this.productsRepository.update(data.id, data);

    const response = new ProductResponse();
    response.success = updatedProduct.affected! > 0 ? true : false;

    return response;
  }

  async delete(data: DeleteRequest): Promise<ProductResponse> {
    const deletedProduct = await this.productsRepository.delete(data.id);
    const response = new ProductResponse();
    response.success = deletedProduct.affected! > 0 ? true : false;

    return response;
  }
}
