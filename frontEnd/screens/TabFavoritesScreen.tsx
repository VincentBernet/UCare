import * as React from 'react';
import { StyleSheet } from 'react-native';

import FavoriteProductEditModule from '../components/main_components/FavoriteProductEditModule';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { styles } from './style/TabFavoritesScreen_StyleSheet';

export default function TabFavoritesScreen({
  navigation,
}: RootTabScreenProps<'TabFavorites'>) {
  return (
    <View style={styles.container}>
      <FavoriteProductEditModule path="/screens/TabFavoritesScreen.tsx" />
    </View>
  );
}
