import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ResponsibleRepository } from 'src/application/repository/responsible/responsible.repository';
import { DeleteResponsibleOutputDto } from 'src/infrastructure/modules/responsible/controller/dto/delete-responsible-output.dto';

@Injectable()
export class DeleteResponsibleUseCase {
  private readonly logger = new Logger(DeleteResponsibleUseCase.name);

  constructor(private readonly responsibleRepository: ResponsibleRepository) {}

  async execute(id: string): Promise<DeleteResponsibleOutputDto> {
    const responsible = await this.responsibleRepository.findById(id);

    if (!responsible) {
      this.logger.warn(`Responsible not found for deletion: ${id}`);
      throw new NotFoundException('Responsible not found');
    }

    await this.responsibleRepository.delete(id);

    this.logger.log(`Responsible deleted: ${id}`);
    return DeleteResponsibleOutputDto.toDto(responsible);
  }
}
