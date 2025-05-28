import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function ApiGetAllProductsResponse() {
  return applyDecorators(
    ApiOperation({
      summary: 'Get all products',
      description:
        'Retrieves a complete list of all products registered in the system.',
    }),
    ApiResponse({
      status: 200,
      description: 'List of all products retrieved successfully',
      examples: {
        success: {
          summary: 'Successful response with all products',
          value: [
            {
              id: '8032b041-4095-408e-a06f-1411d7726ed0',
              name: 'Plano Premium',
              description: 'Acesso ilimitado aos serviços da empresa',
              price: 199.9,
              companyId: '1adce52f-b78d-4899-a66c-f05bcbdc88b9',
              createdAt: '2025-05-28T01:11:45.922Z',
              updatedAt: '2025-05-28T01:11:45.922Z',
            },
            {
              id: 'ae1eb3fb-b19f-4029-b7a0-8b89c581683f',
              name: 'Plano Premium',
              description: 'Acesso ilimitado aos serviços da empresa',
              price: 199.9,
              companyId: '1adce52f-b85d-9999-a66c-f05bcbdc88b9',
              createdAt: '2025-05-28T01:08:44.502Z',
              updatedAt: '2025-05-28T01:08:44.502Z',
            },
          ],
        },
        empty: {
          summary: 'No products found',
          value: [],
        },
      },
    }),
  );
}
