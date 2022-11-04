import React from 'react';

import {StatusBar, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function PrimaryScreenView({
	style = {},
	children,
	barStyle = 'dark-content',
}) {
	const insets = useSafeAreaInsets();

	return (
		<View
			style={{
				paddingTop: insets?.top ?? 20,
				paddingBottom: insets?.bottom ?? 10,
				flex: 1,
				...style,
			}}>
			{children}
			<StatusBar barStyle={barStyle} />
		</View>
	);
}
