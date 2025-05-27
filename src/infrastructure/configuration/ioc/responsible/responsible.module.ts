import { Module } from '@nestjs/common';
import { ResponsibleRepositoryProvider } from './provider/responsible-repository.provider';
import { ResponsibleService } from 'src/infrastructure/modules/responsible/service/responsible.service';
import { CreateResponsibleUseCase } from 'src/domain/use case/responsible/create-responsible.use-case';
import { ResponsibleController } from 'src/infrastructure/modules/responsible/controller/responsible.controller';
import { FindAllResponsiblesUseCase } from 'src/domain/use case/responsible/find-all-responsibles.use-case';
import { UpdateResponsibleUseCase } from 'src/domain/use case/responsible/update-responsible.use-case';

@Module({
  providers: [
    ResponsibleRepositoryProvider,
    ResponsibleService,
    CreateResponsibleUseCase,
    FindAllResponsiblesUseCase,
    UpdateResponsibleUseCase,
  ],
  exports: [ResponsibleRepositoryProvider],
  controllers: [ResponsibleController],
})
export class ResponsibleModule {}
