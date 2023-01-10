import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ErrorManager } from '../../utils/error.manager';
import { UserDTO, UserUpdateDTO } from '../dto/user.dto';
import { UsersEntity } from '../entitites/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) {}

  public async createUser(body: UserDTO): Promise<UsersEntity> {
    const user = await this.userRepository.save(body);
    if (!user) {
      throw new ConflictException(`Could not create user`);
    }
    return user;
  }

  public getUsers(): Promise<UsersEntity[]> {
    return this.userRepository.find();
  }

  public async getUser(userId: string): Promise<UsersEntity> {
    try {
      const user = await this.userRepository.findOne({ where: { id: userId } });
      if (!user) {
        throw new NotFoundException(`User ${userId} not found`);
      }
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError({
        message: error.message,
        status: error.status,
      });
    }
  }

  public async updateUser(
    userId: string,
    body: UserUpdateDTO,
  ): Promise<UpdateResult> {
    try {
      return await this.userRepository.update(userId, body);
    } catch (error) {
      throw ErrorManager.createSignatureError({
        message: error.message,
        status: error.status,
      });
    }
  }

  public async deleteUser(userId: string): Promise<DeleteResult> {
    try {
      return await this.userRepository.delete({ id: userId });
    } catch (error) {
      throw ErrorManager.createSignatureError({
        message: error.message,
        status: error.status,
      });
    }
  }
}
