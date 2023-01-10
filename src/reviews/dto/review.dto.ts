import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ReviewDTO {
  @IsNotEmpty()
  @IsString()
  comment: string;

  @IsNotEmpty()
  @IsString()
  authorId: string;

  @IsNotEmpty()
  @IsString()
  locationId: string;
}

export class ReviewUpdateDTO {
  @IsOptional()
  @IsString()
  comment: string;
}
