import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';

import { Text, View } from './Themed';

const sampleFavoritesProducts = [
	{
		id: '1',
		imageName: 'image1',
		title: 'Product 1',
	},
	{
		id: '2',
		imageName: 'image2',
		title: 'Product 2',
	},
	{
		id: '3',
		imageName: 'image3',
		title: 'Product 3',
	},
	{
		id: '4',
		imageName: 'image4',
		title: 'Product 4',
	},
	{
		id: '5',
		imageName: 'image5',
		title: 'Product 5',
	},
	{
		id: '6',
		imageName: 'image6',
		title: 'Product 6',
	},
	{
		id: '7',
		imageName: 'image7',
		title: 'Product 7',
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

export default function FavoriteProductModule({ path }: { path: string }) {
	const FavProduct = ({ product }: { product: any }) => (
		<Card containerStyle={styles.productCardContainer}>
			<View style={styles.headerProductViewContainer}>
				<Card.Image
					source={require('./cross.png')}
					style={styles.mainImageCrossCard}
				></Card.Image>
				<Card.Image
					source={require('./love.png')}
					style={styles.mainImageLoveCard}
				></Card.Image>
			</View>
			<Card.Image
				source={require('./image1.png')}
				style={styles.mainImageCard}
			></Card.Image>
			<Text style={styles.title}> {product.title}</Text>
		</Card>
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

const styles = StyleSheet.create({
	globalProductContainer: {
		display: 'flex',
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',
		marginTop: 25,
	},
	productCardContainer: {
		padding: 15,
		paddingBottom: 10,
		margin: 0,
		marginBottom: 15,
		borderRadius: 20,
		width: '100%',
		height: 'auto',
		alignItems: 'center',
	},
	headerProductViewContainer: {
		backgroundColor: '#fff',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	mainImageCard: {
		marginTop: 5,
		marginBottom: 5,
		marginLeft: 18,
		marginRight: 18,
	},
	mainImageLoveCard: {
		margin: 0,
		marginLeft: 205,
		width: 24,
		height: 22,
	},
	mainImageCrossCard: {
		margin: 0,
		width: 24,
		height: 22,
	},
	title: {
		margin: 0,
		padding: 0,
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
