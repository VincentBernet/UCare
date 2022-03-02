export interface product {
  product_id: number;
  product_title: string;
  product_image?: string;
  nustriscore_grade?: string;
  ecoscore_grade?: string;
  nova_group?: string;
  ingredients_analysis_tags?: string;
  categories_hierarchy?: string;
}

export interface productFormated extends product {
  firstCatego: string;
  vegan: boolean;
  vegetarian: boolean;
  palmOilFree: boolean;
}
