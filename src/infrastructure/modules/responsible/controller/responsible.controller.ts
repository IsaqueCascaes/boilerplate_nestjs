import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags, ApiBody, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { CreateResponsibleDto } from 'src/domain/dto/responsible/create-responsible.dto';
import { CreateResponsibleOutputDto } from './dto/create-responsible.dto';
import { ResponsibleService } from '../service/responsible.service';
import { FindAllResponsibleOutputDto } from './dto/find-all-responsibles.dto';
import { FindAllResponsibleDto } from 'src/domain/dto/responsible/find-all-responsibles.dto';
import { ApiGetAllResponsiblesResponse } from '../decorator/get-all-responsibles-response.decorator';

@ApiTags('Responsáveis')
@Controller('responsibles')
export class ResponsibleController {
  constructor(private readonly responsibleService: ResponsibleService) {}

  @Post()
  @ApiBody({ type: CreateResponsibleDto })
  async create(
    @Body() body: CreateResponsibleDto,
  ): Promise<CreateResponsibleOutputDto> {
    return this.responsibleService.create(body);
  }

  @Get()
  @ApiGetAllResponsiblesResponse()
  @ApiOperation({
    summary: 'Retrieve all responsibles',
    description:
      'Returns a list of responsibles. You can optionally filter by name, email, or CPF.',
  })
  @ApiOkResponse({ type: FindAllResponsibleOutputDto, isArray: true })
  async findAll(
    @Query() query: FindAllResponsibleDto,
  ): Promise<FindAllResponsibleOutputDto[]> {
    const result = await this.responsibleService.findAll(query);
    return result;
  }
}
