import { productAttributes } from './product.interface';
import { alternativeAttributes } from './alternative.interface';

export const retrieveProductInformation = async (
	codeBar: number
): Promise<productAttributes> => {
	let json: productAttributes = { product_id: codeBar };
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

export const retrieveAlternativeInformation = async (
	firstCategory?: string
): Promise<alternativeAttributes> => {
	let json: alternativeAttributes = [{ firstCatego: firstCategory }];
	try {
		const endpointUrl =
			'https://ucare-backend.herokuapp.com/category/' +
			firstCategory +
			'.json';
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
