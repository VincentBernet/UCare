import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

import { Text, View } from './Themed';

export default function CurrentProductEditModule({ currentProductJson }: { currentProductJson: JSON }) {
	return (
		<View>
			<View style={styles.mainViewCardContainer}>
				<Card containerStyle={styles.mainCard}>
					<Card.Image
						source={require('./../assets/images/CurrentProduct/Sample-Stub/image1.png')}
						style={styles.mainImageCard}
					></Card.Image>
				</Card>

				<Text style={styles.title} > {currentProductJson ? currentProductJson : 'Herta le bon Végétal'} </Text>

				<View style={styles.emojeeView}>
					<Text style={styles.textForEmojee}>Unfriendly</Text>
					<Card.Image
						source={require('./../assets/images/CurrentProduct/emojeeAngry.png')}
						style={styles.emojee}
					></Card.Image>
				</View>

				<View style={styles.labelViewCardContainer}>
					<Card containerStyle={styles.secondaryFirstCard}>
						<View style={styles.viewForLabelText}>
							<Card.Image
								source={require('./../assets/images/CurrentProduct/vegan.png')}
								style={styles.labelCard}
							></Card.Image>
							<Text style={styles.textLabel}>Vegan</Text>
						</View>
					</Card>
					<Card containerStyle={styles.secondaryCard}>
						<View style={styles.viewForLabelText}>
							<Card.Image
								source={require('./../assets/images/CurrentProduct/sugarFree.png')}
								style={styles.labelCard}
							></Card.Image>
							<Text style={styles.textLabel}>Diabète</Text>
						</View>
					</Card>
					<Card containerStyle={styles.secondaryCard}>
						<View style={styles.viewForLabelText}>
							<Card.Image
								source={require('./../assets/images/CurrentProduct/glutenFree.png')}
								style={styles.labelCard}
							></Card.Image>
							<Text style={styles.textLabel}>Gluten free</Text>
						</View>
					</Card>
				</View>
			</View >

			<Text style={styles.title}> Alternatives </Text>

			<View style={styles.alternativeViewCardContainer}>
				<Card containerStyle={styles.alternativeCard}>
					<Card.Image
						source={require('./AlternativeImageOne.png')}
						style={styles.alternativeImageCard}
					></Card.Image>
					<Card.Divider
						style={{
							borderStartColor: '#FF5E5B',
							backgroundColor: '#FF5E5B',
						}}
					/>
					<Card.Title style={styles.alternativeTitle}>
						Sensational Haché
					</Card.Title>
				</Card>

				<Card containerStyle={styles.alternativeCard}>
					<Card.Image
						source={require('./AlternativeImageTwo.png')}
						style={styles.alternativeImageCard}
					></Card.Image>
					<Card.Divider />
					<Card.Title style={styles.alternativeTitle}>
						Sojasun Haché
					</Card.Title>
				</Card>
			</View>
		</View >
	);
}

function handleHelpPress() {
	WebBrowser.openBrowserAsync(
		'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
	);
}

const styles = StyleSheet.create({
	mainViewCardContainer: {
		alignItems: 'center',
	},
	mainCard: {
		borderRadius: 20,
		width: '90%',
		height: undefined,
		alignItems: 'center',
	},
	title: {
		fontSize: 25,
		//fontFamily: 'Poppins',
		fontWeight: 'bold',
		marginTop: 10,
		alignContent: 'flex-start',
	},
	emojeeView: { flexDirection: 'row', flexWrap: 'wrap' },
	textForEmojee: { textAlign: 'center', marginRight: 5, fontSize: 22 },
	emojee: { width: 30, height: 30 },
	labelViewCardContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	mainImageCard: {
		width: 240,
		height: 174,
		margin: 10,
	},
	secondaryFirstCard: {
		borderRadius: 30,
		margin: 0,
		padding: 5,
		minWidth: 70,
	},
	secondaryCard: {
		borderRadius: 30,
		margin: 0,
		marginLeft: 35,
		minWidth: 70,
		padding: 5,
	},
	viewForLabelText: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: 'white',
	},
	labelCard: {
		width: 15,
		height: 15,
		justifyContent: 'space-around',
		marginRight: 5,
		marginLeft: 3,
		resizeMode: 'contain',
	},
	textLabel: {
		textAlign: 'center',
		marginRight: 5,
	},

	alternativeViewCardContainer: {
		flexDirection: 'row',
		marginTop: 0,
	},
	alternativeCard: {
		borderRadius: 20,
		paddingBottom: 0,
	},
	alternativeImageCard: {
		width: 112,
		height: 112,
		marginBottom: 10,
	},
	alternativeTitle: { marginTop: 0, paddingTop: 0, paddingBottom: 0 },
});
