import {
  IsNotEmpty,
  IsArray,
  ArrayNotEmpty,
  ArrayMinSize,
} from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  customerName: string;

  @IsArray()
  @ArrayNotEmpty()
  productIds: number[];

  @IsArray()
  @ArrayMinSize(1)
  quantities: number[];
}
