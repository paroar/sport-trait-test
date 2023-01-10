import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserDTO, UserUpdateDTO } from '../dto/user.dto';
import { UsersService } from '../services/users.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Create user' })
  @Post()
  createUser(@Body() userDto: UserDTO) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Get users' })
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @ApiOperation({ summary: 'Get user by id' })
  @Get(':userId')
  getUser(@Param('userId') userId: string) {
    return this.usersService.getUser(userId);
  }

  @ApiOperation({ summary: 'Update user' })
  @Put(':userId')
  updateUser(
    @Param('userId') userId: string,
    @Body() userUpdateDto: UserUpdateDTO,
  ) {
    return this.usersService.updateUser(userId, userUpdateDto);
  }

  @ApiOperation({ summary: 'Delete user' })
  @Delete(':userId')
  deleteUser(@Param('userId') userId: string) {
    return this.usersService.deleteUser(userId);
  }
}
