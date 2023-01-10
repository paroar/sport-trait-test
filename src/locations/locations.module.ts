import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationsEntity } from './entities/locations.entity';
import { LocationsController } from './controllers/locations.controller';
import { LocationsService } from './services/locations.service';

@Module({
  imports: [TypeOrmModule.forFeature([LocationsEntity])],
  controllers: [LocationsController],
  providers: [LocationsService],
})
export class LocationsModule {}
