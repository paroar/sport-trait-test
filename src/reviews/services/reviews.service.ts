import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { LocationsEntity } from '../../locations/entities/locations.entity';
import { UsersEntity } from '../../users/entitites/user.entity';
import { ErrorManager } from '../../utils/error.manager';
import { ReviewDTO, ReviewUpdateDTO } from '../dto/review.dto';
import { ReviewsEntity } from '../entities/reviews.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(LocationsEntity)
    private readonly locationRepository: Repository<LocationsEntity>,
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
    @InjectRepository(ReviewsEntity)
    private readonly reviewRepository: Repository<ReviewsEntity>,
  ) {}

  public async createReview(body: ReviewDTO): Promise<ReviewsEntity> {
    const { locationId, authorId } = body;

    const location = await this.locationRepository.findOne({
      where: { id: locationId },
    });

    if (!location) {
      throw new NotFoundException(`Could not found location ${locationId}`);
    }

    const author = await this.userRepository.findOne({
      where: { id: authorId },
    });

    if (!author) {
      throw new NotFoundException(`Could not found user ${author}`);
    }

    const review = await this.reviewRepository.save({
      ...body,
      location,
      author,
    });

    if (!review) {
      throw new ConflictException(`Could not create review`);
    }
    return review;
  }

  public getReviews(): Promise<ReviewsEntity[]> {
    return this.reviewRepository.find({
      relations: ['author', 'location'],
    });
  }

  public async getReview(reviewId: string): Promise<ReviewsEntity> {
    try {
      const review = await this.reviewRepository.findOne({
        where: { id: reviewId },
        relations: ['author', 'location'],
      });
      if (!review) {
        throw new NotFoundException(`Review ${reviewId} not found`);
      }
      return review;
    } catch (error) {
      throw ErrorManager.createSignatureError({
        message: error.message,
        status: error.status,
      });
    }
  }

  public async updateReview(
    reviewId: string,
    body: ReviewUpdateDTO,
  ): Promise<UpdateResult> {
    try {
      return await this.reviewRepository.update(reviewId, body);
    } catch (error) {
      throw ErrorManager.createSignatureError({
        message: error.message,
        status: error.status,
      });
    }
  }

  public async deleteReview(reviewId: string): Promise<DeleteResult> {
    try {
      return await this.reviewRepository.delete({ id: reviewId });
    } catch (error) {
      throw ErrorManager.createSignatureError({
        message: error.message,
        status: error.status,
      });
    }
  }
}
