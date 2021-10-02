/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/FavoritesScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import BasicScanScreen from '../screens/BasicScanScreen';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ title: 'Root', headerShown: false, headerStyle: {backgroundColor: '#f4511e'}}} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="FavoritesTab"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
       <BottomTab.Screen
        name="FavoritesTab"
        component={BasicScanScreen}
        options={({ navigation }: RootTabScreenProps<'FavoritesTab'>) => ({
          title: 'Mes Favoris',
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
          headerStyle: {backgroundColor: '#FFFFFF', borderBottomLeftRadius: 35, borderBottomRightRadius: 35},
          headerTitle: () => (
            <img src="https://github.com/VincentBernet/UCare/blob/ReactNativeTest/ressource/ucarelogo.png?raw=true" alt='UcareLogo'/> 
            ),
          headerTitleContainerStyle: {
            marginTop: 35,
            marginLeft: 115,
          },
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="user"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 30}}
              />
            </Pressable>
          ),
        
        })}
      />
      <BottomTab.Screen
        name="BasicScan"
        component={BasicScanScreen}
        options={({ navigation }: RootTabScreenProps<'BasicScan'>) => ({
          title: 'Scanner',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
          headerStyle: {backgroundColor: '#FFFFFF', borderBottomLeftRadius: 35, borderBottomRightRadius: 35},
          headerTitle: () => (
            <img src="https://github.com/VincentBernet/UCare/blob/ReactNativeTest/ressource/ucarelogo.png?raw=true" alt='UcareLogo'/> 
            ),
          headerTitleContainerStyle: {
            marginTop: 35,
            marginLeft: 115,
          },
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="user"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 30}}
              />
            </Pressable>
          ),
        
        })}
      />

     
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
