import { userDto } from 'src/dto/userDto'; 
import {
  Body,
  Controller,
  Get,
  UseGuards,
  Post,
  Request,
} from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('register')
  create(@Body() user: userDto) {
    let newUser = this.usersService.createUser(user);
    return newUser
      .then((value) => {
        return 'User created';
      })
      .catch((err) => {
        return 'Register failed';
      });
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return this.usersService.getProfile(req.body['userId']);
  }

  @UseGuards(JwtAuthGuard)
  @Post('update')
  update(@Body() user: User) {
    return {
      /*TODO*/
    };
  }
}
