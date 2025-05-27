import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateResponsibleDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'John Doe' })
  name: string;

  @IsEmail()
  @ApiProperty({ example: '9A2ZI@example.com' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '91985756609' })
  phone: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '123.456.789-00' })
  cpf: string;
}
