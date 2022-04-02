import { Test, TestingModule } from '@nestjs/testing';
import { CategoryController } from './category.controller';
import { OpenFoodFactsService } from './../../services/open-food-facts/open-food-facts.service';
import { HttpModule } from 'nestjs-http-promise';

describe('CategoryController', () => {
  let controller: CategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [OpenFoodFactsService],
      controllers: [CategoryController],
    }).compile();

    controller = module.get<CategoryController>(CategoryController);
  });

  it('should be defined', async () => {
    await expect(controller).toBeDefined();
  });
});
