import { GetTournamentResultDto } from '@/dtoes/tournamentResult.dto';
import { ITeam } from '@/interfaces/teams.interface';
import { TeamService } from '@/services/team.service';
import {
  Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res
} from '@nestjs/common';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';


@ApiTags('Teams')
@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) { }

  @Get(':id?')
  @ApiParam({ name: 'id', type: 'number', allowEmptyValue: true, required: false, allowReserved: false })
  @ApiOkResponse({ description: 'Successfully fetch team data' })
  @ApiNotFoundResponse({ description: 'Data is not exist' })
  @ApiBadRequestResponse({ description: 'Internal Server Error' })
  public async getProducts(
    @Res() res,
    @Param() { id }: GetTournamentResultDto,
  ): Promise<ITeam> {
    try {
      const team = await this.teamService.get(id)

      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: id ? `Get team data with id ${id} success` : 'Get all team data success',
        data: team
      });
    } catch (err) {
      return res.status(err.statusCode || 400).json({
        message: err.message || 'Internal Server Error',
        statusCode: err.statusCode || 400
      })
    }
  }
}
