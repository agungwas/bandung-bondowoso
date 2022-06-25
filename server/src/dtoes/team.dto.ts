import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';
import { GetUserQueryDto } from 'dtoes/user.dto';

export class GetTeamQueryDto extends GetUserQueryDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  tournament_id?: number;
}