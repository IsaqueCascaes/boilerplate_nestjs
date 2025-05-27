import { Injectable } from '@nestjs/common';
import { CreateResponsibleDto } from 'src/domain/dto/responsible/create-responsible.dto';
import { CreateResponsibleOutputDto } from '../controller/dto/create-responsible-output.dto';
import { CreateResponsibleUseCase } from 'src/domain/use case/responsible/create-responsible.use-case';
import { FindAllResponsibleDto } from 'src/domain/dto/responsible/find-all-responsibles.dto';
import { FindAllResponsibleOutputDto } from '../controller/dto/find-all-responsibles-output.dto';
import { FindAllResponsiblesUseCase } from 'src/domain/use case/responsible/find-all-responsibles.use-case';
import { UpdateResponsibleDto } from 'src/domain/dto/responsible/update-responsible.dto';
import { UpdateResponsibleOutputDto } from '../controller/dto/update-responsible-output.dto';
import { UpdateResponsibleUseCase } from 'src/domain/use case/responsible/update-responsible.use-case';
import { DeleteResponsibleOutputDto } from '../controller/dto/delete-responsible-output.dto';
import { DeleteResponsibleUseCase } from 'src/domain/use case/responsible/delete-responsible.use-case';
import { GetResponsibleByIdOutputDto } from '../controller/dto/get-responsible-by-id-output.dto';
import { GetResponsibleByIdUseCase } from 'src/domain/use case/responsible/get-responsible-by-id.use-case';
@Injectable()
export class ResponsibleService {
  constructor(
    private readonly createUseCase: CreateResponsibleUseCase,
    private readonly findAllUseCase: FindAllResponsiblesUseCase,
    private readonly updateResponsibleUseCase: UpdateResponsibleUseCase,
    private readonly deleteResponsibleUseCase: DeleteResponsibleUseCase,
    private readonly getResponsibleByIdUseCase: GetResponsibleByIdUseCase,
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

  async update(
    id: string,
    input: UpdateResponsibleDto,
  ): Promise<UpdateResponsibleOutputDto> {
    return this.updateResponsibleUseCase.execute(id, input);
  }

  async delete(id: string): Promise<DeleteResponsibleOutputDto> {
    return this.deleteResponsibleUseCase.execute(id);
  }

  async findById(id: string): Promise<GetResponsibleByIdOutputDto> {
    return this.getResponsibleByIdUseCase.execute(id);
  }
}
