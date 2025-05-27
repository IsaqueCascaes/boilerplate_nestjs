import { ResponsibleEntity } from 'src/domain/entity/responsible/responsible.entity';

export class DeleteResponsibleOutputDto {
  id: string;
  name: string;
  message: string;

  static toDto(entity: ResponsibleEntity): DeleteResponsibleOutputDto {
    return {
      id: entity.id.toValue(),
      name: entity.name,
      message: 'Responsible deleted successfully!',
    };
  }
}
