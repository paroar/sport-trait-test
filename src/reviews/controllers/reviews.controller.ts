import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReviewDTO, ReviewUpdateDTO } from '../dto/review.dto';
import { ReviewsService } from '../services/reviews.service';

@Controller('reviews')
@ApiTags('reviews')
export class ReviewsController {
  constructor(private readonly reviewService: ReviewsService) {}

  @ApiOperation({ summary: 'Create review' })
  @Post()
  createReview(@Body() reviewDTO: ReviewDTO) {
    return this.reviewService.createReview(reviewDTO);
  }

  @ApiOperation({ summary: 'Get reviews' })
  @Get()
  getReviews() {
    return this.reviewService.getReviews();
  }

  @ApiOperation({ summary: 'Get review by id' })
  @Get(':reviewId')
  getLocation(@Param('reviewId') reviewId: string) {
    return this.reviewService.getReview(reviewId);
  }

  @ApiOperation({ summary: 'Update review' })
  @Put(':reviewId')
  updateLocation(
    @Param('reviewId') reviewId: string,
    @Body() reviewUpdateDto: ReviewUpdateDTO,
  ) {
    return this.reviewService.updateReview(reviewId, reviewUpdateDto);
  }

  @ApiOperation({ summary: 'Delete review' })
  @Delete(':reviewId')
  deleteLocation(@Param('reviewId') reviewId: string) {
    return this.reviewService.deleteReview(reviewId);
  }
}
