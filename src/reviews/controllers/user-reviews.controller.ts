import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserReviewsService } from '../services/user-reviews.service';

@Controller('users/:userId/reviews')
@ApiTags('reviews')
export class UserReviewsController {
  constructor(private readonly userReviewService: UserReviewsService) {}

  @ApiOperation({ summary: 'Get user reviews' })
  @Get()
  getUserReviews(@Param('userId') userId: string) {
    return this.userReviewService.getUserReviews(userId);
  }
}
