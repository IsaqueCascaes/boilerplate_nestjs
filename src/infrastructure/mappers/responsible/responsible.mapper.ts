import { Responsible as PrismaResponsible } from '@prisma/client';
import { UniqueEntityID } from 'src/domain/core/unique-entity-id';
import { ResponsibleEntity } from 'src/domain/entity/responsible/responsible.entity';

export class ResponsibleMapper {
  static toDomain(raw: PrismaResponsible): ResponsibleEntity {
    return ResponsibleEntity.create(
      {
        name: raw.name,
        email: raw.email,
        phone: raw.phone,
        cpf: raw.cpf,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    );
  }

  static toPersistence(entity: ResponsibleEntity): PrismaResponsible {
    return {
      id: entity.id.toValue(),
      name: entity.name,
      email: entity.email,
      phone: entity.phone,
      cpf: entity.cpf,
      createdAt: entity.createdAt ?? new Date(),
      updatedAt: entity.updatedAt ?? new Date(),
    };
  }
}
