import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { TournamentResultModule } from './modules/tournamentResult.module';

console.log(join(__dirname, '..', '..', 'client', 'build'), 'ini folder')
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
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'client', 'build'),
    }),
    TournamentResultModule
  ]
})
export class AppModule {}
