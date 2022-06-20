import { Tournaments } from '@models/tournaments.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TournamentService {
  constructor(
    @InjectRepository(Tournaments)
    private readonly tournamentModel: Repository<Tournaments>,
  ) {}

}
