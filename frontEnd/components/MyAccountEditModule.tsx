import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, withTheme } from 'react-native-elements';

import { Text, View } from './Themed';

export default function MyAccountEditModuleModule({ currentUserJson
}: { currentUserJson: any }) {
    return (
        <View style={styles.mainContainer}>
            <Card containerStyle={styles.defaultCard}>
                <Text style={styles.title}>Information Personnel :</Text>
                <Text style={styles.elements}>
                    {currentUserJson.email ? 'Adresse Mail : ' + currentUserJson.email + '\n' : ''}
                    {currentUserJson.password ? 'Password : ' + currentUserJson.password + '\n' : ''}
                    {currentUserJson.mobileNumber ? 'Mobile Phone : ' + currentUserJson.mobileNumber : ''}
                </Text>
            </Card>

            <Card containerStyle={styles.defaultCard}>
                <Text style={styles.title}>Actions Possibles :</Text>
                {/*<Button title='Modify Account Information' onPress={() => alert('Redirection to formulaire') }/>
                <Button title='Get Premium Access' onPress={() => alert('Redirection to formulaire Payment') }/>
                <Button title='Disconect' onPress={() => alert('Redirection to Login') }/>*/}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.basicButton} onPress={() => alert('Redirection to formulaire')} /*TODO : redirection formulaire*/>
                        <Text style={styles.basicButtonText}>
                            Modify Account Information
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.basicButton} onPress={() => alert('Redirection to abonnement')} /*TODO : redirection abonnement*/>
                        <Text style={styles.basicButtonText}>
                            Get Premium Access
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.basicButton} onPress={() => alert('Etes vous sur de vous déconnecter ?')} /*TODO : redirection Login if yes*/>
                        <Text style={styles.basicButtonText}>
                            Disconect
                        </Text>
                    </TouchableOpacity>
                </View>

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
    mainContainer: {
        marginTop: 15,
    },
    defaultCard: {
        margin: 10,
        marginBottom: 20,
        padding: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        alignContent: 'flex-start',
        textAlign: 'left',
    },
    elements: {
        marginLeft: 15,
    },
    buttonContainer: {
        backgroundColor: 'transparent',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    basicButton: {
        padding: 5,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: '#FF5E5B',
    },
    basicButtonText: {
        color: 'white',
        fontWeight: '700',
    }
});
