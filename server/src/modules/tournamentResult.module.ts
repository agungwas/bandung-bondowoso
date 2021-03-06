import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentResultService } from '@services/tournamentResult.service';
import { TournamentResultController } from '@controllers/tournamentResult.controller';
import { TournamentResults } from '@models/tournamentResults.model';
import { Users } from '@/models/users.model';
import { Teams } from '@/models/teams.model';
import { Tournaments } from '@/models/tournaments.model';


@Module({
  imports: [TypeOrmModule.forFeature([TournamentResults, Users, Teams, Tournaments])],
  controllers: [TournamentResultController],
  providers: [TournamentResultService],
})
export class TournamentResultModule {}
