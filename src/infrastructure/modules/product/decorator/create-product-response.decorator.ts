import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function ApiCreateProductResponse() {
  return applyDecorators(
    ApiOperation({
      summary: 'Create a new product',
      description:
        'Creates a new product linked to a company using the provided data.',
    }),
    ApiResponse({
      status: 201,
      description: 'Product created successfully',
      examples: {
        success: {
          summary: 'Product created successfully',
          value: {
            id: '6aa8244a-9e47-4588-aed9-468917adbf94',
            name: 'Wireless Noise-Cancelling Headphones',
            description:
              'Over-ear Bluetooth headphones with active noise cancellation and 30-hour battery life',
            price: 'R$129,99',
            companyId: '1adce52f-b78d-4899-a66c-f05bcbdc88b9',
            createdAt: '2025-05-28T01:18:53.689Z',
            updatedAt: '2025-05-28T01:18:53.689Z',
            message: 'Product created successfully!',
          },
        },
        invalidCompanyId: {
          summary: 'Invalid companyId',
          value: {
            statusCode: 400,
            message:
              'The provided companyId does not exist, verify if it is valid or exists .',
            error: 'Bad Request',
          },
        },
        duplicateProductName: {
          summary: 'Duplicate product name for the same company',
          value: {
            statusCode: 400,
            message:
              'A product with this name already exists for this company.',
            error: 'Bad Request',
          },
        },
      },
    }),
  );
}
