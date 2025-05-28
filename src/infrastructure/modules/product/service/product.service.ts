import { Injectable } from '@nestjs/common';
import { CreateProductDto } from 'src/domain/dto/product/create-product.dto';
import { UpdateProductDto } from 'src/domain/dto/product/update-product.dto';
import { CreateProductUseCase } from 'src/domain/use case/product/create-product.use-case';
import { UpdateProductUseCase } from 'src/domain/use case/product/update-product.use-case';

@Injectable()
export class ProductService {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly updateProductUseCase: UpdateProductUseCase,
  ) {}

  async create(input: CreateProductDto) {
    return this.createProductUseCase.execute(input);
  }

  async updateProduct(id: string, input: UpdateProductDto) {
    return this.updateProductUseCase.execute(id, input);
  }
}
