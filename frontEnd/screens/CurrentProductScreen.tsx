import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';

import CurrentProductEditModule from '../components/CurrentProductEditModule';
import { Text, View } from '../components/Themed';

export default function CurrentProductScreen({
	currentProductJson,
}: {
	currentProductJson: any;
}) {
	return (
		<View style={styles.container}>
			<Text>
				{' '}
				{currentProductJson
					? currentProductJson
					: "Can't access the current \nProduct Title"}{' '}
			</Text>
			<CurrentProductEditModule currentProductJson={currentProductJson} />

			{/* Use a light status bar on iOS to account for the black space above the modal */}
			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
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
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
