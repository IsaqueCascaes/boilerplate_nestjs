import { Module } from '@nestjs/common';
import { CompanyRepositoryProvider } from './provider/company-repository.provider';
import { CreateCompanyUseCase } from 'src/domain/use case/company/create-company.use-case';
import { CompanyService } from 'src/infrastructure/modules/company/service/company.service';
import { CompanyController } from 'src/infrastructure/modules/company/controller/company.controller';
import { ResponsibleModule } from '../responsible/responsible.module';
import { FindAllCompaniesUseCase } from 'src/domain/use case/company/find-all-companies.use-case';
import { FindCompanyByIdUseCase } from 'src/domain/use case/company/find-company-by-id.use-case';
import { UpdateCompanyUseCase } from 'src/domain/use case/company/update-company.use-case';
import { DeleteCompanyUseCase } from 'src/domain/use case/company/delete-company.use-case';

@Module({
  imports: [ResponsibleModule],
  providers: [
    CompanyRepositoryProvider,
    CreateCompanyUseCase,
    CompanyService,
    FindAllCompaniesUseCase,
    FindCompanyByIdUseCase,
    UpdateCompanyUseCase,
    DeleteCompanyUseCase,
  ],
  exports: [CompanyRepositoryProvider],
  controllers: [CompanyController],
})
export class CompanyModule {}
