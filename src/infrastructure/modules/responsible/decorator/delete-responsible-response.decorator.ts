import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function ApiDeleteResponsibleResponse() {
  return applyDecorators(
    ApiOperation({
      summary: 'Delete a responsible by ID',
      description: 'Deletes a responsible from the system using its unique ID.',
    }),
    ApiResponse({
      status: 200,
      description: 'Responsible deleted successfully',
      examples: {
        success: {
          summary: 'Responsible deleted successfully',
          value: {
            id: 'e3b294af-fe66-42d8-8151-aa8fbaf9f73b',
            name: 'John Doe',
            message: 'Responsible deleted successfully!',
          },
        },
        notFound: {
          summary: 'Responsible not found',
          value: {
            statusCode: 404,
            message: 'Responsible not found',
            error: 'Not Found',
          },
        },
      },
    }),
  );
}
