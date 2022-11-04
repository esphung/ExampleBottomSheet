import React, {useContext, useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import {PrimaryScreenView} from '../../shared/index';

import {BottomSheetContext} from '../../contexts';

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'lightblue',
	},
});

const HomeScreen = ({navigation}) => {
	const {bottomSheetContext, setBottomSheetContext} =
		useContext(BottomSheetContext);
	const onPressShowBs = () => bottomSheetContext.ref.current.snapToIndex(1);

	const initScreenBs = () => {
		setBottomSheetContext({
			...bottomSheetContext,
			renderContent: () => {
				return (
					<View
						style={{flex: 1, alignItems: 'center', backgroundColor: 'teal'}}>
						<Text>HomeScreen:{bottomSheetContext.title}</Text>
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

	return (
		<PrimaryScreenView style={{backgroundColor: 'steelblue'}}>
			<View style={[styles.contentContainer]}>
				<Text>HomeScreen</Text>
				<Button
					title="Go TestScreen"
					onPress={() => navigation.navigate('TestScreen')}
				/>
				<Button title="Show Home BottomSheet" onPress={onPressShowBs} />
			</View>
		</PrimaryScreenView>
	);
};

export default HomeScreen;
