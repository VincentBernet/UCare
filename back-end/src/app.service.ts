import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getResponse(): string {
    return 'UCare backend is responding ! \n Please check the swagger documentation for more information on our API : https://ucare-backend.herokuapp.com/swagger';
  }
}
