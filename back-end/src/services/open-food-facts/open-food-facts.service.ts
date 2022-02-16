import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from 'nestjs-http-promise';
import { productFormated } from './interfaces/productResponse.interface';
import { parseValuableInformation } from './open-food-facts.utils';

@Injectable()
export class OpenFoodFactsService {
  constructor(private http: HttpService) {}
  async getProductInformation(id): Promise<productFormated> {
    let productInformationReduced = this.http
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
          '"}',
      )
      .catch((err): string => {
        throw new HttpException(err.response.data, err.response.status);
      });

    let productInformationFormated = await parseValuableInformation(
      await productInformationReduced,
    );

    console.log(
      'UCare back-end has been called and return : \n',
      productInformationFormated,
    );

    return productInformationFormated;
  }
}
