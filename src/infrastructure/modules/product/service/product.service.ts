import { Injectable } from '@nestjs/common';
import { CreateProductDto } from 'src/domain/dto/product/create-product.dto';
import { CreateProductUseCase } from 'src/domain/use case/product/create-product.use-case';

@Injectable()
export class ProductService {
  constructor(private readonly createProductUseCase: CreateProductUseCase) {}

  async create(input: CreateProductDto) {
    return this.createProductUseCase.execute(input);
  }
}
