import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { styles } from '../style/CurrentProduct_StyleSheet';

import { Text, View } from '../Themed';

import { productAttributes } from '../../commons/product.interface';

export default function CurrentProduct({
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
		</View>
	);
}

function handleHelpPress() {
	WebBrowser.openBrowserAsync(
		'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
	);
}
