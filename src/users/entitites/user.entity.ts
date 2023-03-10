import { Column, Entity, OneToMany } from 'typeorm';
import { ReviewsEntity } from '../../reviews/entities/reviews.entity';
import { BaseEntity } from '../../config/base.entity';
import { IUser } from '../../interfaces/user.interface';

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity implements IUser {
  @Column({ unique: true })
  username: string;

  @OneToMany(() => ReviewsEntity, (review) => review.author)
  reviews: ReviewsEntity[];
}
