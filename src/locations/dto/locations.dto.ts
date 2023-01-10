import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class LocationDTO {
  @ApiProperty({
    example: 'location name',
    description: 'The name of the location',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: '4236 Ocello Street',
    description: 'The address of the location',
  })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({
    example: '8am-9pm',
    description: 'The opening hours of the location',
  })
  @IsNotEmpty()
  @IsString()
  openingHours: string;
}

export class LocationUpdateDTO {
  @ApiProperty({
    example: 'location name',
    description: 'The name of the location',
  })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({
    example: '4236 Ocello Street',
    description: 'The address of the location',
  })
  @IsOptional()
  @IsString()
  address: string;

  @ApiProperty({
    example: '8am-9pm',
    description: 'The opening hours of the location',
  })
  @IsOptional()
  @IsString()
  openingHours: string;
}
