import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { ProductRepository } from 'src/application/repository/product/product.repository';
import { UpdateProductDto } from '../../dto/product/update-product.dto';
import { UpdateProductOutputDto } from 'src/infrastructure/modules/product/controller/dto/update-product-output.dto';

@Injectable()
export class UpdateProductUseCase {
  private readonly logger = new Logger(UpdateProductUseCase.name);

  constructor(private readonly productRepository: ProductRepository) {}

  async execute(
    id: string,
    input: UpdateProductDto,
  ): Promise<UpdateProductOutputDto> {
    const product = await this.productRepository.findById(id);
    if (!product) {
      this.logger.warn(`Product not found: ${id}`);
      throw new NotFoundException('Product not found');
    }

    if (input.name) {
      const productWithSameName =
        await this.productRepository.findByNameAndCompanyId(
          input.name,
          product.companyId,
        );

      if (productWithSameName && productWithSameName.id.toValue() !== id) {
        this.logger.warn(
          `Duplicate product name for this company: ${input.name}`,
        );
        throw new BadRequestException(
          'A product with this name already exists for this company.',
        );
      }

      product.name = input.name;
    }

    if (input.description !== undefined) {
      product.description = input.description;
    }

    if (input.price !== undefined) {
      product.price = input.price;
    }

    await this.productRepository.update(product);

    this.logger.log(`Product updated: ${id}`);
    return UpdateProductOutputDto.toDto(product);
  }
}
