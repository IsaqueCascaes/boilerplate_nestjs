import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function ApiUpdateResponsibleResponse() {
  return applyDecorators(
    ApiOperation({
      summary: 'Update a responsible by ID',
      description:
        'Updates an existing responsible with the given fields. All fields are optional and only the provided ones will be updated.',
    }),
    ApiResponse({
      status: 200,
      description: 'Responsible updated successfully',
      examples: {
        success: {
          summary: 'Responsible updated successfully',
          value: {
            id: '65971040-3612-429c-9a2f-c543886685a1',
            name: 'Isaque Cascaes',
            email: 'isaque@example.com',
            phone: '91985756609',
            cpf: '123.456.789-00',
            message: 'Responsible updated successfully!',
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
