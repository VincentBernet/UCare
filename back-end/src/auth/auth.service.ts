import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compareHash } from './hash';
import { userDto } from 'src/dto/userDto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(mail: string, password: string): Promise<any> {
    const user = await this.usersService.findUserByMail(mail);
    const goodPassword = await compareHash(password, user.password);
    if (user && goodPassword) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: userDto) {
    const payload = { mail: user.mail, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
