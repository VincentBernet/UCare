import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import MyAccountEditModule from '../components/main_components/MyAccountEditModule';

import { Text, View } from '../components/Themed';

const currentUserInformation = {
  email: 'vincent.bernet@gmail.com',
  password: 'bullshitPassword',
  mobileNumber: '0612345678',
};

export default function MyAccountScreen({ route }: { route: any }) {
  // const { email, mobileNumber } = route.params;
  return (
    <View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <MyAccountEditModule currentUserJson={currentUserInformation} />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
