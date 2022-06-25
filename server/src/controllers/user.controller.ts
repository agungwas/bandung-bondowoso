import { GetUserQueryDto } from '@/dtoes/user.dto';
import { GetTournamentDto } from '@/dtoes/tournament.dto';
import { IUser } from '@/interfaces/users.interface';
import { UserService } from '@/services/user.service';
import {
  Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res
} from '@nestjs/common';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';


@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get(':id?')
  @ApiParam({ name: 'id', type: 'number', allowEmptyValue: true, required: false, allowReserved: false })
  @ApiOkResponse({ description: 'Successfully fetch user data' })
  @ApiNotFoundResponse({ description: 'Data is not exist' })
  @ApiBadRequestResponse({ description: 'Internal Server Error' })
  public async getProducts(
    @Res() res,
    @Param() { id }: GetTournamentDto,
    @Query() query: GetUserQueryDto
  ): Promise<IUser> {
    try {
      const { data, pagination }: any = await this.userService.get(query)

      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: id ? `Get user data with id ${id} success` : 'Get all user data success',
        data, pagination
      });
    } catch (err) {
      return res.status(err.statusCode || 400).json({
        message: err.message || 'Internal Server Error',
        statusCode: err.statusCode || 400
      })
    }
  }
}
