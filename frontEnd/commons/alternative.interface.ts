import { productAttributes } from './product.interface';

// Future interface for the productJson returned by the API
{
  /* export interface alternativeAttributes extends Array<productAttributes> {} */
}

// Future interface for the productJson returned by the API
export interface alternativeAttributes {
	alternativesProducts: Array<productAttributes>;
}
