import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CompanyService } from '../service/company.service';
import { CreateCompanyDto } from 'src/domain/dto/company/create-company.dto';
import { CreateCompanyOutputDto } from './dto/create-company-output.dto';
import { ApiCreateCompanyResponse } from '../decorator/create-company-response.decorator';

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
}
