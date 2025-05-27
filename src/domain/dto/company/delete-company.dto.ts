import { ApiProperty } from '@nestjs/swagger';

export class DeleteCompanyDto {
  @ApiProperty({ example: '39f8383c-60b5-41a3-81cc-4ece5cfe9d6f' })
  id: string;
}
