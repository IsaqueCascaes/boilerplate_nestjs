import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { ApiKeyGuard } from '../api-key.guard';

export function UseApiKeyAuth() {
  return applyDecorators(
    UseGuards(ApiKeyGuard),
    ApiHeader({
      name: 'x-api-key',
      description: 'key of autentication api',
      required: true,
    }),
  );
}
