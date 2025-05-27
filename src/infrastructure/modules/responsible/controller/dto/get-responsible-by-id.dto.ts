import { ResponsibleEntity } from 'src/domain/entity/responsible/responsible.entity';

export class GetResponsibleByIdOutputDto {
  id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  message: string;

  static toDto(entity: ResponsibleEntity): GetResponsibleByIdOutputDto {
    return {
      id: entity.id.toValue(),
      name: entity.name,
      email: entity.email,
      phone: entity.phone,
      cpf: entity.cpf,
      message: 'Responsible retrieved successfully!',
    };
  }
}
