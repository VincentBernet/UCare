// Future interface for the productJson returned by the API
export interface productAttributes {
	product_id: number;

	product_title?: string;
	product_image?: string;

	nustriscore_grade?: string;
	nova_group?: string;
	ecoscore_grade?: string;

	vegan?: boolean;
	vegetarian?: boolean;
	palmOilFree?: boolean;

	firstCatego?: string;
}
