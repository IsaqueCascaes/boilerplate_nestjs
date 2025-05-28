import { Module } from '@nestjs/common';
import { ProductRepositoryProvider } from './provider/product-repository.provider';
import { CreateProductUseCase } from 'src/domain/use case/product/create-product.use-case';
import { ProductService } from 'src/infrastructure/modules/product/service/product.service';
import { ProductController } from 'src/infrastructure/modules/product/controller/product.controller';
import { CompanyModule } from '../company/company.module';
import { UpdateProductUseCase } from 'src/domain/use case/product/update-product.use-case';

@Module({
  imports: [CompanyModule],
  providers: [
    ProductRepositoryProvider,
    CreateProductUseCase,
    ProductService,
    UpdateProductUseCase,
  ],
  exports: [ProductRepositoryProvider],
  controllers: [ProductController],
})
export class ProductModule {}
