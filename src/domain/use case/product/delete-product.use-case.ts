import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ProductRepository } from 'src/application/repository/product/product.repository';
import { DeleteProductOutputDto } from 'src/infrastructure/modules/product/controller/dto/delete-product-output.dto';

@Injectable()
export class DeleteProductUseCase {
  private readonly logger = new Logger(DeleteProductUseCase.name);

  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: string): Promise<DeleteProductOutputDto> {
    const product = await this.productRepository.findById(id);
    if (!product) {
      this.logger.warn(`Product not found: ${id}`);
      throw new NotFoundException('Product not found');
    }

    await this.productRepository.delete(id);

    this.logger.log(`Product deleted: ${id}`);
    return DeleteProductOutputDto.toDto(product);
  }
}
