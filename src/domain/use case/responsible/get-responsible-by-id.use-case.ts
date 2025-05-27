import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ResponsibleRepository } from 'src/application/repository/responsible/responsible.repository';
import { GetResponsibleByIdOutputDto } from 'src/infrastructure/modules/responsible/controller/dto/get-responsible-by-id-output.dto';

@Injectable()
export class GetResponsibleByIdUseCase {
  private readonly logger = new Logger(GetResponsibleByIdUseCase.name);

  constructor(private readonly responsibleRepository: ResponsibleRepository) {}

  async execute(id: string): Promise<GetResponsibleByIdOutputDto> {
    const responsible = await this.responsibleRepository.findById(id);

    if (!responsible) {
      this.logger.warn(`Responsible not found: ${id}`);
      throw new NotFoundException('Responsible not found');
    }

    this.logger.log(`Responsible found: ${id}`);
    return GetResponsibleByIdOutputDto.toDto(responsible);
  }
}
