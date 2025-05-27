import { CompanyEntity } from 'src/domain/entity/company/company.entity';

export class FindAllCompaniesOutputDto {
  id: string;
  name: string;
  cnpj: string;
  responsibleId: string;
  responsibleName?: string;

  static toDto(entity: CompanyEntity): FindAllCompaniesOutputDto {
    return {
      id: entity.id.toValue(),
      name: entity.name,
      cnpj: entity.cnpj,
      responsibleId: entity.responsibleId,
      responsibleName: entity.responsibleName,
    };
  }

  static toArray(entities: CompanyEntity[]): FindAllCompaniesOutputDto[] {
    return entities.map((entity) => this.toDto(entity));
  }
}
