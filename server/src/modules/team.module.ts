import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamService } from '@services/team.service';
import { TeamController } from '@controllers/team.controller';
import { Users } from '@models/users.model';
import { Teams } from '@models/teams.model';


@Module({
  imports: [TypeOrmModule.forFeature([Users, Teams])],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}
