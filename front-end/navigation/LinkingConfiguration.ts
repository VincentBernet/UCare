/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabScanner: {
            screens: {
              TabScannerScreen: 'scanner',
            },
          },
          TabCurrentProduct: {
            screens: {
              TabCurrentProductScreen: 'product',
            },
          },
          TabFavorites: {
            screens: {
              TabFavoritesScreen: 'favorites',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      CurrentProduct: 'currentProduct',
      MyAccount: 'myAccount',
      NotFound: '*',
    },
  },
};

export default linking;
