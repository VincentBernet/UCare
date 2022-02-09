import * as React from 'react';

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
	var numberCompteur = 0;

	// Future interface for the productJson returned by the API
	interface productAttributes {
		product_title?: string;
		product_id?: number;
		product_image?: string;
	}

	const retrieveProductViaBarcodeWithBackEndApi = async (
		codeBar: number
	): Promise<productAttributes> => {
		let json: productAttributes = {};
		try {
			const endpointUrl =
				'https://ucare-backend.herokuapp.com/products/' + codeBar + '.json';
			console.log(
				'Console Log before calling Ucare API at : ' + endpointUrl
			);
			const response = await fetch(endpointUrl).then((response) =>
				response
					.json()
					.then((data) => ({
						data: data,
						status: response.status,
					}))
					.then((res) => {
						json = res.data;
					})
			);
		} catch (error) {
			console.log('We got some error with the api call chef: ' + error);
			console.error(error);
		}
		return json;
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
	const handleBarCodeScanned = async ({
		type,
		data,
	}: {
		type: any;
		data: any;
	}) => {
		numberCompteur += 1;
		const codeBar = parseInt(data);

		// If the product type is correct, we navigate to the product screen with the product information from the API call
		if (type === 32 || type === 1) {
			setScanned(true);
			setText('Scanned : ' + codeBar);
			console.log(
				numberCompteur + ') Recherche en cours du produit : ' + codeBar
			);
			// Calling the function that call the API to retrieve the product information
			const currentProductJson =
				await retrieveProductViaBarcodeWithBackEndApi(codeBar);
			console.log(currentProductJson);
			navigation.navigate('CurrentProduct', currentProductJson);
		} else {
			// If the product type is uncorrect, TODO: pop up a message for bad product scanned
			setScanned(false);
			setText("Ceci n'est pas un format de CodeBar valide : " + codeBar);
			console.log(
				numberCompteur + ') Echec mauvais CodeBar Format : ' + codeBar
			);
			console.log('Type: ' + type + '\nData: ' + codeBar);
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
			{scanned && <Text style={styles.barcodeResult}>{text}</Text>}
		</View>
	);
}
