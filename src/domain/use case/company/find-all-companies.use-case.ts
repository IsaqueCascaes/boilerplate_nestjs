import { Injectable, Logger } from '@nestjs/common';
import { CompanyRepository } from 'src/application/repository/company/company.repository';
import { FindAllCompaniesDto } from 'src/domain/dto/company/find-all-companies.dto';
import { FindAllCompaniesOutputDto } from 'src/infrastructure/modules/company/controller/dto/find-all-companies-output.dto';

@Injectable()
export class FindAllCompaniesUseCase {
  private readonly logger = new Logger(FindAllCompaniesUseCase.name);

  constructor(private readonly companyRepository: CompanyRepository) {}
  s;
  async execute(
    filters: FindAllCompaniesDto = {},
  ): Promise<FindAllCompaniesOutputDto[]> {
    const { name, cnpj, responsibleName } = filters;

    this.logger.log(
      `Fetching companies with filters: name=${name}, cnpj=${cnpj}, responsibleName=${responsibleName}`,
    );

    const companies = await this.companyRepository.findAll(filters);

    this.logger.log(`Found ${companies.length} company(ies)`);

    return FindAllCompaniesOutputDto.toArray(companies);
  }
}
