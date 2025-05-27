import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CompanyRepository } from 'src/application/repository/company/company.repository';
import { UpdateCompanyDto } from 'src/domain/dto/company/update-company.dto';
import { UpdateCompanyOutputDto } from 'src/infrastructure/modules/company/controller/dto/update-company-output.dto';

@Injectable()
export class UpdateCompanyUseCase {
  private readonly logger = new Logger(UpdateCompanyUseCase.name);

  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(
    id: string,
    input: UpdateCompanyDto,
  ): Promise<UpdateCompanyOutputDto> {
    const company = await this.companyRepository.findById(id);
    if (!company) {
      this.logger.warn(`Company not found: ${id}`);
      throw new NotFoundException('Company not found');
    }

    if (input.name) company.name = input.name;
    if (input.cnpj) company.cnpj = input.cnpj;

    await this.companyRepository.update(company);

    this.logger.log(`Company updated: ${id}`);
    return UpdateCompanyOutputDto.toDto(company);
  }
}
