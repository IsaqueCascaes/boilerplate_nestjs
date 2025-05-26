import { Module } from '@nestjs/common';
import { CompanyRepositoryProvider } from './provider/company-repository.provider';

@Module({
  providers: [CompanyRepositoryProvider],
  exports: [CompanyRepositoryProvider],
  controllers: [],
})
export class CompanyModule {}
