import { Test, TestingModule } from '@nestjs/testing';
import { ReviewsService } from '../services/reviews.service';
import { ReviewsController } from './reviews.controller';

describe('ReviewsController', () => {
  let controller: ReviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewsController],
      providers: [ReviewsService],
    })
      .overrideProvider(ReviewsService)
      .useValue(null)
      .compile();

    controller = module.get<ReviewsController>(ReviewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
