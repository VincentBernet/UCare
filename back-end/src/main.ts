import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import fs = require('fs');

async function bootstrap() {
  /*const httpsOptions = {
    key: fs.readFileSync('./../../ressource/localhost-key.pem') || '',
    cert: fs.readFileSync('./../../ressource/localhost.pem') || '',
  };*/
  const app = await NestFactory.create(AppModule /*httpsOptions*/);
  app.enableCors();
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
