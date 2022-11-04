import React from 'react';
import {View, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TestScreen, HomeScreen} from '../screens';

const Stack = createNativeStackNavigator();

const AppStack = () => {
	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			<Stack.Screen name="TestScreen" component={TestScreen} />
		</Stack.Navigator>
	);
};

export default AppStack;
