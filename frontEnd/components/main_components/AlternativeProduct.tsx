import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { styles } from '../style/AlternativeProduct_StyleSheet';

import { Text, View } from '../Themed';
import labelComponent from '../subsidiary_components/Labels';

import { productAttributes } from '../../commons/product.interface';
import { sampleProducts } from '../../commons/sampleProducts';
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

	const [alternativeProductJson, setAlternativeProductJson] =
		useState(sampleProducts);

	const waitingForAlternativeProducts = async (
		firstCatego: productAttributes['firstCatego']
	): Promise<alternativeAttributes> => {
		const alternativeProductJson: alternativeAttributes =
			await retrieveAlternativeInformation(firstCatego);
		setAlternativeProductAvailable(true);
		setAlternativeProductJson(alternativeProductJson);
		return alternativeProductJson;
	};

	if (!alternativeProductAvailable) {
		const finalJson = waitingForAlternativeProducts(
			currentProductJson.firstCatego
		);
	}

	return (
		<View>
			<Text style={styles.title}>
				{' '}
				Alternatives {/*currentProductJson.firstCatego*/}
			</Text>
			<View style={styles.alternativeViewCardContainer}>
				<TouchableOpacity
					onPress={() => {
						setAlternativeProductAvailable(false);
						setAlternativeProductJson(sampleProducts);
						navigation.navigate(
							'CurrentProduct',
							alternativeProductJson.alternativesProducts[0]
						);
					}}
				>
					<Card containerStyle={styles.alternativeCard}>
						{alternativeProductAvailable ? (
							<Card.Image
								source={{
									uri: alternativeProductJson.alternativesProducts[0]
										.product_image,
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
								<Card.Title
									numberOfLines={1}
									style={styles.alternativeTitle}
								>
									{
										alternativeProductJson.alternativesProducts[0]
											.product_title
									}
								</Card.Title>
							)}
						</View>
					</Card>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => {
						setAlternativeProductAvailable(false);
						setAlternativeProductJson(sampleProducts);
						navigation.navigate(
							'CurrentProduct',
							alternativeProductJson.alternativesProducts[1]
						);
					}}
				>
					<Card containerStyle={styles.alternativeCard}>
						{alternativeProductAvailable ? (
							<Card.Image
								source={{
									uri: alternativeProductJson.alternativesProducts[1]
										.product_image,
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
								<Card.Title
									numberOfLines={1}
									style={styles.alternativeTitle}
								>
									{
										alternativeProductJson.alternativesProducts[1]
											.product_title
									}
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
