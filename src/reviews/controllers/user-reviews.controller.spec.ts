import { Test, TestingModule } from '@nestjs/testing';
import { UserReviewsService } from '../services/user-reviews.service';
import { UserReviewsController } from './user-reviews.controller';

describe('UserReviewsController', () => {
  let controller: UserReviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserReviewsController],
      providers: [UserReviewsService],
    })
      .overrideProvider(UserReviewsService)
      .useValue(null)
      .compile();

    controller = module.get<UserReviewsController>(UserReviewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
