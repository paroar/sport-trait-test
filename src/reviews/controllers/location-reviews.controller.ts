import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LocationReviewsService } from '../services/location-reviews.service';

@Controller('locations/:locationId/reviews')
@ApiTags('reviews')
export class LocationReviewsController {
  constructor(private readonly locationReviewService: LocationReviewsService) {}

  @ApiOperation({ summary: 'Get location reviews' })
  @Get()
  getUserReviews(@Param('locationId') locationId: string) {
    return this.locationReviewService.getLocationReviews(locationId);
  }
}
