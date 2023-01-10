import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  username: string;
}

export class UserUpdateDTO {
  @IsOptional()
  @IsString()
  username: string;
}
