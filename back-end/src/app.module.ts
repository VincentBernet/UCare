import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoryController } from './controllers/categories/category.controller';
import { OpenFoodFactsService } from './services/open-food-facts/open-food-facts.service';
import { HttpModule } from 'nestjs-http-promise';

@Module({
  imports: [HttpModule],
  controllers: [AppController, ProductsController, CategoryController],
  providers: [AppService, OpenFoodFactsService],
})
export class AppModule {}
