import { Provider } from '@nestjs/common';
import { ResponsibleRepository } from 'src/application/repository/responsible/responsible.repository';
import { PrismaResponsibleRepository } from 'src/infrastructure/modules/responsible/repository/responsible.repository';

export const ResponsibleRepositoryProvider: Provider = {
  provide: ResponsibleRepository,
  useClass: PrismaResponsibleRepository,
};
