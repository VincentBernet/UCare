import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { OpenFoodFactsService } from './services/open-food-facts/open-food-facts.service';
import { UsersController } from './controllers/users/users.controller';
import { HttpModule } from 'nestjs-http-promise';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [HttpModule, AuthModule, UsersModule],
  controllers: [AppController, ProductsController, UsersController, AuthController],
  providers: [AppService, OpenFoodFactsService],
})
export class AppModule {}
