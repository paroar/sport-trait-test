import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { LocationsEntity } from '../../locations/entities/locations.entity';
import { UsersEntity } from '../../users/entitites/user.entity';
import { ReviewsEntity } from '../entities/reviews.entity';
import { ReviewsService } from './reviews.service';

describe('ReviewsService', () => {
  let service: ReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReviewsService,
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

    service = module.get<ReviewsService>(ReviewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
