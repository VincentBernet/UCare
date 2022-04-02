import { Test, TestingModule } from '@nestjs/testing';
import { OpenFoodFactsService } from './open-food-facts.service';
import { HttpModule } from 'nestjs-http-promise';

describe('OpenFoodFactsService', () => {
  let service: OpenFoodFactsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [OpenFoodFactsService],
    }).compile();

    service = module.get<OpenFoodFactsService>(OpenFoodFactsService);
  });

  it('should be defined', async () => {
    await expect(service).toBeDefined();
  });

  it('should return a product', async () => {
    await expect(service.getProductInformation(8000500037560)).toBeDefined();
  });

  it('should return a category', async () => {
    await expect(
      service.getAlternativeProductInformation('pizza'),
    ).toBeDefined();
  });
});
