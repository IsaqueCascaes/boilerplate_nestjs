import { Product, Company } from '@prisma/client';
import { UniqueEntityID } from 'src/domain/core/unique-entity-id';
import { ProductEntity } from 'src/domain/entity/product/product.entity';

type ProductWithCompany = Product & {
  company?: Company | null;
};

export class ProductMapper {
  static toDomain(raw: ProductWithCompany): ProductEntity {
    return ProductEntity.create(
      {
        name: raw.name,
        description: raw.description,
        price: raw.price,
        companyId: raw.companyId,
        companyName: raw.company?.name,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    );
  }

  static toPersistence(entity: ProductEntity): Product {
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
