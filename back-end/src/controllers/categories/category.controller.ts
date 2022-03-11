// Se limiter seulement à la définition d'endpoint au niveau des controllers, et mettre la logique au niveau des services.
import { Controller, Get, Param } from '@nestjs/common';
import { OpenFoodFactsService } from '../../services/open-food-facts/open-food-facts.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private openFoodFactsService: OpenFoodFactsService) {}

  @Get(':category')
  getAlternativeProducts(@Param('category') category: string) {
    return this.openFoodFactsService.getAlternativeProductInformation(category);
  }
}
