import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  CreateOrderRequest,
  FindAllResponse,
  OrderResponse,
} from 'proto/order_pb';
import { OrdersService } from './orders.service';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @GrpcMethod('OrderService', 'Create')
  async create(data: CreateOrderRequest): Promise<OrderResponse> {
    return await this.ordersService.create(data);
  }

  @GrpcMethod('OrderService', 'FindAll')
  async findAll(): Promise<FindAllResponse> {
    return await this.ordersService.findAll();
  }
}
