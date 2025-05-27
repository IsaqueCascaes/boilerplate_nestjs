import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function ApiCreateResponsibleResponse() {
  return applyDecorators(
    ApiOperation({
      summary: 'Create a new responsible',
      description: 'Creates a new responsible with the provided information.',
    }),
    ApiResponse({
      status: 201,
      description: 'Responsible created successfully',
      examples: {
        success: {
          summary: 'Responsible created successfully',
          value: {
            id: 'f903a3dd-bac7-400a-80e4-7fe9bc9f4b7b',
            name: 'guilherme dasmaceno',
            email: 'guilherme@example.com',
            phone: '68985756609',
            cpf: '999.876.789-00',
            message: 'Responsável criado com sucesso!',
          },
        },
        cpfAlreadyExists: {
          summary: 'Responsible CPF already exists',
          value: {
            statusCode: 400,
            message: 'A responsible with this CPF already exists.',
            error: 'Bad Request',
          },
        },
        emailAlreadyExists: {
          summary: 'Responsible email already exists',
          value: {
            statusCode: 400,
            message: 'A responsible with this email already exists.',
            error: 'Bad Request',
          },
        },
      },
    }),
  );
}
