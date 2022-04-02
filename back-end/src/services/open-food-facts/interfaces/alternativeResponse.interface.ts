import { product, productFormated } from './productResponse.interface';

export type alternative = Array<product>;

export interface alternativeFormated extends Array<productFormated> {
  alternativesProducts: Array<productFormated>;
}
