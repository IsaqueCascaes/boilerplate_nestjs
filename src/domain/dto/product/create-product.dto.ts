import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Wireless Noise-Cancelling Headphones' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example:
      'Over-ear Bluetooth headphones with active noise cancellation and 30-hour battery life',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 129.99 })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({ example: '1adce52f-b78d-4899-a66c-f05bcbdc88b9' })
  @IsNotEmpty()
  @IsString()
  companyId: string;
}
