import { Teams } from '@/models/teams.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Teams) private readonly teamModel: Repository<Teams>,
  ) {}

  public async get(teamId: number) {
    const data = teamId ? await this.teamModel.findOne({ where: { id: teamId }}) : await this.teamModel.find()
    if (!data) throw { statusCode: 404, message: 'Data not found' }

    return data
  }
}
