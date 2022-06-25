import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';


export class GetUserQueryDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  page?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  limit?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  search?: string;
}