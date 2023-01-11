import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/users/entitites/user.entity';
import { ErrorManager } from 'src/utils/error.manager';
import { Repository } from 'typeorm';
import { ReviewsEntity } from '../entities/reviews.entity';

@Injectable()
export class UserReviewsService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
    @InjectRepository(ReviewsEntity)
    private readonly reviewRepository: Repository<ReviewsEntity>,
  ) {}

  public async getUserReviews(userId: string): Promise<ReviewsEntity[]> {
    try {
      const user = await this.userRepository.findOne({
        where: { id: userId },
      });

      if (!user) {
        throw new NotFoundException(`User ${userId} not found`);
      }

      return await this.reviewRepository.find({
        where: { author: { id: userId } },
      });
    } catch (error) {
      throw ErrorManager.createSignatureError({
        message: error.message,
        status: error.status,
      });
    }
  }
}
