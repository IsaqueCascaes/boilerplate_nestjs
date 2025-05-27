import { CompanyEntity } from 'src/domain/entity/company/company.entity';

export class DeleteCompanyOutputDto {
  id: string;
  name: string;
  responsibleId: string;
  responsibleName?: string;
  message: string;

  static toDto(entity: CompanyEntity): DeleteCompanyOutputDto {
    return {
      id: entity.id.toValue(),
      name: entity.name,
      responsibleId: entity.responsibleId,
      responsibleName: entity.responsibleName,
      message: 'Company deleted successfully!',
    };
  }
}
