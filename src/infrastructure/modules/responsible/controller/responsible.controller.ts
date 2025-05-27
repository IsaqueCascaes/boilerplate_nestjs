import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { CreateResponsibleDto } from 'src/domain/dto/responsible/create-responsible.dto';
import { CreateResponsibleOutputDto } from './dto/create-responsible.dto';
import { ResponsibleService } from '../service/responsible.service';
import { FindAllResponsibleOutputDto } from './dto/find-all-responsibles.dto';
import { FindAllResponsibleDto } from 'src/domain/dto/responsible/find-all-responsibles.dto';
import { ApiGetAllResponsiblesResponse } from '../decorator/get-all-responsibles-response.decorator';
import { UpdateResponsibleOutputDto } from './dto/update-responsible.dto';
import { UpdateResponsibleDto } from 'src/domain/dto/responsible/update-responsible.dto';
import { ApiUpdateResponsibleResponse } from '../decorator/update-responsible-response.decorator';
import { DeleteResponsibleOutputDto } from './dto/delete-responsible.dto';
import { ApiDeleteResponsibleResponse } from '../decorator/delete-responsible-response.decorator';

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
  @ApiOkResponse({ type: FindAllResponsibleOutputDto, isArray: true })
  async findAll(
    @Query() query: FindAllResponsibleDto,
  ): Promise<FindAllResponsibleOutputDto[]> {
    const result = await this.responsibleService.findAll(query);
    return result;
  }

  @Put(':id')
  @ApiUpdateResponsibleResponse()
  @ApiOkResponse({ type: UpdateResponsibleOutputDto })
  async update(
    @Param('id') id: string,
    @Body() body: UpdateResponsibleDto,
  ): Promise<UpdateResponsibleOutputDto> {
    const result = await this.responsibleService.update(id, body);
    return result;
  }

  @Delete(':id')
  @ApiDeleteResponsibleResponse()
  async delete(@Param('id') id: string): Promise<DeleteResponsibleOutputDto> {
    const result = await this.responsibleService.delete(id);
    return result;
  }
}
