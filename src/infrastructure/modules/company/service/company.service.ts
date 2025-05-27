import { Injectable } from '@nestjs/common';
import { CreateCompanyUseCase } from 'src/domain/use case/company/create-company.use-case';
import { CreateCompanyDto } from 'src/domain/dto/company/create-company.dto';
import { CreateCompanyOutputDto } from '../controller/dto/create-company-output.dto';

@Injectable()
export class CompanyService {
  constructor(private readonly createCompanyUseCase: CreateCompanyUseCase) {}

  async create(input: CreateCompanyDto): Promise<CreateCompanyOutputDto> {
    return this.createCompanyUseCase.execute(input);
  }
}
