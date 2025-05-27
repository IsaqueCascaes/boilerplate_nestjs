import { ResponsibleEntity } from 'src/domain/entity/responsible/responsible.entity';

export class CreateResponsibleOutputDto {
  id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  message: string;

  static toDto(entity: ResponsibleEntity): CreateResponsibleOutputDto {
    return {
      id: entity.id.toValue(),
      name: entity.name,
      email: entity.email,
      phone: entity.phone,
      cpf: entity.cpf,
      message: 'Responsável criado com sucesso!',
    };
  }
}
