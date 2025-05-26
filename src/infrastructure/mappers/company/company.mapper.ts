import { Company as PrismaCompany } from '@prisma/client';
import { UniqueEntityID } from 'src/domain/core/unique-entity-id';
import { CompanyEntity } from 'src/domain/entity/company/company.entity';

export class CompanyMapper {
  static toDomain(raw: PrismaCompany): CompanyEntity {
    return CompanyEntity.create(
      {
        name: raw.name,
        cnpj: raw.cnpj,
        responsibleId: raw.responsibleId ?? undefined,
      },
      new UniqueEntityID(raw.id),
    );
  }

  static toPersistence(entity: CompanyEntity): PrismaCompany {
    return {
      id: entity.id.toValue(),
      name: entity.name,
      cnpj: entity.cnpj,
      responsibleId: entity.responsibleId ?? null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
