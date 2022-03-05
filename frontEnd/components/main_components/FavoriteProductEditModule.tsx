import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import {
	SafeAreaView,
	FlatList,
	StyleSheet,
	StatusBar,
	TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from './../Themed';

import { styles } from './../style/FavoriteProductEditModule_StyleSheet';
import { sampleProducts } from '../../commons/sampleProducts';
import { productAttributes } from '../../commons/product.interface';

export default function FavoriteProductEditModule({ path }: { path: string }) {
	const navigation = useNavigation();

	const FavProduct = ({ product }: { product: productAttributes }) => (
		<TouchableOpacity
			onPress={() => navigation.navigate('CurrentProduct', product)}
		>
			<Card containerStyle={styles.productCardContainer}>
				<View style={styles.headerProductViewContainer}>
					<TouchableOpacity
						onPress={() =>
							alert('Deleting this product from your favorites')
						}
					>
						<Card.Image
							source={require('./../../assets/images/Icon-Product/cross.png')}
							style={styles.mainImageCrossCard}
						></Card.Image>
					</TouchableOpacity>
					<Card.Image
						source={require('./../../assets/images/Icon-Product/love.png')}
						style={styles.mainImageLoveCard}
					></Card.Image>
				</View>
				<Card.Image
					source={{ uri: product.product_image }}
					style={styles.mainImageCard}
				></Card.Image>
				<Text style={styles.title} numberOfLines={1}>
					{' '}
					{product.product_title}
				</Text>
			</Card>
		</TouchableOpacity>
	);

	const renderProduct = ({ item }: any) => <FavProduct product={item} />;

	return (
		<View style={styles.globalProductContainer}>
			<SafeAreaView>
				<FlatList
					data={sampleProducts.alternativesProducts}
					renderItem={renderProduct}
					keyExtractor={(item) => item.product_id.toString()}
				/>
			</SafeAreaView>
		</View>
	);
}

function handleHelpPress() {
	WebBrowser.openBrowserAsync(
		'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
	);
}
