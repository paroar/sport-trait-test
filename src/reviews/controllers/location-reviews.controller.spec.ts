import { Test, TestingModule } from '@nestjs/testing';
import { LocationReviewsService } from '../services/location-reviews.service';
import { LocationReviewsController } from './location-reviews.controller';

describe('LocationReviewsController', () => {
  let controller: LocationReviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationReviewsController],
      providers: [LocationReviewsService],
    })
      .overrideProvider(LocationReviewsService)
      .useValue(null)
      .compile();

    controller = module.get<LocationReviewsController>(
      LocationReviewsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
