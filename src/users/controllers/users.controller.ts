import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserDTO, UserUpdateDTO } from '../dtos/user.dto';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() userDto: UserDTO) {
    return this.usersService.createUser(userDto);
  }

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':userId')
  getUser(@Param('userId') userId: string) {
    return this.usersService.getUser(userId);
  }

  @Put(':userId')
  updateUser(
    @Param('userId') userId: string,
    @Body() userUpdateDto: UserUpdateDTO,
  ) {
    return this.usersService.updateUser(userId, userUpdateDto);
  }

  @Delete(':userId')
  deleteUser(@Param('userId') userId: string) {
    return this.usersService.deleteUser(userId);
  }
}
