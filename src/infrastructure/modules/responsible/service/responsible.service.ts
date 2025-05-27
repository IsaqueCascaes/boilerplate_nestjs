import { Injectable } from '@nestjs/common';
import { CreateResponsibleDto } from 'src/domain/dto/responsible/create-responsible.dto';
import { CreateResponsibleOutputDto } from '../controller/dto/create-responsible.dto';
import { CreateResponsibleUseCase } from 'src/domain/use case/responsible/create-responsible.use-case';
@Injectable()
export class ResponsibleService {
  constructor(private readonly createUseCase: CreateResponsibleUseCase) {}

  async create(
    input: CreateResponsibleDto,
  ): Promise<CreateResponsibleOutputDto> {
    return this.createUseCase.execute(input);
  }
}
