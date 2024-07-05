import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { lastValueFrom } from 'rxjs';
import {
  FindOneRequest,
  FindOneResponse,
  ProductServiceClient,
} from './proto/product.interface';

@Injectable()
export class OrdersService implements OnModuleInit {
  private productService: ProductServiceClient;

  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @Inject('PRODUCT_SERVICE') private client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.productService =
      this.client.getService<ProductServiceClient>('ProductService');
  }

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    for (const id of createOrderDto.productIds) {
      const product: FindOneResponse = await lastValueFrom(
        this.productService.FindOne({ id } as FindOneRequest),
      );
      if (
        !product ||
        product.quantity <
          createOrderDto.quantities[createOrderDto.productIds.indexOf(id)]
      ) {
        throw new Error('Product not available or insufficient quantity');
      }
    }

    const order = this.ordersRepository.create({
      customerName: createOrderDto.customerName,
      productIds: createOrderDto.productIds,
      quantities: createOrderDto.quantities,
    });

    return this.ordersRepository.save(order);
  }

  async findAll(): Promise<any[]> {
    const orders = await this.ordersRepository.find();
    const detailedOrders = [];

    for (const order of orders) {
      const products = await Promise.all(
        order.productIds.map(async (id) => {
          return await lastValueFrom(
            this.productService.FindOne({ id } as FindOneRequest),
          );
        }),
      );
      detailedOrders.push({ ...order, products });
    }

    return detailedOrders;
  }
}
