import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ReviewDTO, ReviewUpdateDTO } from '../dto/review.dto';
import { ReviewsService } from '../services/reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewService: ReviewsService) {}

  @Post()
  createReview(@Body() reviewDTO: ReviewDTO) {
    return this.reviewService.createReview(reviewDTO);
  }

  @Get()
  getReviews() {
    return this.reviewService.getReviews();
  }

  @Get(':reviewId')
  getLocation(@Param('reviewId') reviewId: string) {
    return this.reviewService.getReview(reviewId);
  }

  @Put(':reviewId')
  updateLocation(
    @Param('reviewId') reviewId: string,
    @Body() reviewUpdateDto: ReviewUpdateDTO,
  ) {
    return this.reviewService.updateReview(reviewId, reviewUpdateDto);
  }

  @Delete(':reviewId')
  deleteLocation(@Param('reviewId') reviewId: string) {
    return this.reviewService.deleteReview(reviewId);
  }
}
