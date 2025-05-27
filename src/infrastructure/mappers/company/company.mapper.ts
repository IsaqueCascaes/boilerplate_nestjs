import { Company, Responsible } from '@prisma/client';
import { UniqueEntityID } from 'src/domain/core/unique-entity-id';
import { CompanyEntity } from 'src/domain/entity/company/company.entity';

type CompanyWithResponsible = Company & {
  responsible?: Responsible | null;
};

export class CompanyMapper {
  static toDomain(raw: CompanyWithResponsible): CompanyEntity {
    return CompanyEntity.create(
      {
        name: raw.name,
        cnpj: raw.cnpj,
        responsibleId: raw.responsibleId ?? undefined,
        responsibleName: raw.responsible?.name ?? undefined,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    );
  }

  static toPersistence(entity: CompanyEntity): Company {
    return {
      id: entity.id.toValue(),
      name: entity.name,
      cnpj: entity.cnpj,
      responsibleId: entity.responsibleId ?? null,
      createdAt: entity.createdAt ?? new Date(),
      updatedAt: entity.updatedAt ?? new Date(),
    };
  }
}
