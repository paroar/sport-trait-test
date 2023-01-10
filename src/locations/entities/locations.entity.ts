import { Column, Entity, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ILocation } from '../../interfaces/locations.interface';
import { BaseEntity } from '../../config/base.entity';
import { ReviewsEntity } from '../../reviews/entities/reviews.entity';

@Entity({ name: 'locations' })
export class LocationsEntity extends BaseEntity implements ILocation {
  @ApiProperty({
    example: 'location name',
    description: 'The name of the location',
  })
  @Column({ unique: true })
  name: string;

  @ApiProperty({
    example: '4236 Ocello Street',
    description: 'The address of the location',
  })
  @Column()
  address: string;

  @ApiProperty({
    example: '8am-9pm',
    description: 'The opening hours of the location',
  })
  @Column()
  openingHours: string;

  @OneToMany(() => ReviewsEntity, (review) => review.location)
  reviews: ReviewsEntity[];
}
