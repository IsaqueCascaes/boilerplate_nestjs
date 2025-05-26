import { Provider } from '@nestjs/common';
import { ProductRepository } from 'src/application/repository/product/product.repository';
import { PrismaProductRepository } from 'src/infrastructure/modules/product/repository/product.repository';

export const ProductRepositoryProvider: Provider = {
  provide: ProductRepository,
  useClass: PrismaProductRepository,
};
