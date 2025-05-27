import { CompanyEntity } from 'src/domain/entity/company/company.entity';

export class CreateCompanyOutputDto {
  id: string;
  name: string;
  cnpj: string;
  responsibleId: string;
  message: string;

  static toDto(entity: CompanyEntity): CreateCompanyOutputDto {
    return {
      id: entity.id.toValue(),
      name: entity.name,
      cnpj: entity.cnpj,
      responsibleId: entity.responsibleId,
      message: 'Company created successfully!',
    };
  }
}
