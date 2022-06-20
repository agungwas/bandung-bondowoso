import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from "class-validator";

export class CreateTournamentResultDto {
  @IsNumber()
  @ApiProperty()
  team_id: number;

  @IsNumber()
  @ApiProperty()
  position: number;

  @IsNumber()
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
