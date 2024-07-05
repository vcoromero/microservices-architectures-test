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
    const product = await this.productsRepository.create(data.toObject());
    const productCreated = await this.productsRepository.save(product);

    const response = new ProductResponse();
    response.setSuccess(productCreated.id! == undefined ? false : true);

    return response;
  }

  async findAll(): Promise<FindAllResponse> {
    const products = await this.productsRepository.find();
    const response = new FindAllResponse();

    products.forEach((product) => {
      const productResponse = new FindOneResponse();
      productResponse.setId(product.id);
      productResponse.setName(product.name);
      productResponse.setDescription(product.description);
      productResponse.setPrice(product.price);
      productResponse.setQuantity(product.quantity);
      response.addProducts(productResponse);
    });

    return response;
  }

  async findOne(data: FindOneRequest): Promise<FindOneResponse> {
    const product = await this.productsRepository.findOne({
      where: { id: data.getId() },
    });
    if (!product) {
      throw new Error('Product not found');
    }
    const response = new FindOneResponse();
    response.setId(product.id);
    response.setName(product.name);
    response.setDescription(product.description);
    response.setPrice(product.price);
    response.setQuantity(product.quantity);
    return response;
  }

  async update(data: UpdateRequest): Promise<ProductResponse> {
    const updatedProduct = await this.productsRepository.update(
      data.getId(),
      data.toObject(),
    );

    const response = new ProductResponse();
    response.setSuccess(updatedProduct.affected! > 0 ? true : false);

    return response;
  }

  async delete(data: DeleteRequest): Promise<ProductResponse> {
    const deletedProduct = await this.productsRepository.delete(data.getId());
    const response = new ProductResponse();
    response.setSuccess(deletedProduct.affected! > 0 ? true : false);

    return response;
  }
}
