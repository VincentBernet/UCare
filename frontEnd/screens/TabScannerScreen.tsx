import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';

import { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style/TabScannerScreen_StyleSheet';

export default function TabScannerScreen() {
	const navigation = useNavigation();
	const [hasPermission, setHasPermission] = React.useState<null | Boolean>();
	const [scanned, setScanned] = useState(false);
	const [text, setText] = useState('Nouvelle recherche : Go Scanner');
	var numbercompteur = 0;

	// Future interface for the productJson returned by the API
	interface productAttributes {
		title?: string;
		id?: number;
	}

	const retrieveProductViaBarcodeWithBackEndApi = async (
		codeBar: number
		// for return type :Promise<productAttributes>, adding it later
	) => {
		try {
			console.log('Console Log before calling Ucare API');
			const response = await fetch(
				// On Android, as of API Level 28, clear text traffic is also blocked by default.
				// This behaviour can be overridden by setting android:usesCleartextTraffic in the app manifest file.
				// So need to find a way to bypass this. Or by creating a https endpoint on backend server or by modifying android settings.
				'http://172.20.96.1:3000/products/737628064502'
			);
			const json = await response.json();
			return json;
		} catch (error) {
			// In case of error, return the error message
			console.log('We got some error with the api call chef: ' + error);
			console.error(error);
		}
	};

	const askForCameraPermission = () => {
		(async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	};

	// Request Camera Permission
	useEffect(() => {
		askForCameraPermission();
	}, []);

	// What happens when we scan the bar code
	const handleBarCodeScanned = ({
		type,
		codeBarNumber,
	}: {
		type: number;
		codeBarNumber: number;
	}) => {
		numbercompteur += 1;
		// Calling the function that call the API to retrieve the product information
		const currentProductJson =
			retrieveProductViaBarcodeWithBackEndApi(codeBarNumber);

		// If the product type is correct, we navigate to the product screen with the product information from the API call
		if (type === 32 || type === 1) {
			setScanned(false);
			console.log(
				numbercompteur +
					') Recherche en cours du produit : ' +
					codeBarNumber
			);
			// TODO: uncomment after fixing the API call issue with android
			//console.log(currentProductJson);
			//navigation.navigate('CurrentProduct', currentProductJson);
		} else {
			// If the product type is uncorrect, TODO: pop up a message for bad product scanned
			setScanned(false);
			setText(
				"Ceci n'est pas un format de CodeBar valide : " + codeBarNumber
			);
			console.log(
				numbercompteur + ') Echec mauvais CodeBar Format : ' + codeBarNumber
			);
			console.log('Type: ' + type + '\nData: ' + codeBarNumber);
		}
	};

	// Check permissions and return the screens
	if (hasPermission === null) {
		return (
			<View style={styles.container}>
				<Text>Requesting for camera permission</Text>
			</View>
		);
	}
	if (hasPermission === false) {
		return (
			<View style={styles.container}>
				<Text style={{ margin: 10 }}>No access to camera</Text>
				<Button
					title={'Allow Camera'}
					onPress={() => askForCameraPermission()}
				/>
			</View>
		);
	}

	// Return the View
	return (
		<View style={styles.container}>
			<View style={styles.barcodebox}>
				<BarCodeScanner
					// TODO: check that issue later
					onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
					style={{ height: 600, width: 600 }}
				/>
			</View>
			{
				//scanned && navigation.navigate('CurrentProduct')
			}
			{scanned && <Text style={styles.barcodeResult}>{text}</Text>}
		</View>
	);
}
