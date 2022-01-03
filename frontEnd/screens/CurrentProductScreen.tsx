import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';

import CurrentProductEditModule from '../components/CurrentProductEditModule';
import { Text, View } from '../components/Themed';

export default function CurrentProductScreen({ route }: { route: any }) {
	const { title, id, imageName } = route.params;
	return (
		<View style={styles.container}>
			<CurrentProductEditModule currentProductJson={route.params} />

			{/* Use a light status bar on iOS to account for the black space above the modal */}
			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 0,
		marginTop: -35,
		padding: 0,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
});
