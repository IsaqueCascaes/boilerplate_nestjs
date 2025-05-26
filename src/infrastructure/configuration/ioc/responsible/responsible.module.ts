import { Module } from '@nestjs/common';
import { ResponsibleRepositoryProvider } from './provider/responsible-repository.provider';

@Module({
  providers: [ResponsibleRepositoryProvider],
  exports: [ResponsibleRepositoryProvider],
  controllers: [],
})
export class ResponsibleModule {}
