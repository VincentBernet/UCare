import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';

import { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

export default function TabScannerScreen() {
	const navigation = useNavigation();
	const [hasPermission, setHasPermission] = React.useState<null | Boolean>();
	const [scanned, setScanned] = useState(false);
	const [text, setText] = useState('Nouvelle recherche : Go Scanner');
	var numbercompteur = 0;
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
	const handleBarCodeScanned = ({ type, data }: { type: any; data: any }) => {
		numbercompteur += 1;
		const currentProductJson = { title: 'CurrentProductTitle' };
		if (type === 32 || type === 1) {
			setScanned(false);
			console.log(
				numbercompteur + ') Recherche en cours du produit : ' + data
			);
			navigation.navigate('CurrentProduct', currentProductJson);
		} else {
			setScanned(false);

			setText("Ceci n'est pas un format de CodeBar valide : " + data);
			console.log(
				numbercompteur + ') Echec mauvais CodeBar Format : ' + data
			);
			console.log('Type: ' + type + '\nData: ' + data);
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 100,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
	maintext: {
		fontSize: 16,
		margin: 20,
	},
	barcodebox: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 350,
		width: 300,
		overflow: 'hidden',
		borderRadius: 30,
		backgroundColor: 'tomato',
	},
	barcodeResult: {
		marginTop: 15,
		backgroundColor: 'red',
		padding: 10,
	},
});
