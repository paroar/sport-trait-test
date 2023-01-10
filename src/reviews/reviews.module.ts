import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationsEntity } from '../locations/entities/locations.entity';
import { UsersEntity } from '../users/entitites/user.entity';
import { ReviewsEntity } from './entities/reviews.entity';
import { ReviewsService } from './services/reviews.service';
import { ReviewsController } from './controllers/reviews.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReviewsEntity, LocationsEntity, UsersEntity]),
  ],
  providers: [ReviewsService],
  controllers: [ReviewsController],
})
export class ReviewsModule {}
