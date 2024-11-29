import React from 'react';
import {
	Pressable,
	PressableProps,
	Text,
	type TextStyle,
	View,
	type ViewStyle,
} from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type ThemedButtonProps = {
	onPress: () => void;
	title?: string;
};

const ThemedButton = ({ onPress, title }: ThemedButtonProps) => {
	return (
		<Pressable style={styles.container} onPress={onPress}>
			<Text style={styles.title}>{title}</Text>
		</Pressable>
	);
};

export default ThemedButton;

const styles = StyleSheet.create((theme) => ({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		color: theme.colors.text,
	},
}));
