import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform } from 'react-native';

import CurrentProductEditModule from '../components/main_components/CurrentProductEditModule';
import { View } from '../components/Themed';

import { styles } from './style/CurrentProductScreen_StyleSheet';
import { productAttributes } from '../commons/product.interface';

export default function CurrentProductScreen({ route }: { route: any }) {
	const { productAttributes } = route.params;
	return (
		<View style={styles.container}>
			<CurrentProductEditModule currentProductJson={route.params} />

			{/* Use a light status bar on iOS to account for the black space above the modal */}
			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
		</View>
	);
}
