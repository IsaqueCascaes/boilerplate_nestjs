import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { swaggerConfig } from './infrastructure/configuration/swagger/swagger.options';
import { AppModule } from './infrastructure/configuration/ioc/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const configService = app.get(ConfigService);
  const port = configService.get<number>('BOILERPLATE_PORT') || 3000;

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  const logger = new Logger('Bootstrap');
  await app.listen(port);
  logger.log(`App running on http://localhost:${port}`);
  logger.log(`Swagger running on http://localhost:${port}/api`);
}
bootstrap();
