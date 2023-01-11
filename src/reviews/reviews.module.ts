import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationsEntity } from '../locations/entities/locations.entity';
import { UsersEntity } from '../users/entitites/user.entity';
import { ReviewsEntity } from './entities/reviews.entity';
import { ReviewsService } from './services/reviews.service';
import { ReviewsController } from './controllers/reviews.controller';
import { UserReviewsController } from './controllers/user-reviews.controller';
import { LocationReviewsController } from './controllers/location-reviews.controller';
import { LocationReviewsService } from './services/location-reviews.service';
import { UserReviewsService } from './services/user-reviews.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReviewsEntity, LocationsEntity, UsersEntity]),
  ],
  providers: [ReviewsService, LocationReviewsService, UserReviewsService],
  controllers: [
    ReviewsController,
    UserReviewsController,
    LocationReviewsController,
  ],
})
export class ReviewsModule {}
