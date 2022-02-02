import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { OpenFoodFactsService } from './services/open-food-facts/open-food-facts.service';
import { UsersController } from './controllers/users/users.controller';
import { HttpModule } from 'nestjs-http-promise';
import fetch from 'node-fetch';

@Module({
  imports: [HttpModule],
  controllers: [AppController, ProductsController, UsersController],
  providers: [AppService, OpenFoodFactsService],
})
export class AppModule {}
