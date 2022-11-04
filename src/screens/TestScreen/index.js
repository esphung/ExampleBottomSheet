import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import {PrimaryScreenView} from '../../shared/index';

import {BottomSheetContext} from '../../contexts';

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'skyblue',
	},
});

const TestScreen = ({navigation}) => {
	const {bottomSheetContext, setBottomSheetContext} =
		useContext(BottomSheetContext);

	const initScreenBs = () => {
		setBottomSheetContext({
			...bottomSheetContext,
			renderContent: () => {
				return (
					<View
						style={{flex: 1, alignItems: 'center', backgroundColor: 'teal'}}>
						<Text>TestScreen:{bottomSheetContext.title}</Text>
					</View>
				);
			},
		});
	};

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			// The screen is focused
			// Call any action
			initScreenBs();
		});

		// Return the function to unsubscribe from the event so it gets removed on unmount
		return unsubscribe;
	}, [navigation]);

	const onPressShowBs = () => bottomSheetContext.ref.current.snapToIndex(1);

	return (
		<PrimaryScreenView style={{backgroundColor: 'lightblue'}}>
			<View style={[styles.contentContainer]}>
				<Text>TestScreen</Text>
				<Button
					title="Go HomeScreen"
					onPress={() => navigation.navigate('HomeScreen')}
				/>
				<Button title="Show Test BottomSheet" onPress={onPressShowBs} />
			</View>
		</PrimaryScreenView>
	);
};

export default TestScreen;
