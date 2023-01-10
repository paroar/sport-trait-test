import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ReviewDTO {
  @ApiProperty({
    example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description: 'The comment of the review',
  })
  @IsNotEmpty()
  @IsString()
  comment: string;

  @ApiProperty({
    example: '23e4567-e89b-12d3-a456-426614174000',
    description: 'The user id',
  })
  @IsNotEmpty()
  @IsString()
  authorId: string;

  @ApiProperty({
    example: '23e4567-e89b-12d3-a456-426614174000',
    description: 'The location id',
  })
  @IsNotEmpty()
  @IsString()
  locationId: string;
}

export class ReviewUpdateDTO {
  @ApiProperty({
    example: 'Ted',
    description: 'The username of the User',
  })
  @IsOptional()
  @IsString()
  comment: string;
}
