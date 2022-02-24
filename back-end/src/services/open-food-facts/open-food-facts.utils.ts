import { productFormated } from './interfaces/productResponse.interface';

export const parseValuableInformation = (
  productInformation: string,
): productFormated => {
  let productInformationJSON = JSON.parse(productInformation);

  let productInformationFormated: productFormated = {} as productFormated;
  productInformationFormated = productInformationJSON;

  productInformationFormated.vegan = isVegan(productInformationJSON);
  productInformationFormated.vegetarian = isVegetarian(productInformationJSON);
  productInformationFormated.palmOilFree = isPalmOilFree(
    productInformationJSON,
  );

  return productInformationFormated;
};

export const parseValuableInformationAlternative = (
  productInformation: string,
): productFormated => {
  let productInformationJSON = JSON.parse(productInformation);

  let productInformationFormated: productFormated = {} as productFormated;
  productInformationFormated = productInformationJSON;

  productInformationFormated.vegan = isVegan(productInformationJSON);
  productInformationFormated.vegetarian = isVegetarian(productInformationJSON);
  productInformationFormated.palmOilFree = isPalmOilFree(
    productInformationJSON,
  );

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
