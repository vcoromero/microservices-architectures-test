import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateOrderRequest,
  FindAllResponse,
  FindOneOrderResponse,
  OrderResponse,
} from 'proto/order_pb';
import { lastValueFrom } from 'rxjs';
import { Repository } from 'typeorm';
import {
  FindOneRequest,
  FindOneResponse,
  ProductServiceClient,
} from './proto/product.interface';
import { Order } from './entities/order.entity';

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

  async create(data: CreateOrderRequest): Promise<OrderResponse> {
    for (const id of data.getProductidsList()) {
      await this.checkProductAvailability(id, data.toObject());
    }

    const order = await this.ordersRepository.create({
      customerName: data.getCustomername(),
      productIds: data.getProductidsList(),
      quantities: data.getQuantitiesList(),
    });

    const orderCreated = await this.ordersRepository.save(order);

    const response = new OrderResponse();
    response.setSuccess(orderCreated.id! == undefined ? false : true);
    response.setMessage('Order created successfully');

    return response;
  }

  async findAll(): Promise<FindAllResponse> {
    const orders = await this.ordersRepository.find();
    const detailedOrders = [];

    for (const order of orders) {
      const products = await Promise.all(
        order.productIds.map(async (id) => {
          return await this.findOne(id);
        }),
      );
      detailedOrders.push({ ...order, products });
    }

    const response = new FindAllResponse();
    detailedOrders.forEach((order) => {
      const orderResponse = new FindOneOrderResponse();
      orderResponse.setId(order.id);
      orderResponse.setCustomername(order.customerName);
      orderResponse.setProductsList(order.products);
      orderResponse.setQuantitiesList(order.quantities);
      response.addOrders(orderResponse);
    });

    return response;
  }

  private async checkProductAvailability(id, createOrderDto): Promise<void> {
    const product: FindOneResponse = await this.findOne(id);

    const requiredQuantity =
      createOrderDto.quantities[createOrderDto.productIds.indexOf(id)];
    const evaluate = !product || product.quantity < requiredQuantity;
    if (evaluate) {
      throw new Error('Product not available or insufficient quantity');
    }
  }

  private async findOne(id): Promise<FindOneResponse> {
    return await lastValueFrom(
      this.productService.FindOne({ id } as FindOneRequest),
    );
  }
}
