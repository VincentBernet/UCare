import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { styles } from '../style/CurrentProduct_StyleSheet';

import { Text, View } from '../Themed';
import labelComponent from '../subsidiary_components/labels';

import { alternativeAttributes } from '../../commons/alternative.interface';

export default function AlternativeProduct({
	alternativeProductJson,
}: {
	alternativeProductJson: alternativeAttributes;
}) {
	const navigation = useNavigation();
	return (
		<View>
			<Text style={styles.title}> Alternatives </Text>
			<View style={styles.alternativeViewCardContainer}>
				<TouchableOpacity
					onPress={() =>
						navigation.navigate(
							'CurrentProduct',
							alternativeProductJson[0]
						)
					}
				>
					<Card containerStyle={styles.alternativeCard}>
						<Card.Image
							source={{
								uri: alternativeProductJson[0].product_image,
							}}
							style={styles.alternativeImageCard}
						></Card.Image>
						<View style={styles.alternativeCardBottom}>
							<Card.Title style={styles.alternativeTitle}>
								{alternativeProductJson[0].product_title}
							</Card.Title>
						</View>
					</Card>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() =>
						navigation.navigate(
							'CurrentProduct',
							alternativeProductJson[1]
						)
					}
				>
					<Card containerStyle={styles.alternativeCard}>
						<Card.Image
							source={{
								uri: alternativeProductJson[1].product_image,
							}}
							style={styles.alternativeImageCard}
						></Card.Image>
						<View style={styles.alternativeCardBottom}>
							<Card.Title style={styles.alternativeTitle}>
								{alternativeProductJson[1].product_title}
							</Card.Title>
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
