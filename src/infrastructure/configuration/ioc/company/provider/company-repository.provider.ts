import { Provider } from '@nestjs/common';
import { CompanyRepository } from 'src/application/repository/company/company.repository';
import { PrismaCompanyRepository } from 'src/infrastructure/modules/company/repository/company.repository';

export const CompanyRepositoryProvider: Provider = {
  provide: CompanyRepository,
  useClass: PrismaCompanyRepository,
};
