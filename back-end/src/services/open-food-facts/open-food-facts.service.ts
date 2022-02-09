import { HttpException, Injectable } from '@nestjs/common';
//import { cp } from 'fs';
import { HttpService } from 'nestjs-http-promise';
//import { catchError, map } from 'rxjs/operators';

@Injectable()
export class OpenFoodFactsService {
  constructor(private http: HttpService) {}
  async getProductInformation(id): Promise<JSON> {
    let essentialProductInformation = this.http
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
          '"}',
      )
      .catch((err): string => {
        throw new HttpException(err.response.data, err.response.status);
      });
    // Todo : formater la donnée pour ne renvoyer que les infos nécessaires au front, nottament les "labels" attributes, comprendre comment intéragir avec les observables;
    let essentialProductInformationJson = JSON.parse(
      await essentialProductInformation,
    );
    console.log(
      'UCare back-end has been called and return : \n',
      essentialProductInformationJson,
    );
    return essentialProductInformationJson;
  }
}
