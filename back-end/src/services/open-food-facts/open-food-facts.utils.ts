import { productFormated } from './interfaces/productResponse.interface';
import { alternativeFormated } from './interfaces/alternativeResponse.interface';

export function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const parseValuableInformation = (
  productInformation: string,
): productFormated => {
  let productInformationJSON = JSON.parse(productInformation);

  let productInformationFormated: productFormated = {} as productFormated;
  productInformationFormated = productInformationJSON;

  productInformationFormated.firstCatego =
    productInformationJSON.categories_hierarchy.split('en:')[1].split(',')[0];

  productInformationFormated.vegan = isVegan(productInformationJSON);
  productInformationFormated.vegetarian = isVegetarian(productInformationJSON);
  productInformationFormated.palmOilFree = isPalmOilFree(
    productInformationJSON,
  );

  return productInformationFormated;
};

export const parseValuableInformationAlternative = (
  productInformation: string,
): alternativeFormated => {
  let productInformationJSON = JSON.parse(productInformation);

  let productInformationFormated: alternativeFormated =
    {} as alternativeFormated;
  productInformationFormated = productInformationJSON;

  // TODO: Faire une fonction pour formater le nombre d'alternative données
  productInformationFormated.alternativesProducts[0].firstCatego =
    productInformationJSON.alternativesProducts[0].categories_hierarchy
      .split('en:')[1]
      .split(',')[0];

  productInformationFormated.alternativesProducts[0].vegan = isVegan(
    productInformationJSON.alternativesProducts[0],
  );
  productInformationFormated.alternativesProducts[0].vegetarian = isVegetarian(
    productInformationJSON.alternativesProducts[0],
  );
  productInformationFormated.alternativesProducts[0].palmOilFree =
    isPalmOilFree(productInformationJSON.alternativesProducts[0]);

  productInformationFormated.alternativesProducts[1].firstCatego =
    productInformationJSON.alternativesProducts[1].categories_hierarchy
      .split('en:')[1]
      .split(',')[0];

  productInformationFormated.alternativesProducts[1].vegan = isVegan(
    productInformationJSON.alternativesProducts[1],
  );
  productInformationFormated.alternativesProducts[1].vegetarian = isVegetarian(
    productInformationJSON.alternativesProducts[1],
  );
  productInformationFormated.alternativesProducts[1].palmOilFree =
    isPalmOilFree(productInformationJSON.alternativesProducts[1]);

  return productInformationFormated;
};

/* function to verify if the product is vegan */
const isVegan = (productInformationJSON): boolean => {
  if (productInformationJSON.ingredients_analysis_tags.includes('non-vegan')) {
    return false;
  } else {
    return true;
  }
};

/* function to verify if the product is vegetarian */
const isVegetarian = (productInformationJSON): boolean => {
  if (
    productInformationJSON.ingredients_analysis_tags.includes('non-vegetarian')
  ) {
    return false;
  } else {
    return true;
  }
};

/* function to verify if the product is vegetarian */
const isPalmOilFree = (productInformationJSON): boolean => {
  if (
    productInformationJSON.ingredients_analysis_tags.includes('palm-oil-free')
  ) {
    return true;
  } else {
    return false;
  }
};
