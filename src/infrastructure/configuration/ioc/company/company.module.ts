import { Module } from '@nestjs/common';
import { CompanyRepositoryProvider } from './provider/company-repository.provider';
import { CreateCompanyUseCase } from 'src/domain/use case/company/create-company.use-case';
import { CompanyService } from 'src/infrastructure/modules/company/service/company.service';
import { CompanyController } from 'src/infrastructure/modules/company/controller/company.controller';
import { ResponsibleModule } from '../responsible/responsible.module';

@Module({
  imports: [ResponsibleModule],
  providers: [CompanyRepositoryProvider, CreateCompanyUseCase, CompanyService],
  exports: [CompanyRepositoryProvider],
  controllers: [CompanyController],
})
export class CompanyModule {}
