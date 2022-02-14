// Future interface for the productJson returned by the API
export interface productAttributes {
	product_id?: number;
	product_title?: string;
	product_image?: string;

	nustriscore_grade?: string;
	nova_group?: string;
	ecoscore_grade?: string;

	vegan?: boolean;
	vegetarian?: boolean;
	palmOilFree?: boolean;
}

export const retrieveProductInformation = async (
	codeBar: number
): Promise<productAttributes> => {
	let json: productAttributes = {};
	try {
		const endpointUrl =
			'https://ucare-backend.herokuapp.com/products/' + codeBar + '.json';
		console.log('Console Log before calling Ucare API at : ' + endpointUrl);
		await fetch(endpointUrl).then((response) =>
			response
				.json()
				.then((data) => ({
					data: data,
					status: response.status,
				}))
				.then((res) => {
					json = res.data;
				})
		);
	} catch (error) {
		console.log('We got some error with the api call chef: ' + error);
		console.error(error);
	}
	return json;
};
