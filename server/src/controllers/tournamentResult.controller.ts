import { CreateTournamentResultDto, DeleteTournamentResultDto, GetTournamentResultDto } from '@/dtoes/tournamentResult.dto';
import { ITournamentResult } from '@/interfaces/tournamentResults.interface';
import {
  Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Req, Res
} from '@nestjs/common';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { TournamentResultService } from '@services/tournamentResult.service';


@ApiTags('TournamentResults')
@Controller('leaderboard')
export class TournamentResultController {
  constructor(private readonly tournamentResultsService: TournamentResultService) { }

  @Get(':id?')
  @ApiParam({ name: 'id', type: 'number', allowEmptyValue: true, required: false, allowReserved: false })
  @ApiOkResponse({ description: 'Successfully fetch leaderboard' })
  @ApiNotFoundResponse({ description: 'Data is not exist' })
  @ApiBadRequestResponse({ description: 'Internal Server Error' })
  public async getProducts(
    @Res() res,
    @Query() { tournament_id }: GetTournamentResultDto,
    @Param() { id }: GetTournamentResultDto,
  ): Promise<ITournamentResult> {
    try {
      if (!id && !tournament_id) throw { statusCode: 400, message: 'Please select tournament or leaderboard' }
      const leaderboard = await this.tournamentResultsService.get({ id, tournament_id })

      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'Get leaderboard data success',
        data: leaderboard
      });
    } catch (err) {
      return res.status(err.statusCode || 400).json({
        message: err.message || 'Internal Server Error',
        statusCode: err.statusCode || 400
      })
    }
  }

  @Post()
  @ApiOkResponse({ description: 'Insert new leaderboard data success' })
  @ApiBadRequestResponse({ description: 'Internal Server Error' })
  public async addProduct(
    @Res() res,
    @Body() tourResDto: CreateTournamentResultDto,
  ): Promise<ITournamentResult> {
    try {
      await this.tournamentResultsService.create(tourResDto)

      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: `Create data successfully`,
      });
    } catch (err) {
      return res.status(err.statusCode || 400).json({ message: err.message || 'Internal Server Error' })
    }
  }

  @Put(':id')
  @ApiOkResponse({ description: 'Successfully edit leaderboard data' })
  @ApiNotFoundResponse({ description: 'Data is not exist' })
  @ApiBadRequestResponse({ description: 'Internal Server Error' })
  public async updateProducts(
    @Res() res,
    @Param() { id }: DeleteTournamentResultDto,
    @Body() productDto: CreateTournamentResultDto,
  ): Promise<ITournamentResult> {
    try {
      await this.tournamentResultsService.update(id, productDto)

      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: `Update leaderboard data success`,
      });
    } catch (err) {
      return res.status(err.statusCode || 400).json({
        message: err.message || 'Internal Server Error',
        statusCode: err.statusCode || 400
      })
    }
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Successfully delete leaderboard data' })
  @ApiNotFoundResponse({ description: 'Data is not exist' })
  @ApiBadRequestResponse({ description: 'Internal Server Error' })
  public async deleteProducts(
    @Res() res,
    @Param() { id }: DeleteTournamentResultDto
  ): Promise<ITournamentResult> {
    try {
      await this.tournamentResultsService.delete(id)

      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: `Deleting leaderboard data success`,
      });
    } catch (err) {
      return res.status(err.statusCode || 400).json({
        message: err.message || 'Internal Server Error',
        statusCode: err.statusCode || 400
      })
    }
  }
}
