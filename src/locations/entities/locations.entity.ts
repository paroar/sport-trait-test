import { Column, Entity, OneToMany } from 'typeorm';
import { ILocation } from '../../interfaces/locations.interface';
import { BaseEntity } from '../../config/base.entity';
import { ReviewsEntity } from '../../reviews/entities/reviews.entity';

@Entity({ name: 'locations' })
export class LocationsEntity extends BaseEntity implements ILocation {
  @Column({ unique: true })
  name: string;

  @Column()
  address: string;

  @Column()
  openingHours: string;

  @OneToMany(() => ReviewsEntity, (review) => review.location)
  reviews: ReviewsEntity[];
}
