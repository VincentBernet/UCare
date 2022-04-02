import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { hashPassword } from './../auth/hash';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(user: User) {
    const hashedPassword = await hashPassword(user.password);
    const securedUser = { ...user, password: hashedPassword };
    return this.usersRepository.save(securedUser);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findUserByMail(mail: string): Promise<User> {
    return this.usersRepository.findOne({ where: { mail: mail } });
  }

  async remove(mail: string): Promise<void> {
    await this.usersRepository.delete(mail);
  }

  async getProfile(id: number) {
    const { password, userId, ...profile } = await this.usersRepository.findOne(
      id,
    );
    return profile;
  }
}
