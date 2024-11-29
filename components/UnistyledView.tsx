import { View, type ViewProps } from 'react-native';

import { StyleSheet, createUnistylesComponent } from 'react-native-unistyles';

export const UnistyledView = (props: ViewProps) => {
	const { style, ...otherProps } = props;
	return <View style={[style, styles.container]} {...otherProps} />;
};

const styles = StyleSheet.create((theme) => ({
	container: {
		backgroundColor: theme.colors.background,
	},
}));
