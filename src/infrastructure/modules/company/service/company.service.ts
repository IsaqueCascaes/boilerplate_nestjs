import { Injectable } from '@nestjs/common';
import { CreateCompanyUseCase } from 'src/domain/use case/company/create-company.use-case';
import { CreateCompanyDto } from 'src/domain/dto/company/create-company.dto';
import { CreateCompanyOutputDto } from '../controller/dto/create-company-output.dto';
import { FindAllCompaniesDto } from 'src/domain/dto/company/find-all-companies.dto';
import { FindAllCompaniesOutputDto } from '../controller/dto/find-all-companies-output.dto';
import { FindAllCompaniesUseCase } from 'src/domain/use case/company/find-all-companies.use-case';
import { FindCompanyByIdOutputDto } from '../controller/dto/find-company-by-id-output.dto';
import { FindCompanyByIdUseCase } from 'src/domain/use case/company/find-company-by-id.use-case';
import { UpdateCompanyDto } from 'src/domain/dto/company/update-company.dto';
import { UpdateCompanyUseCase } from 'src/domain/use case/company/update-company.use-case';
import { DeleteCompanyOutputDto } from '../controller/dto/delete-company-output.dto';
import { DeleteCompanyUseCase } from 'src/domain/use case/company/delete-company.use-case';

@Injectable()
export class CompanyService {
  constructor(
    private readonly createCompanyUseCase: CreateCompanyUseCase,
    private readonly findAllCompaniesUseCase: FindAllCompaniesUseCase,
    private readonly findCompanyByIdUseCase: FindCompanyByIdUseCase,
    private readonly updateCompanyUseCase: UpdateCompanyUseCase,
    private readonly deleteCompanyUseCase: DeleteCompanyUseCase,
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

  async update(id: string, input: UpdateCompanyDto) {
    return this.updateCompanyUseCase.execute(id, input);
  }

  async delete(id: string): Promise<DeleteCompanyOutputDto> {
    return this.deleteCompanyUseCase.execute(id);
  }
}
