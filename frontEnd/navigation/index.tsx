/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import TabScannerScreen from '../screens/TabScannerScreen';
import TabFavoritesScreen from '../screens/TabFavoritesScreen';

import MyAccountScreen from '../screens/MyAccountScreen';
import CurrentProductScreen from '../screens/CurrentProductScreen';
import NotFoundScreen from '../screens/NotFoundScreen';

import { Card, Image, ListItem, Icon } from 'react-native-elements';

import {
	RootStackParamList,
	RootTabParamList,
	RootTabScreenProps,
} from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({
	colorScheme,
}: {
	colorScheme: ColorSchemeName;
}) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
		>
			<RootNavigator />
		</NavigationContainer>
	);
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function Header() {
	// Import result is the URL of your image
	return <img src={'ppipi'} alt="Logo" />;
}

function RootNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Root"
				component={BottomTabNavigator}
				options={{ headerShown: false }}
			//options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
			/>
			<Stack.Screen
				name="NotFound"
				component={NotFoundScreen}
				options={{ title: 'Oops!' }}
			/>
			<Stack.Group screenOptions={{ presentation: 'modal' }}>
				<Stack.Screen name="MyAccount" component={MyAccountScreen} />
				<Stack.Screen name="CurrentProduct" component={CurrentProductScreen} />
			</Stack.Group>
		</Stack.Navigator>
	);
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function LogoTitle() {
	return (
		<Image
			style={{ width: 85, height: 30 }}
			source={require('./iconCroped.png')}
		/>
	);
}

function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="TabScanner"
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme].tint,
			}}
		>
			<BottomTab.Screen
				name="TabScanner"
				component={TabScannerScreen}
				options={({ navigation }: RootTabScreenProps<'TabScanner'>) => ({
					title: 'Scanner',
					headerTitle: (props: any) => <LogoTitle {...props} />,
					headerTitleAlign: 'center',
					headerStyle: {
						borderBottomRightRadius: 25,
						borderBottomLeftRadius: 25,
					},
					headerStatusBarHeight: 30,
					headerFooter: 100,
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="bars" color={color} />
					),
					headerRight: () => (
						<Pressable
							onPress={() => navigation.navigate('MyAccount')}
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}
						>
							<FontAwesome
								name="user"
								size={25}
								color={Colors[colorScheme].text}
								style={{ marginRight: 45 }}
							/>
						</Pressable>
					),
				})}
			/>

			<BottomTab.Screen
				name="TabFavorites"
				component={TabFavoritesScreen}
				options={({ navigation }: RootTabScreenProps<'TabFavorites'>) => ({
					title: 'Favoris',
					headerTitle: (props: any) => <LogoTitle {...props} />,
					headerTitleAlign: 'center',
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="heart" color={color} />
					),
					headerStyle: {
						borderBottomRightRadius: 25,
						borderBottomLeftRadius: 25,
					},
					headerStatusBarHeight: 30,
					headerRight: () => (
						<Pressable
							onPress={() => navigation.navigate('MyAccount')}
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}
						>
							<FontAwesome
								name="user"
								size={25}
								color={Colors[colorScheme].text}
								style={{ marginRight: 45 }}
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
	return <FontAwesome size={30} style={{ marginBottom: 3 }} {...props} />;
}
