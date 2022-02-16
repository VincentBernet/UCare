import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { styles } from '../style/CurrentProductEditModule_StyleSheet';

import { Text, View } from '../Themed';
import labelComponent from '../subsidiary_components/labels';

import { productAttributes } from '../../commons/product.interface';

const sampleAlternativesProducts: Array<productAttributes> = [
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

export default function CurrentProductEditModule({
	currentProductJson,
}: {
	currentProductJson: productAttributes;
}) {
	const navigation = useNavigation();
	return (
		<View>
			<View style={styles.mainViewCardContainer}>
				<Card containerStyle={styles.mainCard}>
					<View style={styles.headerProductViewContainer}>
						<TouchableOpacity
							onPress={
								() => alert('Adding this product to your favorites') //TODO : post backend request to add product to favorites
							}
						>
							<Card.Image
								source={require('./../../assets/images/Icon-Product/love.png')}
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
				{currentProductJson.vegan ||
				currentProductJson.vegetarian ||
				currentProductJson.palmOilFree ? (
					<View style={styles.emojeeView}>
						<Text style={styles.textForEmojee}>Friendly</Text>
						<Card.Image
							source={{
								uri: 'http://clipart-library.com/image_gallery2/Wink-Emoji-PNG.png',
							}}
							style={styles.emojee}
						></Card.Image>
					</View>
				) : (
					<View style={styles.emojeeView}>
						<Text style={styles.textForEmojee}>Unfriendly</Text>
						<Card.Image
							source={require('./../../assets/images/Icon-Product/emojeeAngry.png')}
							style={styles.emojee}
						></Card.Image>
					</View>
				)}

				{/*TODO: Put beside code in an external component : <labelComponent />*/}
				<View style={styles.labelViewCardContainer}>
					{currentProductJson.vegan ? (
						<Card containerStyle={styles.secondaryFirstCard}>
							<View style={styles.viewForLabelText}>
								<Card.Image
									source={require('./../../assets/images/Icon-Product/vegan.png')}
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
									source={require('./../../assets/images/Icon-Product/vegan.png')}
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
									source={require('./../../assets/images/Icon-Product/vegan.png')}
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
						navigation.navigate(
							'CurrentProduct',
							sampleAlternativesProducts[0]
						)
					}
				>
					<Card containerStyle={styles.alternativeCard}>
						<Card.Image
							source={{
								uri: sampleAlternativesProducts[0].product_image,
							}}
							style={styles.alternativeImageCard}
						></Card.Image>
						<View style={styles.alternativeCardBottom}>
							<Card.Title style={styles.alternativeTitle}>
								{sampleAlternativesProducts[0].product_title}
							</Card.Title>
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
						<Card.Image
							source={{
								uri: sampleAlternativesProducts[1].product_image,
							}}
							style={styles.alternativeImageCard}
						></Card.Image>
						<View style={styles.alternativeCardBottom}>
							<Card.Title style={styles.alternativeTitle}>
								{sampleAlternativesProducts[1].product_title}
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
