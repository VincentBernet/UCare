import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { OpenFoodFactsService } from './services/open-food-facts/open-food-facts.service';
import { UsersController } from './controllers/users/users.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, ProductsController, UsersController],
  providers: [AppService, OpenFoodFactsService],
})
export class AppModule {}
