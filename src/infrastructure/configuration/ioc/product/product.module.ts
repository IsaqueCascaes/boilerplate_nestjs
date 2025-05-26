import { Module } from '@nestjs/common';
import { ProductRepositoryProvider } from './provider/product-repository.provider';

@Module({
  providers: [ProductRepositoryProvider],
  exports: [ProductRepositoryProvider],
  controllers: [],
})
export class ProductModule {}
