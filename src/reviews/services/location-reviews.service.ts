import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ErrorManager } from '../../utils/error.manager';
import { LocationsEntity } from '../../locations/entities/locations.entity';
import { ReviewsEntity } from '../entities/reviews.entity';

@Injectable()
export class LocationReviewsService {
  constructor(
    @InjectRepository(LocationsEntity)
    private readonly locationRepository: Repository<LocationsEntity>,
    @InjectRepository(ReviewsEntity)
    private readonly reviewRepository: Repository<ReviewsEntity>,
  ) {}

  public async getLocationReviews(
    locationId: string,
  ): Promise<ReviewsEntity[]> {
    try {
      const location = await this.locationRepository.findOne({
        where: { id: locationId },
      });

      if (!location) {
        throw new NotFoundException(`Location ${locationId} not found`);
      }

      return await this.reviewRepository.find({
        where: { location: { id: locationId } },
      });
    } catch (error) {
      throw ErrorManager.createSignatureError({
        message: error.message,
        status: error.status,
      });
    }
  }
}
