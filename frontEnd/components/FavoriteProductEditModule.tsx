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
import { Text, View } from './Themed';

import { styles } from './style/FavoriteProductEditModule_StyleSheet';

const sampleFavoritesProducts = [
	{
		id: '1',
		imageName: 'image1',
		title: 'Le Bon Haché Cru',
	},
	{
		id: '2',
		imageName: 'image2',
		title: 'Tartare Végétal',
	},
	{
		id: '3',
		imageName: 'image3',
		title: 'Délice de Légumes',
	},
	{
		id: '4',
		imageName: 'image4',
		title: 'Saucisse Végétale',
	},
	{
		id: '5',
		imageName: 'image5',
		title: 'Délice de Légumes',
	},
	{
		id: '6',
		imageName: 'image6',
		title: 'Gallète aux Légumes',
	},
	{
		id: '7',
		imageName: 'image7',
		title: 'Tian de Légumes',
	},
	{
		id: '8',
		imageName: 'image8',
		title: 'Product 8',
	},
	{
		id: '9',
		imageName: 'image9',
		title: 'Product 9',
	},
	{
		id: '10',
		imageName: 'image10',
		title: 'Product 10',
	},
	{
		id: '11',
		imageName: 'image11',
		title: 'Product 11',
	},
	{
		id: '12',
		imageName: 'image12',
		title: 'Product 12',
	},
];

export default function FavoriteProductEditModule({ path }: { path: string }) {
	const navigation = useNavigation();

	const FavProduct = ({ product }: { product: any }) => (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate('CurrentProduct', {
					id: product.id,
					imageName: product.imageName,
					title: product.title,
				})
			}
		>
			<Card containerStyle={styles.productCardContainer}>
				<View style={styles.headerProductViewContainer}>
					<TouchableOpacity
						onPress={() =>
							alert('Deleting this product from your favorites')
						}
					>
						<Card.Image
							source={require('./../assets/images/Icon-Product/cross.png')}
							style={styles.mainImageCrossCard}
						></Card.Image>
					</TouchableOpacity>
					<Card.Image
						source={require('./../assets/images/Icon-Product/love.png')}
						style={styles.mainImageLoveCard}
					></Card.Image>
				</View>
				<Card.Image
					source={require('./../assets/images/Sample-Stub/image1.png')}
					style={styles.mainImageCard}
				></Card.Image>
				<Text style={styles.title}> {product.title}</Text>
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
					keyExtractor={(item) => item.id}
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
