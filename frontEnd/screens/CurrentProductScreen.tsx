import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, ActivityIndicator } from 'react-native';

import CurrentProduct from '../components/main_components/CurrentProduct';
import AlternativeProduct from '../components/main_components/AlternativeProduct';

import { View } from '../components/Themed';

import { styles } from './style/CurrentProductScreen_StyleSheet';
import { productAttributes } from '../commons/product.interface';
import { alternativeAttributes } from '../commons/alternative.interface';
import { retrieveAlternativeInformation } from '../commons/callApi.utils';
import { useState } from 'react';

export default function CurrentProductScreen({ route }: { route: any }) {
	const [alternativeProductReady, setAlternativeProductReady] =
		useState(false);
	const { productAttributes } = route.params;
	const sampleAlternativesProducts: alternativeAttributes = [
		{
			product_id: 1,
			product_title: 'Le Bon Haché Cru',
			product_image:
				'https://media.lesechos.com/api/v1/images/view/5d7a5855d286c22eaf798fa5/1280x720/0601864134058-web-tete.jpg',

			nustriscore_grade: 'a',
			nova_group: '4',
			ecoscore_grade: 'a',

			vegan: true,
			vegetarian: true,
			palmOilFree: true,
		},
		{
			product_id: 2,
			product_title: 'Purée Délice',
			product_image:
				'https://media.carrefour.fr/medias/6837a728287a343ba2764d7eb1bcd60f/p_540x540/3083681066845-photosite-20211130-082705-0.jpg',
			nustriscore_grade: 'a',
			nova_group: '4',
			ecoscore_grade: 'a',

			vegan: true,
			vegetarian: true,
			palmOilFree: true,
		},
	];
	const waitingForAlternativeProducts = async (
		firstCatego: productAttributes['firstCatego']
	): Promise<alternativeAttributes> => {
		const alternativeProductJson: alternativeAttributes =
			await retrieveAlternativeInformation(firstCatego);
		setAlternativeProductReady(true);
		console.log(alternativeProductJson);
		return alternativeProductJson;
	};

	return (
		<View style={styles.container}>
			<CurrentProduct currentProductJson={route.params} />

			{!alternativeProductReady ? (
				<View
					style={{
						marginTop: 70,
						display: 'flex',
						flexDirection: 'row',
					}}
				>
					<ActivityIndicator
						size="large"
						color="#0000ff"
						style={{ transform: [{ scale: 2 }], marginRight: 100 }}
					/>
					<ActivityIndicator
						size="large"
						color="#0000ff"
						style={{ transform: [{ scale: 2 }] }}
					/>
				</View>
			) : (
				<AlternativeProduct
					alternativeProductJson={waitingForAlternativeProducts(
						productAttributes.firstCatego
					)}
				/>
			)}
			{/* Use a light status bar on iOS to account for the black space above the modal */}
			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
		</View>
	);
}
