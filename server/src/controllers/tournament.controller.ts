import { GetTournamentResultDto } from '@/dtoes/tournamentResult.dto';
import { ITournament } from '@/interfaces/tournament.interface';
import { TournamentService } from '@/services/tournament.service';
import {
  Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res
} from '@nestjs/common';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';


@ApiTags('Tournaments')
@Controller('tournament')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) { }

  @Get(':id?')
  @ApiParam({ name: 'id', type: 'number', allowEmptyValue: true, required: false, allowReserved: false })
  @ApiOkResponse({ description: 'Successfully fetch tournament data' })
  @ApiNotFoundResponse({ description: 'Data is not exist' })
  @ApiBadRequestResponse({ description: 'Internal Server Error' })
  public async getProducts(
    @Res() res,
    @Param() { id }: GetTournamentResultDto,
  ): Promise<ITournament> {
    try {
      const tournament = await this.tournamentService.get(id)

      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: id ? `Get tournament data with id ${id} success` : 'Get all tournament data success',
        data: tournament
      });
    } catch (err) {
      return res.status(err.statusCode || 400).json({
        message: err.message || 'Internal Server Error',
        statusCode: err.statusCode || 400
      })
    }
  }
}
