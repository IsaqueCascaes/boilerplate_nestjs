import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class CreateCompanyDto {
  @ApiProperty({ example: 'Acme Corporation' })
  @IsString()
  name: string;

  @ApiProperty({ example: '12.345.678/0001-90' })
  @IsString()
  cnpj: string;

  @ApiProperty({
    example: 'a38f497e-7de6-4e69-9230-1c67e0cb0b8b',
    description: 'UUID of the responsible already registered',
  })
  @IsUUID()
  responsibleId: string;
}
