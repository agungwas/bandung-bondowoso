import { GetTeamQueryDto } from '@/dtoes/team.dto';
import { GetTournamentDto } from '@/dtoes/tournament.dto';
import { Teams } from '@/models/teams.model';
import { TournamentResults } from '@/models/tournamentResults.model';
import { Tournaments } from '@/models/tournaments.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Teams) private readonly teamModel: Repository<Teams>,
  ) {}

  public async get({ id, query: { limit, page, search, tournament_id } }: { query: GetTeamQueryDto } & GetTournamentDto) {
    if (id) return await this.teamModel.findOne({ where: { id }})

    const query = this.teamModel
      .createQueryBuilder('t')
      .select(['t.id id', 't.name name', 't.logo logo', 'tour.title tournament_name', 'SUM(tr.point) point'])
      .leftJoin(TournamentResults, 'tr', 't.id = tr.team_id')
      .leftJoin(Tournaments, 'tour', 'tour.id = t.tournament_id')
      .groupBy('t.id')

    if (tournament_id) query.where('t.tournament_id = :tournament_id', { tournament_id })
    if (search) query.andWhere('t.name LIKE :search', { search: `%${search}%` })
    if (limit || page) {
      limit = limit || 12
      page = page || 1
      query.limit(limit).offset(limit * (page - 1))
    }

    const data = await query.getRawMany()
    const totalData = await query.getCount()
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
