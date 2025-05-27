import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CompanyRepository } from 'src/application/repository/company/company.repository';
import { ResponsibleRepository } from 'src/application/repository/responsible/responsible.repository';
import { CreateCompanyDto } from 'src/domain/dto/company/create-company.dto';
import { CompanyEntity } from 'src/domain/entity/company/company.entity';
import { CreateCompanyOutputDto } from 'src/infrastructure/modules/company/controller/dto/create-company-output.dto';

@Injectable()
export class CreateCompanyUseCase {
  private readonly logger = new Logger(CreateCompanyUseCase.name);

  constructor(
    private readonly companyRepository: CompanyRepository,
    private readonly responsibleRepository: ResponsibleRepository,
  ) {}

  async execute(input: CreateCompanyDto): Promise<CreateCompanyOutputDto> {
    const responsible = await this.responsibleRepository.findById(
      input.responsibleId,
    );

    if (!responsible) {
      this.logger.warn(`Responsible not found: ${input.responsibleId}`);
      throw new NotFoundException(
        'Responsible not found, verify if it is valid or exists',
      );
    }

    const company = CompanyEntity.create({
      name: input.name,
      cnpj: input.cnpj,
      responsibleId: input.responsibleId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.companyRepository.create(company);

    this.logger.log(`Company created: ${company.id.toValue()}`);
    return CreateCompanyOutputDto.toDto(company);
  }
}
