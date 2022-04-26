import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, withTheme } from 'react-native-elements';
import { styles } from '../style/MyAccountEditModule_StyleSheet';

import { Text, View } from '../Themed';

export default function MyAccountEditModuleModule({
  currentUserJson,
}: {
	currentUserJson: any;
}) {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.basicButton}
        onPress={() => alert('Etes vous sur de vous déconnecter ?')}
      >
        <Text style={styles.basicButtonText}>Disconect</Text>
      </TouchableOpacity>
      <Card containerStyle={styles.defaultCard}>
        <Text style={styles.title}>Information Personnel</Text>
        <Text style={styles.elements}>
          {currentUserJson.email
					  ? `Adresse Mail : ${currentUserJson.email}\n`
					  : ''}
          {currentUserJson.password
					  ? `Password : ${currentUserJson.password}\n`
					  : ''}
          {currentUserJson.mobileNumber
					  ? `Mobile Phone : ${currentUserJson.mobileNumber}`
					  : ''}
        </Text>
      </Card>

      <Text style={styles.title}>Préférence Alimentaire</Text>

      <View style={styles.preferenceContainer}>
        <Card containerStyle={styles.secondaryCard}>
          <View style={styles.none}>
            <Card.Image
              source={require('../../assets/images/Icon-Product/vegan.png')}
              style={styles.labelCard}
            />
            <Text style={styles.none}>Vegan</Text>
          </View>
        </Card>
        <Card containerStyle={styles.secondaryCard}>
          <View style={styles.none}>
            <Card.Image
              source={require('../../assets/images/Icon-Product/sugarFree.png')}
              style={styles.labelCard}
            />
            <Text style={styles.none}>Diabète</Text>
          </View>
        </Card>
        <Card containerStyle={styles.secondaryCard}>
          <View style={styles.none}>
            <Card.Image
              source={require('../../assets/images/Icon-Product/glutenFree.png')}
              style={styles.labelCard}
            />
            <Text style={styles.none}>Gluten free</Text>
          </View>
        </Card>
        <Card containerStyle={styles.secondaryCard}>
          <View style={styles.none}>
            <Card.Image
              source={require('../../assets/images/Icon-Product/vegan.png')}
              style={styles.labelCard}
            />
            <Text style={styles.none}>Vegan</Text>
          </View>
        </Card>
        <Card containerStyle={styles.secondaryCard}>
          <View style={styles.none}>
            <Card.Image
              source={require('../../assets/images/Icon-Product/sugarFree.png')}
              style={styles.labelCard}
            />
            <Text style={styles.none}>Diabète</Text>
          </View>
        </Card>
        <Card containerStyle={styles.secondaryCard}>
          <View style={styles.none}>
            <Card.Image
              source={require('../../assets/images/Icon-Product/glutenFree.png')}
              style={styles.labelCard}
            />
            <Text style={styles.none}>Gluten free</Text>
          </View>
        </Card>
        <Card containerStyle={styles.secondaryCard}>
          <View style={styles.none}>
            <Card.Image
              source={require('../../assets/images/Icon-Product/vegan.png')}
              style={styles.labelCard}
            />
            <Text style={styles.none}>Vegan</Text>
          </View>
        </Card>
        <Card containerStyle={styles.secondaryCard}>
          <View style={styles.none}>
            <Card.Image
              source={require('../../assets/images/Icon-Product/sugarFree.png')}
              style={styles.labelCard}
            />
            <Text style={styles.none}>Diabète</Text>
          </View>
        </Card>
        <Card containerStyle={styles.secondaryCard}>
          <View style={styles.none}>
            <Card.Image
              source={require('../../assets/images/Icon-Product/glutenFree.png')}
              style={styles.labelCard}
            />
            <Text style={styles.none}>Gluten free</Text>
          </View>
        </Card>
        <Card containerStyle={styles.secondaryCard}>
          <View style={styles.none}>
            <Card.Image
              source={require('../../assets/images/Icon-Product/vegan.png')}
              style={styles.labelCard}
            />
            <Text style={styles.none}>Vegan</Text>
          </View>
        </Card>
        <Card containerStyle={styles.secondaryCard}>
          <View style={styles.none}>
            <Card.Image
              source={require('../../assets/images/Icon-Product/sugarFree.png')}
              style={styles.labelCard}
            />
            <Text style={styles.none}>Diabète</Text>
          </View>
        </Card>
        <Card containerStyle={styles.secondaryCard}>
          <View style={styles.none}>
            <Card.Image
              source={require('../../assets/images/Icon-Product/glutenFree.png')}
              style={styles.labelCard}
            />
            <Text style={styles.none}>Gluten free</Text>
          </View>
        </Card>
      </View>

      <Card containerStyle={styles.defaultCard}>
        <Text style={styles.title}>Actions Possibles</Text>
        {/* <Button title='Modify Account Information' onPress={() => alert('Redirection to formulaire') }/>
                <Button title='Get Premium Access' onPress={() => alert('Redirection to formulaire Payment') }/>
                <Button title='Disconect' onPress={() => alert('Redirection to Login') }/> */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.basicButton}
            onPress={() => alert('Redirection to formulaire')}
          >
            <Text style={styles.basicButtonText}>
              Modify Account Information
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.basicButton}
            onPress={() => alert('Redirection to abonnement')}
          >
            <Text style={styles.basicButtonText}>Get Premium Access</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.basicButton}
            onPress={() => alert('Etes vous sur de vous déconnecter ?')}
          >
            <Text style={styles.basicButtonText}>Disconect</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet',
  );
}
