import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from 'nestjs-http-promise';
import { productFormated } from './interfaces/productResponse.interface';
import { alternativeFormated } from './interfaces/alternativeResponse.interface';
import {
  parseValuableInformation,
  parseValuableInformationAlternative,
  randomIntFromInterval,
} from './open-food-facts.utils';

@Injectable()
export class OpenFoodFactsService {
  constructor(private http: HttpService) {}
  async getProductInformation(id): Promise<productFormated> {
    const productInformationReduced = this.http
      .get('https://world.openfoodfacts.org/api/v0/product/' + id + '.json')
      .then(
        (response): string =>
          '{"product_id":"' +
          response.data.product._id +
          '", "product_title":"' +
          response.data.product.product_name +
          '", "product_image":"' +
          response.data.product.image_front_small_url +
          '", "nustriscore_grade":"' +
          response.data.product.nutrition_grades +
          '", "ecoscore_grade":"' +
          response.data.product.ecoscore_grade +
          '", "nova_group":"' +
          response.data.product.nova_group +
          '", "ingredients_analysis_tags":"' +
          response.data.product.ingredients_analysis_tags +
          '", "categories_hierarchy":"' +
          response.data.product.categories_hierarchy +
          '"}',
      )
      .catch((err): string => {
        throw new HttpException(err.response.data, err.response.status);
      });

    const productInformationFormated = await parseValuableInformation(
      await productInformationReduced,
    );

    console.log(
      '-----------------------------------------------------------\n',
      'UCare back-end products endpoint has been called and return :',
      '\n',
      productInformationFormated,
      '\n-----------------------------------------------------------',
    );

    return productInformationFormated;
  }

  async getAlternativeProductInformation(
    category,
  ): Promise<alternativeFormated> {
    const firstRandomIndex = randomIntFromInterval(0, 10);
    const secondRandomIndex = firstRandomIndex + randomIntFromInterval(0, 10);
    const alternativeProductInformationReduced = this.http
      .get('https://world.openfoodfacts.org/category/' + category + '.json')
      .then(
        (response): string =>
          '{"alternativesProducts":[{"product_id":"' +
          response.data.products[firstRandomIndex]._id +
          '", "product_title":"' +
          response.data.products[firstRandomIndex].product_name +
          '", "product_image":"' +
          response.data.products[firstRandomIndex].image_front_small_url +
          '", "nustriscore_grade":"' +
          response.data.products[firstRandomIndex].nutrition_grades +
          '", "ecoscore_grade":"' +
          response.data.products[firstRandomIndex].ecoscore_grade +
          '", "nova_group":"' +
          response.data.products[firstRandomIndex].nova_group +
          '", "ingredients_analysis_tags":"' +
          response.data.products[firstRandomIndex].ingredients_analysis_tags +
          '", "categories_hierarchy":"' +
          response.data.products[firstRandomIndex].categories_hierarchy +
          '"}' +
          ',{"product_id":"' +
          response.data.products[secondRandomIndex]._id +
          '", "product_title":"' +
          response.data.products[secondRandomIndex].product_name +
          '", "product_image":"' +
          response.data.products[secondRandomIndex].image_front_small_url +
          '", "nustriscore_grade":"' +
          response.data.products[secondRandomIndex].nutrition_grades +
          '", "ecoscore_grade":"' +
          response.data.products[secondRandomIndex].ecoscore_grade +
          '", "nova_group":"' +
          response.data.products[secondRandomIndex].nova_group +
          '", "ingredients_analysis_tags":"' +
          response.data.products[secondRandomIndex].ingredients_analysis_tags +
          '", "categories_hierarchy":"' +
          response.data.products[secondRandomIndex].categories_hierarchy +
          '"}]}',
      )
      .catch((err): string => {
        throw new HttpException(err.response.data, err.response.status);
      });

    const alternativeInformationFormated =
      await parseValuableInformationAlternative(
        await alternativeProductInformationReduced,
      );

    console.log(
      '-----------------------------------------------------------\n',
      'UCare back-end category endpoint has been called and return :',
      '\n',
      alternativeInformationFormated,
      '\n-----------------------------------------------------------',
    );

    return alternativeInformationFormated;
  }
}
