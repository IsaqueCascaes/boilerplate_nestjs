import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { ResponsibleRepository } from 'src/application/repository/responsible/responsible.repository';
import { CreateResponsibleDto } from 'src/domain/dto/responsible/create-responsible.dto';
import { ResponsibleEntity } from 'src/domain/entity/responsible/responsible.entity';
import { CreateResponsibleOutputDto } from 'src/infrastructure/modules/responsible/controller/dto/create-responsible.dto';

@Injectable()
export class CreateResponsibleUseCase {
  private readonly logger = new Logger(CreateResponsibleUseCase.name);

  constructor(private readonly responsibleRepository: ResponsibleRepository) {}

  async execute(
    input: CreateResponsibleDto,
  ): Promise<CreateResponsibleOutputDto> {
    const responsibleAlreadyExistsByCpf =
      await this.responsibleRepository.findByCpf(input.cpf);
    if (responsibleAlreadyExistsByCpf) {
      this.logger.warn(`Duplicate CPF detected: ${input.cpf}`);
      throw new BadRequestException(
        'A responsible with this CPF already exists.',
      );
    }

    const responsibleAlreadyExistsByEmail =
      await this.responsibleRepository.findByEmail(input.email);
    if (responsibleAlreadyExistsByEmail) {
      this.logger.warn(`Duplicate email detected: ${input.email}`);
      throw new BadRequestException(
        'A responsible with this email already exists.',
      );
    }

    const responsible = ResponsibleEntity.create({
      name: input.name,
      email: input.email,
      phone: input.phone,
      cpf: input.cpf,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.responsibleRepository.create(responsible);

    this.logger.log(
      `Responsible successfully created with ID: ${responsible.id.toValue()}`,
    );

    return CreateResponsibleOutputDto.toDto(responsible);
  }
}
