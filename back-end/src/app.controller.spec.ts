import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "UCare backend is responding!"', () => {
      expect(appController.getResponse()).toBe(
        'UCare backend is responding ! \n Please check the swagger documentation for more information on our API : https://ucare-backend.herokuapp.com/swagger',
      );
    });
  });
});
