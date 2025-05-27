import { Injectable } from '@nestjs/common';
import { CreateCompanyUseCase } from 'src/domain/use case/company/create-company.use-case';
import { CreateCompanyDto } from 'src/domain/dto/company/create-company.dto';
import { CreateCompanyOutputDto } from '../controller/dto/create-company-output.dto';
import { FindAllCompaniesDto } from 'src/domain/dto/company/find-all-companies.dto';
import { FindAllCompaniesOutputDto } from '../controller/dto/find-all-companies-output.dto';
import { FindAllCompaniesUseCase } from 'src/domain/use case/company/find-all-companies.use-case';
import { FindCompanyByIdOutputDto } from '../controller/dto/find-company-by-id-output.dto';
import { FindCompanyByIdUseCase } from 'src/domain/use case/company/find-company-by-id.use-case';

@Injectable()
export class CompanyService {
  constructor(
    private readonly createCompanyUseCase: CreateCompanyUseCase,
    private readonly findAllCompaniesUseCase: FindAllCompaniesUseCase,
    private readonly findCompanyByIdUseCase: FindCompanyByIdUseCase,
  ) {}

  async create(input: CreateCompanyDto): Promise<CreateCompanyOutputDto> {
    return this.createCompanyUseCase.execute(input);
  }

  async findAll(
    filters: FindAllCompaniesDto,
  ): Promise<FindAllCompaniesOutputDto[]> {
    return this.findAllCompaniesUseCase.execute(filters);
  }

  async findById(id: string): Promise<FindCompanyByIdOutputDto> {
    return this.findCompanyByIdUseCase.execute(id);
  }
}
