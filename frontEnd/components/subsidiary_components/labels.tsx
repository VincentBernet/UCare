import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { productAttributes } from '../../commons/product.interface';
import { styles } from '../style/Labels_StyleSheet';

import { Text, View } from '../Themed';

const LabelComponent = ({
	currentProductJson,
}: {
	currentProductJson: productAttributes;
}) => {
	return (
		<View style={styles.labelViewCardContainer}>
			{currentProductJson.vegan ? (
				<Card containerStyle={styles.secondaryFirstCard}>
					<View style={styles.viewForLabelText}>
						<Card.Image
							source={require('./../../assets/images/Icon-Product/vegan.png')}
							style={styles.labelCard}
						/>
						<Text style={styles.textLabel}>Vegan</Text>
					</View>
				</Card>
			) : null}

			{currentProductJson.vegetarian ? (
				<Card containerStyle={styles.secondaryFirstCard}>
					<View style={styles.viewForLabelText}>
						<Card.Image
							source={require('./../../assets/images/Icon-Product/vegan.png')}
							style={styles.labelCard}
						/>
						<Text style={styles.textLabel}>Végétarien</Text>
					</View>
				</Card>
			) : null}

			{currentProductJson.palmOilFree ? (
				<Card containerStyle={styles.secondaryFirstCard}>
					<View style={styles.viewForLabelText}>
						<Card.Image
							source={require('./../../assets/images/Icon-Product/vegan.png')}
							style={styles.labelCard}
						/>
						<Text style={styles.textLabel}>Sans huile de palme</Text>
					</View>
				</Card>
			) : null}
		</View>
	);
};

export default LabelComponent;
