// Se limiter seulement à la définition d'endpoint au niveau des controllers, et mettre la logique au niveau des services.
import { Controller, Get, Param } from '@nestjs/common';
import { OpenFoodFactsService } from '../../services/open-food-facts/open-food-facts.service';

@Controller('products')
export class ProductsController {
  constructor(private openFoodFactsService: OpenFoodFactsService) {}
  @Get(':id')
  getSpecifcProducts(@Param('id') id: Int32Array) {
    return this.openFoodFactsService.getProductInformation(id);
  }
}
