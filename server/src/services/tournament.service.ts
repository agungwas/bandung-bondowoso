import { Tournaments } from '@/models/tournaments.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class TournamentService {
  constructor(
    @InjectRepository(Tournaments) private readonly tournamentModel: Repository<Tournaments>,
  ) {}

  public async get(tournamentId: number) {
    const data = tournamentId ? await this.tournamentModel.findOne({ where: { id: tournamentId }}) : await this.tournamentModel.find()
    if (!data) throw { statusCode: 404, message: 'Data not found' }

    return data
  }
}
