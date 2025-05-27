import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ResponsibleRepository } from 'src/application/repository/responsible/responsible.repository';
import { UpdateResponsibleDto } from 'src/domain/dto/responsible/update-responsible.dto';
import { UpdateResponsibleOutputDto } from 'src/infrastructure/modules/responsible/controller/dto/update-responsible-output.dto';
import { ResponsibleEntity } from 'src/domain/entity/responsible/responsible.entity';
import { UniqueEntityID } from 'src/domain/core/unique-entity-id';

@Injectable()
export class UpdateResponsibleUseCase {
  private readonly logger = new Logger(UpdateResponsibleUseCase.name);

  constructor(private readonly responsibleRepository: ResponsibleRepository) {}

  async execute(
    id: string,
    input: UpdateResponsibleDto,
  ): Promise<UpdateResponsibleOutputDto> {
    const responsible = await this.responsibleRepository.findById(id);

    if (!responsible) {
      this.logger.warn(`Responsible not found: ${id}`);
      throw new NotFoundException('Responsible not found');
    }

    const updated = ResponsibleEntity.create(
      {
        name: input.name ?? responsible.name,
        email: input.email ?? responsible.email,
        phone: input.phone ?? responsible.phone,
        cpf: input.cpf ?? responsible.cpf,
        createdAt: responsible.createdAt,
        updatedAt: new Date(),
      },
      new UniqueEntityID(id),
    );

    await this.responsibleRepository.update(updated);

    this.logger.log(`Responsible updated: ${id}`);

    return UpdateResponsibleOutputDto.toDto(updated);
  }
}
