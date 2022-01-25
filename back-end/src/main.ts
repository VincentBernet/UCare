import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import fetch from 'node-fetch';

interface Product {
  name: string;
  age: string;
}

// https://world.openfoodfacts.org/api/v0/product/737628064502.json

function getProduct(): Promise<Product[]> {
  // For now, consider the data is stored on a static `users.json` file
  return (
    fetch('/users.json')
      // the JSON body is taken from the response
      .then((res) => res.json())
      .then((res) => {
        // The response has an `any` type, so we need to cast
        // it to the `User` type, and return it from the promise
        return res as Product[];
      })
  );
}

async function bootstrap() {
  console.log('i love cocks');
  getProduct().then((res) => {
    console.log(res);
  });
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
