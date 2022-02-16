// Se limiter seulement à la définition d'endpoint au niveau des controllers, et mettre la logique au niveau des services.
import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  // Vérifier que ce chemin n'est pas puant en terme de sécurité. Password clair etc...
  @Get('/login/:username/:password')
  login(
    @Param('username') username: string,
    @Param('password') password: string,
  ) {
    return {
      message:
        "Vérifier dans la DB si l'username (" +
        username +
        ') match avec le password (' +
        password +
        ') !',
    };
  }

  // Vérifier que ce chemin n'est pas puant en terme de sécurité. Password clair etc...
  @Post('/register')
  register(
    @Param('username') username: string,
    @Param('password') password: string,
  ) {
    return {
      message:
        "Vérifier dans la DB si l'username (" +
        username +
        ") n'existe pas, alors crééer le compte avec pour password (" +
        password +
        ') !',
    };
  }

  @Post('/user/favorites/:productId')
  addFavorites(
    @Param('user') username: string,
    @Param('productId') productId: Int32Array,
  ) {
    return {
      message:
        'Ajout du produit (' +
        productId +
        ") à la liste des favoris de l'utilisateur (" +
        username +
        ')',
    };
  }

  @Delete('/user/favorites/:productId')
  deleteFavorites(
    @Param('user') username: string,
    @Param('productId') productId: Int32Array,
  ) {
    return {
      message:
        'Suppression du produit (' +
        productId +
        ") de la liste des favoris de l'utilisateur (" +
        username +
        ')',
    };
  }
}
