import { Product as PrismaProduct } from '@prisma/client';
import { UniqueEntityID } from 'src/domain/core/unique-entity-id';
import { ProductEntity } from 'src/domain/entity/product/product.entity';

export class ProductMapper {
  static toDomain(raw: PrismaProduct): ProductEntity {
    return ProductEntity.create(
      {
        name: raw.name,
        description: raw.description,
        price: raw.price,
        companyId: raw.companyId,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    );
  }

  static toPersistence(entity: ProductEntity): PrismaProduct {
    return {
      id: entity.id.toValue(),
      name: entity.name,
      description: entity.description ?? null,
      price: entity.price,
      companyId: entity.companyId,
      createdAt: entity.createdAt ?? new Date(),
      updatedAt: entity.updatedAt ?? new Date(),
    };
  }
}
