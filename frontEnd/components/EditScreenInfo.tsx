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
	title: {
		fontSize: 30,
		//fontFamily: 'Poppins', 
		fontWeight: 'bold',
		marginTop: 40,
		alignContent:'flex-start'
	},
	alternativeCard: {
		borderRadius: 20
	},
	alternativeImageCard: {
		width: 112,
		height: 112
	},
	alternativeViewCardContainer: {
		flexDirection: 'row', 
		marginTop: 0
	},
	mainViewCardContainer: {
		alignItems:'center'
	},
	mainCard: {
		borderRadius: 20,
		width: '90%',
		height: undefined,
		alignItems:'center'
	},
	mainImageCard : {
		width: 280, height: 200, margin: 10
	}
});
