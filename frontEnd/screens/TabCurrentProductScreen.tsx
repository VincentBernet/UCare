import * as React from 'react';
import { StyleSheet } from 'react-native';

import CurrentProductEditModule from '../components/CurrentProductEditModule';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabCurrentProductScreen({
	navigation,
}: RootTabScreenProps<'TabCurrentProduct'>) {
	return (
		<View style={styles.container}>
			{/*<CurrentProductEditModule path="/screens/TabCurrentProductScreen.tsx" />*/}
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
