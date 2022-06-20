import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tournaments } from '@models/tournaments.model';
import { TournamentService } from '@services/tournament.service';
import { TournamentController } from '@controllers/tournament.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Tournaments])],
  controllers: [TournamentController],
  providers: [TournamentService],
})
export class TournamentModule {}
