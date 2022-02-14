import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getResponse(): string {
    return 'UCare backend is responding!';
  }
}
