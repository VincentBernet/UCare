import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { productAttributes } from '../../commons/product.interface';
import { styles } from '../style/WithNutriscore_StyleSheet';

import { Text, View } from '../Themed';

function WithNutriScoreComponent({
  currentProductJson,
}: {
	currentProductJson: productAttributes;
}) {
  return (
    <>
      {currentProductJson.vegan
			|| currentProductJson.vegetarian
			|| currentProductJson.palmOilFree ? (
  <>
    <Text style={styles.textForEmojee}>Friendly</Text>
    <Card.Image
      source={{
						  uri: 'http://clipart-library.com/image_gallery2/Wink-Emoji-PNG.png',
      }}
      style={styles.emojee}
    />
  </>
			  ) : (
  <>
    <Text style={styles.textForEmojeeAngry}>Unfriendly</Text>
    <Card.Image
      source={require('../../assets/images/Icon-Product/emojeeAngry.png')}
      style={styles.emojee}
    />
  </>
			  )}
      {currentProductJson.nustriscore_grade ? (
        <Image
          source={{
					  uri:
							`https://static.openfoodfacts.org/images/attributes/nutriscore-${
							  currentProductJson.nustriscore_grade
							}.png`,
          }}
          style={styles.nutriscoreImage}
        />
      ) : null}
    </>
  );
}

export default WithNutriScoreComponent;
