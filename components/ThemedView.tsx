import React from 'react';
import { Text, View, type ViewProps } from 'react-native';

import { StyleSheet } from 'react-native-unistyles';

const ThemedView = (props: ViewProps) => {
	return <View style={styles.container} {...props} />;
};

export default ThemedView;

const styles = StyleSheet.create((theme) => ({
	container: {
		backgroundColor: theme.colors.background,
	},
}));
