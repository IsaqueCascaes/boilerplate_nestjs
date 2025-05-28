import { ProductEntity } from 'src/domain/entity/product/product.entity';

export class DeleteProductOutputDto {
  id: string;
  name: string;
  message: string;

  static toDto(entity: ProductEntity): DeleteProductOutputDto {
    return {
      id: entity.id.toValue(),
      name: entity.name,
      message: 'Product deleted successfully!',
    };
  }
}
