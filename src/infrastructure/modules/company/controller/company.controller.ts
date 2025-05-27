import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CompanyService } from '../service/company.service';
import { CreateCompanyDto } from 'src/domain/dto/company/create-company.dto';
import { CreateCompanyOutputDto } from './dto/create-company-output.dto';
import { ApiCreateCompanyResponse } from '../decorator/create-company-response.decorator';
import { FindAllCompaniesDto } from 'src/domain/dto/company/find-all-companies.dto';
import { FindAllCompaniesOutputDto } from './dto/find-all-companies-output.dto';
import { ApiGetAllCompaniesResponse } from '../decorator/get-all-companies- response.decorator';
import { FindCompanyByIdOutputDto } from './dto/find-company-by-id-output.dto';
import { ApiGetCompanyByIdResponse } from '../decorator/get-company-by-id-response.decorator';

@ApiTags('Companies')
@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  @ApiCreateCompanyResponse()
  async create(
    @Body() body: CreateCompanyDto,
  ): Promise<CreateCompanyOutputDto> {
    const result = await this.companyService.create(body);
    return result;
  }

  @Get()
  @ApiGetAllCompaniesResponse()
  async findAll(
    @Query() query: FindAllCompaniesDto,
  ): Promise<FindAllCompaniesOutputDto[]> {
    const result = await this.companyService.findAll(query);
    return result;
  }

  @Get(':id')
  @ApiGetCompanyByIdResponse()
  async findById(@Param('id') id: string): Promise<FindCompanyByIdOutputDto> {
    const result = await this.companyService.findById(id);
    return result;
  }
}
