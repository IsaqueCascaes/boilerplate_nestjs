import { ProductEntity } from 'src/domain/entity/product/product.entity';

export abstract class ProductRepository {
  abstract findAll(): Promise<ProductEntity[]>;
  abstract findById(id: string): Promise<ProductEntity | null>;
  abstract create(product: ProductEntity): Promise<void>;
  abstract update(product: ProductEntity): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract findByNameAndCompanyId(
    name: string,
    companyId: string,
  ): Promise<ProductEntity | null>;
}
