import { Module } from '@nestjs/common';
import { ResponsibleRepositoryProvider } from './provider/responsible-repository.provider';
import { ResponsibleService } from 'src/infrastructure/modules/responsible/service/responsible.service';
import { CreateResponsibleUseCase } from 'src/domain/use case/responsible/create-responsible.use-case';
import { ResponsibleController } from 'src/infrastructure/modules/responsible/controller/responsible.controller';

@Module({
  providers: [
    ResponsibleRepositoryProvider,
    ResponsibleService,
    CreateResponsibleUseCase,
  ],
  exports: [ResponsibleRepositoryProvider],
  controllers: [ResponsibleController],
})
export class ResponsibleModule {}
