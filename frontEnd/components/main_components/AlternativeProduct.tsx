import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { styles } from '../style/AlternativeProduct_StyleSheet';

import { Text, View } from '../Themed';
import labelComponent from '../subsidiary_components/labels';

import { productAttributes } from '../../commons/product.interface';
import { alternativeAttributes } from '../../commons/alternative.interface';
import { retrieveAlternativeInformation } from '../../commons/callApi.utils';

export default function AlternativeProduct({
	currentProductJson,
}: {
	currentProductJson: productAttributes;
}) {
	const navigation = useNavigation();
	const [alternativeProductAvailable, setAlternativeProductAvailable] =
		useState(false);

	const waitingForAlternativeProducts = async (
		firstCatego: productAttributes['firstCatego']
	): Promise<alternativeAttributes> => {
		const alternativeProductJson: alternativeAttributes =
			await retrieveAlternativeInformation(firstCatego);
		setAlternativeProductAvailable(true);
		return alternativeProductJson;
	};

	const finalJson = waitingForAlternativeProducts(
		currentProductJson.firstCatego
	);

	const sampleAlternativesProducts: alternativeAttributes = [
		{
			product_id: 1,
			product_title: 'Le Bon Haché Cru',
			product_image:
				'https://media.lesechos.com/api/v1/images/view/5d7a5855d286c22eaf798fa5/1280x720/0601864134058-web-tete.jpg',
			firstCatego: 'pizza',

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
			firstCatego: 'pizza',

			nustriscore_grade: 'a',
			nova_group: '4',
			ecoscore_grade: 'a',

			vegan: true,
			vegetarian: true,
			palmOilFree: true,
		},
	];

	return (
		<View>
			<Text style={styles.title}> Alternatives </Text>
			<View style={styles.alternativeViewCardContainer}>
				<TouchableOpacity
					onPress={() =>
						navigation.navigate(
							'CurrentProduct',
							sampleAlternativesProducts[0]
						)
					}
				>
					<Card containerStyle={styles.alternativeCard}>
						{alternativeProductAvailable ? (
							<Card.Image
								source={{
									uri: sampleAlternativesProducts[0].product_image,
								}}
								style={styles.alternativeImageCard}
							></Card.Image>
						) : (
							<View style={styles.alternativeContainerForLoader}>
								<ActivityIndicator
									size="large"
									color="#FF5E5B"
									style={{ transform: [{ scale: 1.5 }] }}
								/>
							</View>
						)}
						<View style={styles.alternativeCardBottom}>
							{alternativeProductAvailable && (
								<Card.Title style={styles.alternativeTitle}>
									{sampleAlternativesProducts[0].product_title}
								</Card.Title>
							)}
						</View>
					</Card>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() =>
						navigation.navigate(
							'CurrentProduct',
							sampleAlternativesProducts[1]
						)
					}
				>
					<Card containerStyle={styles.alternativeCard}>
						{alternativeProductAvailable ? (
							<Card.Image
								source={{
									uri: sampleAlternativesProducts[1].product_image,
								}}
								style={styles.alternativeImageCard}
							></Card.Image>
						) : (
							<View style={styles.alternativeContainerForLoader}>
								<ActivityIndicator
									size="large"
									color="#FF5E5B"
									style={{ transform: [{ scale: 1.5 }] }}
								/>
							</View>
						)}
						<View style={styles.alternativeCardBottom}>
							{alternativeProductAvailable && (
								<Card.Title style={styles.alternativeTitle}>
									{sampleAlternativesProducts[1].product_title}
								</Card.Title>
							)}
						</View>
					</Card>
				</TouchableOpacity>
			</View>
		</View>
	);
}

function handleHelpPress() {
	WebBrowser.openBrowserAsync(
		'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
	);
}
