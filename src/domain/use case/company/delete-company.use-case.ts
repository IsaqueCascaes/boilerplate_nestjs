import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CompanyRepository } from 'src/application/repository/company/company.repository';
import { DeleteCompanyOutputDto } from 'src/infrastructure/modules/company/controller/dto/delete-company-output.dto';

@Injectable()
export class DeleteCompanyUseCase {
  private readonly logger = new Logger(DeleteCompanyUseCase.name);

  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(id: string): Promise<DeleteCompanyOutputDto> {
    const company = await this.companyRepository.delete(id);

    if (!company) {
      this.logger.warn(`Company with ID ${id} not found`);
      throw new NotFoundException('Company not found');
    }

    this.logger.log(`Company deleted: ${company.name} (${id})`);

    return DeleteCompanyOutputDto.toDto(company);
  }
}
