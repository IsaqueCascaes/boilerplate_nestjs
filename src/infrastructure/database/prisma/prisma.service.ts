import {
  INestApplication,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super();
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit' as never, () => {
      app.close().catch((err) => {
        console.error('Error during shutdown:', err);
      });
    });
  }

  async transaction<T>(fn: () => Promise<T>): Promise<T> {
    return this.$transaction(fn);
  }
}
