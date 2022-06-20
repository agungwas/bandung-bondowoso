import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentResultModule } from './modules/tournamentResult.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.DATABASE_PATH,
      synchronize: false,
      logging: false,
      migrations: ['dist/database/migrations/*.js'],
      entities: ['dist/models/*.model.js'],
    }),
    TournamentResultModule
  ]
})
export class AppModule {}
