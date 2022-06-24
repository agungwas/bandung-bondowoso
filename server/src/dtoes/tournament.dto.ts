import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, Min } from "class-validator";

export class CreateTournamentDto {
  @IsNumber()
  @Min(1, { message: 'Team is invalid' })
  @ApiProperty()
  team_id: number;

  @IsNumber()
  @Min(1, { message: 'Position must bigger than 0' })
  @ApiProperty()
  position: number;

  @IsNumber()
  @Min(1, { message: 'Tournament is invalid' })
  @ApiProperty()
  tournament_id: number;
}

export class GetTournamentDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id?: number
}

export class DeleteTournamentDto {
  @IsNumber()
  @ApiProperty()
  id: number
}
