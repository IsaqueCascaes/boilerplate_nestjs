import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function ApiGetProductByIdResponse() {
  return applyDecorators(
    ApiOperation({
      summary: 'Get a product by ID',
      description: 'Retrieves a product using its unique identifier.',
    }),
    ApiResponse({
      status: 200,
      description: 'Product retrieved successfully',
      examples: {
        success: {
          summary: 'Product found',
          value: {
            id: '6aa8244a-9e47-4588-aed9-468917adbf94',
            name: 'Samsung Galaxy S21',
            description: 'Latest generation smartphone with enhanced features',
            price: 149.99,
            companyId: '1adce52f-b78d-4899-a66c-f05bcbdc88b9',
            createdAt: '2025-05-28T01:18:53.689Z',
            updatedAt: '2025-05-28T01:18:53.689Z',
            message: 'Product retrieved successfully!',
          },
        },
        notFound: {
          summary: 'Product not found',
          value: {
            statusCode: 404,
            message: 'Product not found',
            error: 'Not Found',
          },
        },
      },
    }),
  );
}
