import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { of } from 'rxjs';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { OrdersService } from './orders.service';
import {
  CreateOrderRequest,
  FindAllResponse,
  OrderResponse,
} from 'proto/order_pb';

jest.mock('proto/order_pb', () => {
  return {
    CreateOrderRequest: jest.fn().mockImplementation(() => ({
      setCustomername: jest.fn(),
      setProductidsList: jest.fn(),
      setQuantitiesList: jest.fn(),
    })),
    FindAllResponse: jest.fn().mockImplementation(() => ({
      setOrdersList: jest.fn(),
    })),
    OrderResponse: jest.fn().mockImplementation(() => ({
      setSuccess: jest.fn(),
      setMessage: jest.fn(),
    })),
  };
});

const productServiceMock = {
  findOne: jest.fn().mockImplementation(() =>
    of({
      id: 1,
      name: 'Product 1',
      description: 'Description',
      price: 100,
      quantity: 10,
    }),
  ),
};

describe('OrdersService', () => {
  let service: OrdersService;
  let repository: Repository<Order>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        {
          provide: getRepositoryToken(Order),
          useClass: Repository,
        },
        {
          provide: 'PRODUCT_SERVICE',
          useValue: productServiceMock,
        },
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
    repository = module.get<Repository<Order>>(getRepositoryToken(Order));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an order', async () => {
    const createOrderDto = new CreateOrderRequest();
    createOrderDto.setCustomername('Customer 1');
    createOrderDto.setProductidsList([1]);
    createOrderDto.setQuantitiesList([1]);

    jest.spyOn(repository, 'create').mockReturnValue(createOrderDto as any);
    jest.spyOn(repository, 'save').mockResolvedValue(createOrderDto as any);

    const result: OrderResponse = await service.create(createOrderDto);

    expect(result.setSuccess).toHaveBeenCalledWith(true);
    expect(result.setMessage).toHaveBeenCalledWith(
      'Order created successfully',
    );
  });

  it('should find all orders', async () => {
    const order = new Order();
    order.id = 1;
    order.customerName = 'Customer 1';
    order.productIds = [1];
    order.quantities = [1];

    jest.spyOn(repository, 'find').mockResolvedValue([order]);

    const result: FindAllResponse = await service.findAll();

    expect(result.setOrdersList).toHaveBeenCalled();
  });
});
