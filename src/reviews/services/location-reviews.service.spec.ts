import { Test, TestingModule } from '@nestjs/testing';
import { LocationReviewsService } from './location-reviews.service';

describe('LocationReviewsService', () => {
  let service: LocationReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationReviewsService],
    }).compile();

    service = module.get<LocationReviewsService>(LocationReviewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
