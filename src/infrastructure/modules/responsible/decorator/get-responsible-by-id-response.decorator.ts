import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function ApiGetResponsibleByIdResponse() {
  return applyDecorators(
    ApiOperation({
      summary: 'Get a responsible by ID',
      description:
        'Retrieves a responsible from the system using its unique ID.',
    }),
    ApiResponse({
      status: 200,
      description: 'Responsible retrieved successfully',
      examples: {
        success: {
          summary: 'Responsible retrieved successfully',
          value: {
            id: 'be74115d-586d-4392-9e69-77a7080357b2',
            name: 'John Doe',
            email: '9332ZI@example.com',
            phone: '12985756609',
            cpf: '153.456.789-00',
            message: 'Responsible retrieved successfully!',
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
