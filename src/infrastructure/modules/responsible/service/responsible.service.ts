import { Injectable } from '@nestjs/common';
import { CreateResponsibleDto } from 'src/domain/dto/responsible/create-responsible.dto';
import { CreateResponsibleOutputDto } from '../controller/dto/create-responsible.dto';
import { CreateResponsibleUseCase } from 'src/domain/use case/responsible/create-responsible.use-case';
import { FindAllResponsibleDto } from 'src/domain/dto/responsible/find-all-responsibles.dto';
import { FindAllResponsibleOutputDto } from '../controller/dto/find-all-responsibles.dto';
import { FindAllResponsiblesUseCase } from 'src/domain/use case/responsible/find-all-responsibles.use-case';
@Injectable()
export class ResponsibleService {
  constructor(
    private readonly createUseCase: CreateResponsibleUseCase,
    private readonly findAllUseCase: FindAllResponsiblesUseCase,
  ) {}

  async create(
    input: CreateResponsibleDto,
  ): Promise<CreateResponsibleOutputDto> {
    return this.createUseCase.execute(input);
  }

  async findAll(
    filters: FindAllResponsibleDto,
  ): Promise<FindAllResponsibleOutputDto[]> {
    return this.findAllUseCase.execute(filters);
  }
}
