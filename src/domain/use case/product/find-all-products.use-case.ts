import { Injectable, Logger } from '@nestjs/common';
import { ProductRepository } from 'src/application/repository/product/product.repository';
import { FindAllProductsDto } from '../../dto/product/find-all-products.dto';
import { FindAllProductsOutputDto } from 'src/infrastructure/modules/product/controller/dto/find-all-products-output.dto';

@Injectable()
export class FindAllProductsUseCase {
  private readonly logger = new Logger(FindAllProductsUseCase.name);

  constructor(private readonly productRepository: ProductRepository) {}

  async execute(
    filters: FindAllProductsDto = {},
  ): Promise<FindAllProductsOutputDto[]> {
    const { name, companyName } = filters;

    this.logger.log(
      `Searching products with filters: name=${name}, companyName=${companyName}`,
    );

    const products = await this.productRepository.findByFilters(filters);

    this.logger.log(`Found ${products.length} product(s)`);

    return FindAllProductsOutputDto.toArray(products);
  }
}
