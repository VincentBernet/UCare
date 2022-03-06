import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { styles } from '../style/CurrentProduct_StyleSheet';

import { Text, View } from '../Themed';
import LabelComponent from '../subsidiary_components/Labels';

import { productAttributes } from '../../commons/product.interface';
import WithNutriScoreComponent from '../subsidiary_components/WithNutriScore';
import WithoutNutriScoreComponent from '../subsidiary_components/WithoutNutriScore';

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
							/>
						</TouchableOpacity>
					</View>
					<Card.Image
						source={{ uri: currentProductJson.product_image }}
						style={styles.mainImageCard}
					/>
				</Card>

				<Text style={styles.mainTitle}>
					{currentProductJson.product_title
						? currentProductJson.product_title
						: "Can't access the current \nProduct Title"}
				</Text>
				<View style={styles.containerFriendlyNutri}>
					{currentProductJson.nustriscore_grade !== 'undefined' ? (
						<WithNutriScoreComponent
							currentProductJson={currentProductJson}
						/>
					) : (
						<WithoutNutriScoreComponent
							currentProductJson={currentProductJson}
						/>
					)}
				</View>

				{/*TODO: Put beside code in an external component : <labelComponent />*/}
				<LabelComponent currentProductJson={currentProductJson} />
			</View>
		</View>
	);
}

function handleHelpPress() {
	WebBrowser.openBrowserAsync(
		'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
	);
}
