import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, Min } from "class-validator";

export class CreateTournamentResultDto {
  @IsNumber()
  @Min(1, { message: 'Team id must bigger than 0' })
  @ApiProperty()
  team_id: number;

  @IsNumber()
  @Min(1, { message: 'Position must bigger than 0' })
  @ApiProperty()
  position: number;

  @IsNumber()
  @Min(1, { message: 'Tournament id must bigger than 0' })
  @ApiProperty()
  tournament_id: number;
}

export class GetTournamentResultDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id?: number
}

export class DeleteTournamentResultDto {
  @IsNumber()
  @ApiProperty()
  id: number
}
