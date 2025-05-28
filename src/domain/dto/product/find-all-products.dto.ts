import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class FindAllProductsDto {
  @ApiPropertyOptional({ example: 'Notebook' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'Acme Corporation' })
  @IsOptional()
  @IsString()
  companyName?: string;
}
