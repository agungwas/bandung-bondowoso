import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '@services/user.service';
import { UserController } from '@controllers/user.controller';
import { Users } from '@models/users.model';
import { Teams } from '@models/teams.model';


@Module({
  imports: [TypeOrmModule.forFeature([Users, Teams])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
