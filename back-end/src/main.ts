import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import fs = require('fs');

async function bootstrap() {
  /*const httpsOptions = {
    key: fs.readFileSync('./../../ressource/localhost-key.pem') || '',
    cert: fs.readFileSync('./../../ressource/localhost.pem') || '',
  };*/
  const app = await NestFactory.create(AppModule /*httpsOptions*/);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Ucare Backend')
    .setDescription('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
    .setVersion('1.2')
    .addTag('products', 'get',)
    .addTag('users', 'get, post, put, delete')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 8080);
}
bootstrap();
