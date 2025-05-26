import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Boilerplate')
  .setDescription('Api documentation of products and companies')
  .setVersion('1.0')
  .build();
