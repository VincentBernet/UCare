import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

import { Text, View } from './Themed';

export default function EditScreenInfo({ path }: { path: string }) {
	return (
		<View>
			<View style={styles.mainViewCardContainer}>
				<Card containerStyle={styles.mainCard}>
					<Card.Image source={require('./hacher.png')} style={styles.mainImageCard}></Card.Image>
				</Card>
				<Text style={styles.title}> Herta Le bon Végétal </Text>
				<Card.Divider/>
				<View style={styles.labelViewCardContainer}>
					<Card containerStyle={styles.secondaryFirstCard}>
						<View style={styles.viewForLabelText}>
							<Card.Image source={require('./Vector1.png')} style={styles.labelCard}></Card.Image>
							<Text style={styles.textLabel}>Vegan</Text>
						</View>
					</Card>
					<Card containerStyle={styles.secondaryCard}>
						<View style={styles.viewForLabelText}>
							<Card.Image source={require('./Vector2.png')} style={styles.labelCard}></Card.Image>
							<Text style={styles.textLabel}>Diabète</Text>
						</View>
					</Card>
					<Card containerStyle={styles.secondaryCard}>
						<View style={styles.viewForLabelText}>
							<Card.Image source={require('./Vector3.png')} style={styles.labelCard}></Card.Image>
							<Text style={styles.textLabel}>Gluten free</Text>
						</View>
					</Card>
				</View>
			</View>


			<Text style={styles.title}> Alternatives </Text>

			<View style={styles.alternativeViewCardContainer}>
				<Card containerStyle={styles.alternativeCard}>
					<Card.Image source={require('./AlternativeImageOne.png')} style={styles.alternativeImageCard}></Card.Image>
					<Card.Divider style={{borderStartColor: '#FF5E5B', backgroundColor:  '#FF5E5B'}}/>
					<Card.Title>Sensational Haché</Card.Title>
				</Card>

				<Card containerStyle={styles.alternativeCard}>
					<Card.Image source={require('./AlternativeImageTwo.png')} style={styles.alternativeImageCard}></Card.Image>
					<Card.Divider/>
					<Card.Title>Sensational Haché</Card.Title>
				</Card>
			</View>
		</View>
		);
}

function handleHelpPress() {
	WebBrowser.openBrowserAsync(
		'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
	);
}

const styles = StyleSheet.create({
	mainViewCardContainer: {
		alignItems:'center'
	},
	mainCard: {
		borderRadius: 20,
		width: '90%',
		height: undefined,
		alignItems:'center'
	},
	title: {
		fontSize: 30,
		//fontFamily: 'Poppins', 
		fontWeight: 'bold',
		marginTop: 40,
		alignContent:'flex-start'
	},
	labelViewCardContainer : {
		flexDirection:'row', 
		flexWrap:'wrap'
	},
	mainImageCard : {
		width: 280, height: 200, margin: 10
	},
	secondaryFirstCard : {
		borderRadius: 30,
		margin: 0,
		padding: 5,
		minWidth: 70,
	},
	secondaryCard : {
		borderRadius: 30,
		margin: 0,
		marginLeft: 25,
		minWidth: 70,
		padding: 5
	},
	viewForLabelText : {
		flexDirection:'row', 
		flexWrap:'wrap'
	},
	labelCard : {
		width:10,
		height:10,
		justifyContent: "space-around",
		resizeMode:"contain"
	},
	textLabel : {
		textAlign: "center",
	},

	alternativeViewCardContainer: {
		flexDirection: 'row', 
		marginTop: 0
	},
	alternativeCard: {
		borderRadius: 20
	},
	alternativeImageCard: {
		width: 112,
		height: 112
	},
});
