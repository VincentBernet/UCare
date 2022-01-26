import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class OpenFoodFactsService {
  constructor(private http: HttpService) {}
  getProductInformation(id) {
    let fullProductInformation = this.http
      .get('https://world.openfoodfacts.org/api/v0/product/' + id + '.json')
      .pipe(map((response) => response.data));
    // Todo : formater la donnée pour ne renvoyer que les infos nécessaires au front, nottament les "labels" attributes, comprendre comment intéragir avec les observables
    let essentialProductInformation = fullProductInformation;
    return essentialProductInformation;
  }
}
