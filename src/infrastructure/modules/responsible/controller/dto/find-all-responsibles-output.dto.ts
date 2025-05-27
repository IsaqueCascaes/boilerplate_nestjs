import { ResponsibleEntity } from 'src/domain/entity/responsible/responsible.entity';

export class FindAllResponsibleOutputDto {
  id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  createdAt: Date;
  updatedAt: Date;

  static toDto(entity: ResponsibleEntity): FindAllResponsibleOutputDto {
    return {
      id: entity.id.toValue(),
      name: entity.name,
      email: entity.email,
      phone: entity.phone,
      cpf: entity.cpf,
      createdAt: entity.createdAt!,
      updatedAt: entity.updatedAt!,
    };
  }

  static toArray(entities: ResponsibleEntity[]): FindAllResponsibleOutputDto[] {
    return entities.map((entity) => this.toDto(entity));
  }
}
