import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import FavoriteProductModule from '../components/FavoriteProductModule';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabFavoritesScreen({
	navigation,
}: RootTabScreenProps<'TabFavorites'>) {
	return (
		<View style={styles.container}>
			{/*<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>*/}
			<FavoriteProductModule path="/screens/TabFavoritesScreen.tsx" />
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
