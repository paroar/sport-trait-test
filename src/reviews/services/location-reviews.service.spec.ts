import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { LocationsEntity } from '../../locations/entities/locations.entity';
import { UsersEntity } from '../../users/entitites/user.entity';
import { ReviewsEntity } from '../entities/reviews.entity';
import { LocationReviewsService } from './location-reviews.service';

describe('LocationReviewsService', () => {
  let service: LocationReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LocationReviewsService,
        {
          provide: getRepositoryToken(ReviewsEntity),
          useValue: null,
        },
        {
          provide: getRepositoryToken(UsersEntity),
          useValue: null,
        },
        {
          provide: getRepositoryToken(LocationsEntity),
          useValue: null,
        },
      ],
    }).compile();

    service = module.get<LocationReviewsService>(LocationReviewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
