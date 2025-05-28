import { ProductEntity } from 'src/domain/entity/product/product.entity';

export class FindAllProductsOutputDto {
  id: string;
  name: string;
  description?: string | null;
  price: number;
  companyId: string;
  companyName?: string;
  createdAt?: Date;
  updatedAt?: Date;

  static toDto(entity: ProductEntity): FindAllProductsOutputDto {
    return {
      id: entity.id.toValue(),
      name: entity.name,
      description: entity.description,
      price: entity.price,
      companyId: entity.companyId,
      companyName: entity.companyName,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }

  static toArray(entities: ProductEntity[]): FindAllProductsOutputDto[] {
    return entities.map((entity) => this.toDto(entity));
  }
}
