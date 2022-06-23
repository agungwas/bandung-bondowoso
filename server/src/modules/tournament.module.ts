import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentService } from '@services/tournament.service';
import { TournamentController } from '@controllers/tournament.controller';
import { Users } from '@models/users.model';
import { Tournaments } from '@models/tournaments.model';


@Module({
  imports: [TypeOrmModule.forFeature([Users, Tournaments])],
  controllers: [TournamentController],
  providers: [TournamentService],
})
export class TournamentModule {}
