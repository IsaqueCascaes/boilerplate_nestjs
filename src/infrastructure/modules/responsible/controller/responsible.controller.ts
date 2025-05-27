import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { CreateResponsibleDto } from 'src/domain/dto/responsible/create-responsible.dto';
import { CreateResponsibleOutputDto } from './dto/create-responsible.dto';
import { ResponsibleService } from '../service/responsible.service';

@ApiTags('Responsáveis')
@Controller('responsibles')
export class ResponsibleController {
  constructor(private readonly responsibleService: ResponsibleService) {}

  @Post()
  @ApiBody({ type: CreateResponsibleDto })
  async create(
    @Body() body: CreateResponsibleDto,
  ): Promise<CreateResponsibleOutputDto> {
    return this.service.create(body);
  }
}
