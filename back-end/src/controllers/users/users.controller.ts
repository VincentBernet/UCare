// Se limiter seulement à la définition d'endpoint au niveau des controllers, et mettre la logique au niveau des services.
import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/login')
  login(
    @Param('username') username: string,
    @Param('password') password: string,
  ) {
    return {
      message: "Vérifier dans la DB si l'username match avec un password !",
    };
  }
  @Post('/register')
  register(
    @Param('username') username: string,
    @Param('password') password: string,
  ) {
    return {
      message:
        "Vérifier dans la DB si l'username n'existe pas, alors crééer le compte !",
    };
  }
}
