import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';

import CurrentProductEditModule from '../components/CurrentProductEditModule';
import { Text, View } from '../components/Themed';

import { styles } from './style/CurrentProductScreen_StyleSheet';

export default function CurrentProductScreen({ route }: { route: any }) {
	const { product_title, product_id, product_image } = route.params;
	return (
		<View style={styles.container}>
			<CurrentProductEditModule currentProductJson={route.params} />

			{/* Use a light status bar on iOS to account for the black space above the modal */}
			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
		</View>
	);
}
