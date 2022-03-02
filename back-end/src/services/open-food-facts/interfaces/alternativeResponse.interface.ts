import { product, productFormated } from './productResponse.interface';

export interface alternative extends Array<product> {}

export interface alternativeFormated extends Array<productFormated> {
  alternativesProducts: any;
}
