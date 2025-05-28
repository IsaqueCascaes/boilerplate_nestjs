import { Injectable, Logger } from '@nestjs/common';
import { ProductRepository } from 'src/application/repository/product/product.repository';
import { GetAllProductsOutputDto } from 'src/infrastructure/modules/product/controller/dto/get-all-products-outpudt.dto';

@Injectable()
export class GetAllProductsUseCase {
  private readonly logger = new Logger(GetAllProductsUseCase.name);

  constructor(private readonly productRepository: ProductRepository) {}

  async execute(): Promise<GetAllProductsOutputDto[]> {
    this.logger.log('Fetching all products');
    const products = await this.productRepository.findAll();

    return products.map((product) => GetAllProductsOutputDto.toDto(product));
  }
}
