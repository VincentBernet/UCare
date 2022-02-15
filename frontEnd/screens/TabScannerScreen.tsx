import * as React from 'react';

import { Text, View } from '../components/Themed';

import { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import { retrieveProductInformation } from '../commons/callApi.utils';

import { styles } from './style/TabScannerScreen_StyleSheet';

export default function TabScannerScreen() {
	const [hasPermission, setHasPermission] = React.useState<null | Boolean>();
	const [scanned, setScanned] = useState(false);
	const [numberCompteur, setNumberCompteur] = useState(1);
	const [text, setText] = useState('Nouvelle recherche : Go Scanner');
	const navigation = useNavigation();
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

	const handleBarCodeScanned = async ({
		type,
		data,
	}: {
		type: any;
		data: any;
	}) => {
		setNumberCompteur(numberCompteur + 1);
		const codeBar = parseInt(data);
		// If the product type is correct, we navigate to the product screen with the product information from the API call
		setScanned(true);
		if (type === 32 || type === 1) {
			setText('Scanned : ' + codeBar);
			console.log(
				numberCompteur + ') Recherche en cours du produit : ' + codeBar
			);
			// Calling the function that call the API to retrieve the product information
			const currentProductJson = await retrieveProductInformation(codeBar);
			console.log(currentProductJson);
			setText('Nouvelle recherche : Go Scanner');
			navigation.navigate('CurrentProduct', currentProductJson);
			setTimeout(() => {
				setScanned(false);
			}, 3000);
		} else {
			// If the product type is uncorrect, TODO: pop up a message for bad product scanned
			setTimeout(() => {
				setScanned(false);
			}, 3000);
			setText("Ceci n'est pas un format de CodeBar valide !");
			console.log(
				numberCompteur + ') Echec mauvais CodeBar Format : ' + codeBar
			);
			console.log('Type: ' + type + '\nData: ' + codeBar);
		}
	};

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
