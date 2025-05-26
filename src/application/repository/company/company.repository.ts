import { CompanyEntity } from 'src/domain/entity/company/company.entity';

export abstract class CompanyRepository {
  abstract findAll(): Promise<CompanyEntity[]>;
  abstract findById(id: string): Promise<CompanyEntity | null>;
  abstract create(company: CompanyEntity): Promise<void>;
  abstract update(company: CompanyEntity): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
