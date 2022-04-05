import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoryController } from './controllers/categories/category.controller';
import { OpenFoodFactsService } from './services/open-food-facts/open-food-facts.service';
import { UsersController } from './users/users.controller';
import { HttpModule } from 'nestjs-http-promise';
import { UsersModule } from './users/users.module';
import { TypeOrmModuleConfigured } from './orm.config';

@Module({
  imports: [TypeOrmModuleConfigured, HttpModule, UsersModule ],
  controllers: [
    AppController,
    ProductsController,
    UsersController,
    CategoryController,
  ],
  providers: [AppService, OpenFoodFactsService],
})
export class AppModule {}
