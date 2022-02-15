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
import { productAttributes } from './../../commons/product.interface';

const sampleFavoritesProducts: Array<productAttributes> = [
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

export default function FavoriteProductEditModule({ path }: { path: string }) {
	const navigation = useNavigation();

	const FavProduct = ({ product }: { product: any }) => (
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
				<Text style={styles.title}> {product.product_title}</Text>
			</Card>
		</TouchableOpacity>
	);

	const renderProduct = ({ item }: any) => <FavProduct product={item} />;

	return (
		<View style={styles.globalProductContainer}>
			<SafeAreaView>
				<FlatList
					data={sampleFavoritesProducts}
					renderItem={renderProduct}
					keyExtractor={(item) => item.product_id.toString()}
				/>
			</SafeAreaView>
			{/* <View style={styles.globalProductContainer}></View> */}
		</View>
	);
}

function handleHelpPress() {
	WebBrowser.openBrowserAsync(
		'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
	);
}
