import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UserDTO {
  @ApiProperty({
    example: 'Ted',
    description: 'The username of the User',
  })
  @IsNotEmpty()
  @IsString()
  username: string;
}

export class UserUpdateDTO {
  @ApiProperty({
    example: 'Ted',
    description: 'The username of the User',
  })
  @IsOptional()
  @IsString()
  username: string;
}
