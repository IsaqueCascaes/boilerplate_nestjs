import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function ApiGetAllCompaniesResponse() {
  return applyDecorators(
    ApiOperation({
      summary: 'Retrieve all companies with optional filters',
      description:
        'Fetches a list of companies. Supports optional filters like name, CNPJ, and responsible name.',
    }),
    ApiResponse({
      status: 200,
      description: 'Companies retrieved successfully',
      examples: {
        success: {
          summary: 'Companies retrieved successfully',
          value: [
            {
              id: '39f8383c-60b5-41a3-81cc-4ece5cfe9d6f',
              name: 'Acme Corporation',
              cnpj: '12.345.678/0001-90',
              responsibleId: '3b03491f-07d7-4a1e-9f28-1f3740639347',
              responsibleName: 'John Doe',
            },
            {
              id: 'b2104537-df54-4457-bb94-5c665d5ad641',
              name: 'Souzen Corporation',
              cnpj: '12.345.678/0001-80',
              responsibleId: '7fc294c9-b8be-4f1e-b901-3ac135680aa8',
              responsibleName: 'Isaque Cascaes',
            },
          ],
        },
        emptyList: {
          summary: 'No companies found',
          value: [],
        },
      },
    }),
  );
}
