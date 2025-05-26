import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { CompanyModule } from './company/company.module';
import { ResponsibleModule } from './responsible/responsible.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.local',
    }),
    ProductModule,
    CompanyModule,
    ResponsibleModule,
  ],
})
export class AppModule {}
