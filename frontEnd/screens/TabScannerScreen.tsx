import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

import { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default function TabScannerScreen() {
	const [hasPermission, setHasPermission] = React.useState<null | Boolean>();
	const [scanned, setScanned] = useState(false);
	const [text, setText] = useState('Scannez un code-barres');

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
		setScanned(true);
		setText('Numéro de code-barres : ' + data);
		console.log('Type: ' + type + '\nData: ' + data);
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
			<Text style={styles.maintext}>{text}</Text>
			{scanned && <Text>yo</Text>}
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
});
