import { Test, TestingModule } from '@nestjs/testing';
import { LocationReviewsController } from './location-reviews.controller';

describe('LocationReviewsController', () => {
  let controller: LocationReviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationReviewsController],
    }).compile();

    controller = module.get<LocationReviewsController>(
      LocationReviewsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
