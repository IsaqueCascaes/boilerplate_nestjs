import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ProductRepository } from 'src/application/repository/product/product.repository';
import { GetProductByIdOutputDto } from 'src/infrastructure/modules/product/controller/dto/get-product-output.dto';

@Injectable()
export class GetProductByIdUseCase {
  private readonly logger = new Logger(GetProductByIdUseCase.name);

  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: string): Promise<GetProductByIdOutputDto> {
    const product = await this.productRepository.findById(id);
    if (!product) {
      this.logger.warn(`Product not found: ${id}`);
      throw new NotFoundException('Product not found');
    }

    this.logger.log(`Product retrieved successfully: ${id}`);
    return GetProductByIdOutputDto.toDto(product);
  }
}
