import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CompanyRepository } from 'src/application/repository/company/company.repository';
import { FindCompanyByIdOutputDto } from 'src/infrastructure/modules/company/controller/dto/find-company-by-id-output.dto';

@Injectable()
export class FindCompanyByIdUseCase {
  private readonly logger = new Logger(FindCompanyByIdUseCase.name);

  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(id: string): Promise<FindCompanyByIdOutputDto> {
    this.logger.log(`Searching company with id: ${id}`);

    const company = await this.companyRepository.findById(id);

    if (!company) {
      this.logger.warn(`Company not found with id: ${id}`);
      throw new NotFoundException('Company not found');
    }

    this.logger.log(`Company found: ${company.id.toValue()}`);
    return FindCompanyByIdOutputDto.toDto(company);
  }
}
