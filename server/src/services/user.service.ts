import { GetUserQueryDto } from '@/dtoes/user.dto';
import { GetTournamentDto } from '@/dtoes/tournament.dto';
import { Users } from '@/models/users.model';
import { TournamentResults } from '@/models/tournamentResults.model';
import { Tournaments } from '@/models/tournaments.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository, Like } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users) private readonly userModel: Repository<Users>,
  ) {}

  public async get({ limit, page, search }: GetUserQueryDto) {
    const opt: FindManyOptions<Users> = {}
    if (search) opt.where = { name: Like(`%${search}%`) }
    if (limit || page) {
      limit = limit || 12
      page = page || 1
      opt.skip = limit * (page - 1)
      opt.take = limit
    } 

    const [ data, totalData ] = await this.userModel.findAndCount(opt)
    const pagination = {
      page,
      totalPage: totalData <= limit ? 1 : Math.ceil(totalData / limit),
      totalData,
      limit,
      search: search ? search : undefined,
    }

    return { data, pagination }
  }
}
