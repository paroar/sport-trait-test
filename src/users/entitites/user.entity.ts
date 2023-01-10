import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { IUser } from '../../interfaces/user.interface';

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity implements IUser {
  @Column({ unique: true })
  username: string;
}
