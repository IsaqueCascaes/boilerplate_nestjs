import { Injectable, Logger } from '@nestjs/common';
import { ResponsibleRepository } from 'src/application/repository/responsible/responsible.repository';
import { FindAllResponsibleDto } from 'src/domain/dto/responsible/find-all-responsibles.dto';
import { FindAllResponsibleOutputDto } from 'src/infrastructure/modules/responsible/controller/dto/find-all-responsibles.dto';
@Injectable()
export class FindAllResponsiblesUseCase {
  private readonly logger = new Logger(FindAllResponsiblesUseCase.name);

  constructor(private readonly responsibleRepository: ResponsibleRepository) {}

  async execute(
    filters: FindAllResponsibleDto = {},
  ): Promise<FindAllResponsibleOutputDto[]> {
    const { name, email, cpf } = filters;

    this.logger.log(
      `Fetching responsibles with filters: name=${name}, email=${email}, cpf=${cpf}`,
    );

    const result = await this.responsibleRepository.findAll({
      name,
      email,
      cpf,
    });

    this.logger.log(`Found ${result.length} responsible(s)`);

    return FindAllResponsibleOutputDto.toArray(result);
  }
}
