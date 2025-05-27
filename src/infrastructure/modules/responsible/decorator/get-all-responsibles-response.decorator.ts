import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function ApiGetAllResponsiblesResponse() {
  return applyDecorators(
    ApiOperation({
      summary: 'Retrieve all responsibles',
      description:
        'Returns a list of responsibles. You can optionally filter by name, email, or CPF.',
    }),
    ApiResponse({
      status: 200,
      description: 'List of responsibles retrieved successfully',
      examples: {
        success: {
          summary: 'Responsibles returned successfully',
          value: [
            {
              id: '65971040-3612-429c-9a2f-c543886685a1',
              name: 'John Doe',
              email: '9A2ZI@example.com',
              phone: '91985756609',
              cpf: '123.456.789-00',
              createdAt: '2025-05-27T00:29:19.635Z',
              updatedAt: '2025-05-27T00:29:19.635Z',
            },
            {
              id: 'be74115d-586d-4392-9e69-77a7080357b2',
              name: 'John Doe',
              email: '9332ZI@example.com',
              phone: '12985756609',
              cpf: '153.456.789-00',
              createdAt: '2025-05-27T00:54:01.104Z',
              updatedAt: '2025-05-27T00:54:01.104Z',
            },
          ],
        },
        emptyList: {
          summary: 'No responsibles found',
          value: [],
        },
      },
    }),
  );
}
