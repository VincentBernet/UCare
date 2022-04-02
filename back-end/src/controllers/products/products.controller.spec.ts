// Todo : add test for products.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { OpenFoodFactsService } from './../../services/open-food-facts/open-food-facts.service';
import { HttpModule } from 'nestjs-http-promise';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [OpenFoodFactsService],
      controllers: [ProductsController],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', async () => {
    await expect(controller).toBeDefined();
  });
});
