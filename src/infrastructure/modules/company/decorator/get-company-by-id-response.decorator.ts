import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function ApiGetCompanyByIdResponse() {
  return applyDecorators(
    ApiOperation({
      summary: 'Get a company by ID',
      description:
        'Retrieves a company from the system using its unique ID. Returns company details and associated responsible.',
    }),
    ApiResponse({
      status: 200,
      description: 'Company retrieved successfully',
      examples: {
        success: {
          summary: 'Company retrieved successfully',
          value: {
            id: '39f8383c-60b5-41a3-81cc-4ece5cfe9d6f',
            name: 'Acme Corporation',
            cnpj: '12.345.678/0001-90',
            responsibleId: '3b03491f-07d7-4a1e-9f28-1f3740639347',
            responsibleName: 'John Doe',
            message: 'Company retrieved successfully!',
          },
        },
        notFound: {
          summary: 'Company not found',
          value: {
            message: 'Company not found',
            error: 'Not Found',
            statusCode: 404,
          },
        },
      },
    }),
  );
}
