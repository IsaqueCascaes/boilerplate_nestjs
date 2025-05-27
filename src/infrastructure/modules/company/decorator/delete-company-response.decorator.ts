import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function ApiDeleteCompanyResponse() {
  return applyDecorators(
    ApiOperation({
      summary: 'Delete a company by ID',
      description:
        'Deletes a company by its unique identifier. Returns the deleted company data along with the associated responsible.',
    }),
    ApiResponse({
      status: 200,
      description: 'Company deleted successfully',
      examples: {
        success: {
          summary: 'Company deleted successfully',
          value: {
            id: 'ebd28622-1b1e-4b30-91bd-9bde3ca928aa',
            name: 'Acme Corporation B2B',
            responsibleId: '3b03491f-07d7-4a1e-9f28-1f3740639347',
            responsibleName: 'John Doe',
            message: 'Company deleted successfully!',
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
