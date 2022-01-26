import { Test, TestingModule } from '@nestjs/testing';
import { OpenFoodFactsService } from './open-food-facts.service';

describe('OpenFoodFactsService', () => {
  let service: OpenFoodFactsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenFoodFactsService],
    }).compile();

    service = module.get<OpenFoodFactsService>(OpenFoodFactsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
