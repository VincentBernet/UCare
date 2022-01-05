import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

import { Text, View } from './Themed';

export default function MyAccountEditModuleModule({currentUserJson
}: { currentUserJson: any }) {
	return (
		<View>
            <Card>
                <Text style={styles.title}>Information Personnel :</Text>
                <Text>
                    {currentUserJson.email ? 'Adresse Mail : ' + currentUserJson.email + '\n': ''}
                    {currentUserJson.password ? 'Password : ' + currentUserJson.password + '\n': ''}
                    {currentUserJson.mobileNumber ? 'Mobile Phone : ' + currentUserJson.mobileNumber: ''}
                </Text>
            </Card>

            <Card>
                <Text style={styles.title}>Actions Possibles :</Text>
                {/*<Button title='Modify Account Information' onPress={() => alert('Redirection to formulaire') }/>
                <Button title='Get Premium Access' onPress={() => alert('Redirection to formulaire Payment') }/>
                <Button title='Disconect' onPress={() => alert('Redirection to Login') }/>*/}
                <TouchableOpacity onPress={() => alert('Redirection to formulaire')} /*TODO : redirection formulaire*/>
                    <Text style={styles.basicButton}>
                        Modify Account Information 
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Redirection to abonnement')} /*TODO : redirection abonnement*/>
                    <Text style={styles.basicButton}>
                        Get Premium Access
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.basicButton} onPress={() => alert('Etes vous sur de vous déconnecter ?')} /*TODO : redirection Login if yes*/>
                    <Text style={styles.basicButton}>
                        Disconect 
                    </Text>
                </TouchableOpacity>


            </Card>
		</View>
	);
}

function handleHelpPress() {
	WebBrowser.openBrowserAsync(
		'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 25,
		//fontFamily: 'Poppins',
		fontWeight: 'bold',
		marginTop: 10,
		alignContent: 'flex-start',
		textAlign: 'center',
	},
    basicButton: {
        backgroundColor: '#fff',
    },
});
