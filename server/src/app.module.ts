import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from '@modules/product.module';
import { TournamentModule } from '@modules/tournament.module';


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
    ProductModule,
    TournamentModule
  ]
})
export class AppModule {}
