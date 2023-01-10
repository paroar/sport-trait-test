import { Column, Entity, ManyToOne } from 'typeorm';
import { IReview } from '../../interfaces/reviews.interface';
import { LocationsEntity } from '../../locations/entities/locations.entity';
import { UsersEntity } from '../../users/entitites/user.entity';
import { BaseEntity } from '../../config/base.entity';

@Entity({ name: 'reviews' })
export class ReviewsEntity extends BaseEntity implements IReview {
  @Column()
  comment: string;

  @ManyToOne(() => UsersEntity, (user) => user.reviews, {
    onDelete: 'CASCADE',
  })
  author: UsersEntity;

  @ManyToOne(() => LocationsEntity, (location) => location.reviews, {
    onDelete: 'CASCADE',
  })
  location: LocationsEntity;
}
