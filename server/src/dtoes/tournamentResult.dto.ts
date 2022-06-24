import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, Min, ValidateIf } from "class-validator";

export class CreateTournamentResultDto {
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

export class GetTournamentResultDto {
  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 }, { message: 'Tournament is not valid' })
  @ApiProperty()
  tournament_id?: number

  @ValidateIf(o => o.tournament_id)
  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 }, { message: 'Selected leaderboard data is not valid' })
  @ApiProperty()
  id?: number
}

export class DeleteTournamentResultDto {
  @IsNumber()
  @ApiProperty()
  id: number
}
