import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function ApiUpdateCompanyResponse() {
  return applyDecorators(
    ApiOperation({
      summary: 'Update a company by ID',
      description:
        'Updates the name and CNPJ of a company using its unique ID. The response includes the company details and the associated responsible.',
    }),
    ApiResponse({
      status: 200,
      description: 'Company updated successfully',
      examples: {
        success: {
          summary: 'Company updated successfully',
          value: {
            id: '39f8383c-60b5-41a3-81cc-4ece5cfe9d6f',
            name: 'Acme Corporation Updated',
            cnpj: '98.765.432/0001-10',
            responsibleId: '3b03491f-07d7-4a1e-9f28-1f3740639347',
            responsibleName: 'John Doe',
            message: 'Company updated successfully!',
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
