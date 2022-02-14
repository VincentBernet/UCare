import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { styles } from './style/CurrentProductEditModule_StyleSheet';

import { Text, View } from './Themed';
import labelComponent from './labels';

const sampleAlternativesProducts = [
	{
		id: '1',
		imageName: 'image1',
		title: 'Sensational Haché',
	},
	{
		id: '2',
		imageName: 'image2',
		title: 'Sojasun Haché',
	},
];

export default function CurrentProductEditModule({
	currentProductJson,
}: {
	currentProductJson: any;
}) {
	console.log(currentProductJson);
	const navigation = useNavigation();
	return (
		<View>
			<View style={styles.mainViewCardContainer}>
				<Card containerStyle={styles.mainCard}>
					<View style={styles.headerProductViewContainer}>
						<TouchableOpacity
							onPress={
								() => alert('Post Method for backend API') //TODO : post backend request to add product to favorites
							}
						>
							<Card.Image
								source={require('./../assets/images/Icon-Product/love.png')}
								style={styles.mainImageLoveCard}
							></Card.Image>
						</TouchableOpacity>
					</View>
					<Card.Image
						source={{ uri: currentProductJson.product_image }}
						style={styles.mainImageCard}
					></Card.Image>
				</Card>

				<Text style={styles.mainTitle}>
					{currentProductJson.product_title
						? currentProductJson.product_title
						: "Can't access the current \nProduct Title"}
				</Text>

				<View style={styles.emojeeView}>
					<Text style={styles.textForEmojee}>Unfriendly</Text>
					<Card.Image
						source={require('./../assets/images/Icon-Product/emojeeAngry.png')}
						style={styles.emojee}
					></Card.Image>
				</View>

				<View style={styles.labelViewCardContainer}>
					{currentProductJson.vegan ? (
						<Card containerStyle={styles.secondaryFirstCard}>
							<View style={styles.viewForLabelText}>
								<Card.Image
									source={require('./../assets/images/Icon-Product/vegan.png')}
									style={styles.labelCard}
								></Card.Image>
								<Text style={styles.textLabel}>Vegan</Text>
							</View>
						</Card>
					) : null}

					{currentProductJson.vegetarian ? (
						<Card containerStyle={styles.secondaryFirstCard}>
							<View style={styles.viewForLabelText}>
								<Card.Image
									source={require('./../assets/images/Icon-Product/vegan.png')}
									style={styles.labelCard}
								></Card.Image>
								<Text style={styles.textLabel}>Végétarien</Text>
							</View>
						</Card>
					) : null}

					{currentProductJson.palmOilFree ? (
						<Card containerStyle={styles.secondaryFirstCard}>
							<View style={styles.viewForLabelText}>
								<Card.Image
									source={require('./../assets/images/Icon-Product/vegan.png')}
									style={styles.labelCard}
								></Card.Image>
								<Text style={styles.textLabel}>
									Sans huile de palme
								</Text>
							</View>
						</Card>
					) : null}
				</View>
			</View>

			<Text style={styles.title}> Alternatives </Text>

			<View style={styles.alternativeViewCardContainer}>
				<TouchableOpacity
					onPress={() =>
						navigation.navigate('CurrentProduct', {
							id: sampleAlternativesProducts[0].id,
							imageName: sampleAlternativesProducts[0].imageName,
							title: sampleAlternativesProducts[0].title,
						})
					}
				>
					<Card containerStyle={styles.alternativeCard}>
						<Card.Image
							source={require('./../assets/images/Sample-Stub/AlternativeImageOne.png')}
							style={styles.alternativeImageCard}
						></Card.Image>
						<View style={styles.alternativeCardBottom}>
							<Card.Title style={styles.alternativeTitle}>
								{sampleAlternativesProducts[0].title}
							</Card.Title>
						</View>
					</Card>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() =>
						navigation.navigate('CurrentProduct', {
							id: sampleAlternativesProducts[1].id,
							imageName: sampleAlternativesProducts[1].imageName,
							title: sampleAlternativesProducts[1].title,
						})
					}
				>
					<Card containerStyle={styles.alternativeCard}>
						<Card.Image
							source={require('./../assets/images/Sample-Stub/AlternativeImageTwo.png')}
							style={styles.alternativeImageCard}
						></Card.Image>
						<View style={styles.alternativeCardBottom}>
							<Card.Title style={styles.alternativeTitle}>
								{sampleAlternativesProducts[1].title}
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
