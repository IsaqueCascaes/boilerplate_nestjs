import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function ApiCreateCompanyResponse() {
  return applyDecorators(
    ApiOperation({
      summary: 'Create a new company',
      description:
        'Creates a new company associated with an existing responsible.',
    }),
    ApiResponse({
      status: 201,
      description: 'Company created successfully',
      examples: {
        success: {
          summary: 'Company created successfully',
          value: {
            id: '6a729c86-99ec-4150-a9ad-7bd03658a3b2',
            name: 'Acme Corporation',
            cnpj: '12.345.678/0001-90',
            responsibleId: 'f903a3dd-bac7-400a-80e4-7fe9bc9f4b7b',
            message: 'Company created successfully!',
          },
        },
        responsibleNotFound: {
          summary: 'Responsible not found',
          value: {
            statusCode: 404,
            message: 'Responsible not found, verify if it is valid or exists',
            error: 'Not Found',
          },
        },
      },
    }),
  );
}
