import { CompanyEntity } from 'src/domain/entity/company/company.entity';

export class FindCompanyByIdOutputDto {
  id: string;
  name: string;
  cnpj: string;
  responsibleId: string;
  responsibleName?: string;
  message: string;

  static toDto(entity: CompanyEntity): FindCompanyByIdOutputDto {
    return {
      id: entity.id.toValue(),
      name: entity.name,
      cnpj: entity.cnpj,
      responsibleId: entity.responsibleId,
      responsibleName: entity.responsibleName,
      message: 'Company retrieved successfully!',
    };
  }
}
