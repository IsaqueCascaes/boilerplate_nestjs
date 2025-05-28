import { ProductEntity } from 'src/domain/entity/product/product.entity';

export class GetProductByIdOutputDto {
  id: string;
  name: string;
  description?: string | null;
  price: number;
  companyId: string;
  createdAt?: Date;
  updatedAt?: Date;
  message: string;

  static toDto(entity: ProductEntity): GetProductByIdOutputDto {
    return {
      id: entity.id.toValue(),
      name: entity.name,
      description: entity.description,
      price: entity.price,
      companyId: entity.companyId,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      message: 'Product retrieved successfully!',
    };
  }
}
