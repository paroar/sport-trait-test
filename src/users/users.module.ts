import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './entitites/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
})
export class UsersModule {}
