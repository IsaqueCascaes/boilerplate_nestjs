import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function ApiFindAllProductsResponse() {
  return applyDecorators(
    ApiOperation({
      summary: 'Search products with filters',
      description:
        'Retrieves a list of products filtered by product name or company name. If no filter is provided, returns all products.',
    }),
    ApiResponse({
      status: 200,
      description: 'Filtered list of products retrieved successfully',
      examples: {
        success: {
          summary: 'Successful response with filtered products',
          value: [
            {
              id: '094e0dc3-7a8f-4e46-a1cf-faf1dcee78a8',
              name: 'samsung S24',
              description:
                'Over-ear Bluetooth headphones with active noise cancellation and 30-hour battery life',
              price: 129.99,
              companyId: '1adce52f-b78d-4899-a66c-f05bcbdc88b9',
              companyName: 'Acme Corporation',
              createdAt: '2025-05-28T03:02:34.320Z',
              updatedAt: '2025-05-28T03:02:34.320Z',
            },
          ],
        },
        emptyList: {
          summary: 'Empty list when no product matches filters',
          value: [],
        },
      },
    }),
  );
}
