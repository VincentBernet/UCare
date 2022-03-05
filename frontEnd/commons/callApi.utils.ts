import { productAttributes } from './product.interface';
import { alternativeAttributes } from './alternative.interface';

export const retrieveProductInformation = async (
	codeBar: number
): Promise<productAttributes> => {
	let json: productAttributes = { product_id: codeBar, firstCatego: '' };
	try {
		const endpointUrl =
			'https://ucare-backend.herokuapp.com/products/' + codeBar + '.json';
		console.log(
			'Console Log before calling Ucare Product API at : ' + endpointUrl
		);
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

export const retrieveAlternativeInformation = async (
	firstCategory: string
): Promise<alternativeAttributes> => {
	let json: alternativeAttributes = {
		alternativesProducts: [
			{ product_id: 0, firstCatego: '' },
			{ product_id: 0, firstCatego: '' },
		],
	};
	try {
		const endpointUrl =
			'https://ucare-backend.herokuapp.com/category/' + firstCategory;
		console.log(
			'-------------------------------------------------------------------------------------------------\n' +
				'Calling the following category API :  ' +
				endpointUrl
		);
		await fetch(endpointUrl).then((response) =>
			response
				.json()
				.then((data) => ({
					data: data,
					status: response.status,
				}))
				.then((res) => {
					json = res.data;
					console.log(
						'First alternative  : ' +
							json.alternativesProducts[0].product_title
					);
					console.log(
						'Second alternative : ' +
							json.alternativesProducts[1].product_title
					);
				})
		);
	} catch (error) {
		console.log('We got some error with the api call chef: ' + error);
		console.error(error);
	}
	return json;
};
