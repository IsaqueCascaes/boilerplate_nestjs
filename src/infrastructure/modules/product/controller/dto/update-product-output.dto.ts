import { ProductEntity } from 'src/domain/entity/product/product.entity';

export class UpdateProductOutputDto {
  id: string;
  name: string;
  description?: string | null;
  price: number;
  companyId: string;
  createdAt?: Date;
  updatedAt?: Date;
  message: string;

  static toDto(entity: ProductEntity): UpdateProductOutputDto {
    return {
      id: entity.id.toValue(),
      name: entity.name,
      description: entity.description,
      price: entity.price,
      companyId: entity.companyId,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      message: 'Product updated successfully!',
    };
  }
}
