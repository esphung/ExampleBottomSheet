/*
FILENAME:     App.js
PURPOSE:      App entry point
AUTHOR:       Eric Phung
CREATED:      06/24/2022 07:33 PM
*/
import React, {useState, useRef, useMemo, useCallback} from 'react';

import {StyleSheet, View, Text} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler'; // gorhom bs
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {PrimaryBottomSheet} from './src/shared';

import {NavigationContainer} from '@react-navigation/native';

import {BottomSheetContext} from './src/contexts';

import {AppStack} from './src/navigators';

const App = () => {
	const snapPoints = useMemo(() => ['20%', '40%', '88%'], [])
	// state
	const [bottomSheetContext, setBottomSheetContext] = useState({
		title: 'Awesome 🎉',
		snapPoints,
		index: -1,
		ref: useRef(null),
		handleSheetChanges: (index: number) => {
			// console.log('handleSheetChanges', index);
		},
		renderContent: () => (
			<View
				style={[
					styles.contentContainer,
					{
						paddingTop: 10,
						alignItems: 'center',
						backgroundColor: 'teal',
					},
				]}>
				<Text>{bottomSheetContext.title}</Text>
			</View>
		),
		handleComponent: () => {
			return (
				<View
					style={{
						borderTopRightRadius: 10,
						borderTopLeftRadius: 10,
						// backgroundColor: 'red',
						height: 30,
					}}
				/>
			);
		},
		enablePanDownToClose: true,
	});

	const getStackNavigator = () => {
		return <AppStack />;
	};

	return (
		<BottomSheetContext.Provider
			value={{bottomSheetContext, setBottomSheetContext}}>
			<SafeAreaProvider>
				<NavigationContainer>
					<GestureHandlerRootView style={styles.container}>
						{getStackNavigator()}
						<PrimaryBottomSheet />
					</GestureHandlerRootView>
				</NavigationContainer>
			</SafeAreaProvider>
		</BottomSheetContext.Provider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contentContainer: {
		flex: 1,
	},
});

export default App;
