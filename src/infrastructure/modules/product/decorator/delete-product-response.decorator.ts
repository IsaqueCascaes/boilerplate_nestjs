import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function ApiDeleteProductResponse() {
  return applyDecorators(
    ApiOperation({
      summary: 'Delete a product by ID',
      description: 'Deletes a product using its unique ID.',
    }),
    ApiResponse({
      status: 200,
      description: 'Product deleted successfully',
      examples: {
        success: {
          summary: 'Product deleted successfully',
          value: {
            id: '6aa8244a-9e47-4588-aed9-468917adbf94',
            name: 'Samsung Galaxy S21',
            message: 'Product deleted successfully!',
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
