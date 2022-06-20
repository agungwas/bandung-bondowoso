import { CreateTournamentResultDto } from '@/dtoes/tournamentResult.dto';
import { ITournamentResult } from '@/interfaces/tournamentResults.interface';
import { Teams } from '@/models/teams.model';
import { Users } from '@/models/users.model';
import { TournamentResults } from '@models/tournamentResults.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class TournamentResultService {
  constructor(
    @InjectRepository(TournamentResults) private readonly tournamentResultModel: Repository<TournamentResults>,
    @InjectRepository(Users) private readonly userModel: Repository<Users>,
    @InjectRepository(Teams) private readonly teamModel: Repository<Teams>,
  ) {}

  public async get(tournamentResultId: number) {
    const opt: FindManyOptions<TournamentResults> = { relations: ['team', 'team.members', 'team.members.user'], order: { point: 'DESC' }}
    const data = tournamentResultId ? await this.tournamentResultModel.findOne({ ...opt, where: { id: tournamentResultId }}) : await this.tournamentResultModel.find(opt)
    if (!data) throw { statusCode: 404, message: 'Data not found' }

    return data
  }

  public async create(tourResDto: CreateTournamentResultDto): Promise<ITournamentResult> {
    const tourData = await this.tournamentResultModel.findOne({ where: { team_id: tourResDto.team_id, tournament_id: tourResDto.tournament_id }})
    if (tourData) throw { statusCode: 400, message: 'Team already updated with tournament'}

    const data = await this.teamModel.findOne({ where: { id: tourResDto.team_id }, relations: ['members', 'members.user']})
    const coin = this.positionToCoin(tourResDto.position)

    if (coin) {
      for (const el of data.members) {
        el.user.coin+= coin
        await this.userModel.save(el.user)
      }
    }

    return await this.tournamentResultModel.save({ ...tourResDto, point: coin })
  }

  public async update(id: number, tourResDto: CreateTournamentResultDto): Promise<TournamentResults> {
    const data = await this.tournamentResultModel.findOne({ where: { id }, relations: ['team', 'team.members', 'team.members.user']});
    if (!data) throw { statusCode: 404, message: 'Data not found' }

    const lastCoin = this.positionToCoin(data.position)
    const currCoin = this.positionToCoin(tourResDto.position)
    const finalCoin = lastCoin || currCoin ? data.point + currCoin - lastCoin : data.point

    if (lastCoin || currCoin) {
      for (const el of data.team.members) {
        el.user.coin = el.user.coin + currCoin - lastCoin
        await this.userModel.save(el.user)
      }
    }

    return await this.tournamentResultModel.save({ ...data, ...tourResDto, point: finalCoin });
  }

  public async delete(id: number): Promise<void> {
    const data = await this.tournamentResultModel.findOne({ where: { id }, relations: ['team', 'team.members', 'team.members.user']});
    if (!data) throw { statusCode: 404, message: 'Data not found' }

    const lastCoin = this.positionToCoin(data.position)

    if (lastCoin) {
      for (const el of data.team.members) {
        el.user.coin-= lastCoin
        await this.userModel.save(el.user)
      }
    }

    const product = await this.tournamentResultModel.delete({ id });
    if (!product) throw { statusCode: 404, message: 'Data not found' }
  }

  public positionToCoin(pos: number): number {
    let coin: number

    switch (pos) {
      case 1: 
        coin = 5
        break
      case 2: 
        coin = 3
        break
      case 3:
        coin = 2
        break
      default:
        coin = 0
        break        
    }
    
    return coin
  }
}
