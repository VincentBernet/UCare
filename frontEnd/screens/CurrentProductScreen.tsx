import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform } from 'react-native';

import CurrentProduct from '../components/main_components/CurrentProduct';
import AlternativeProduct from '../components/main_components/AlternativeProduct';

import { View } from '../components/Themed';

import { styles } from './style/CurrentProductScreen_StyleSheet';

export default function CurrentProductScreen({ route }: { route: any }) {
	const { productAttributes } = route.params;
	return (
		<View style={styles.container}>
			<CurrentProduct currentProductJson={route.params} />
			<AlternativeProduct currentProductJson={route.params} />
			{/* Use a light status bar on iOS to account for the black space above the modal */}
			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
		</View>
	);
}
