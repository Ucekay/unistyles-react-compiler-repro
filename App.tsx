import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Pressable, Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import ThemedButton from './components/ThemedButton';
import ThemedView from './components/ThemedView';
import { UnistyledView } from './components/UnistyledView';

export default function App() {
	const [count, setCount] = useState(0);
	return (
		<ThemedView style={styles.container}>
			<Text style={styles.text}>
				Open up App.tsx to start working on your app!
			</Text>
			<StatusBar style="auto" />
			<UnistyledView style={styles.buttonContainer}>
				<Button onPress={() => setCount(count + 1)} title="count" />
			</UnistyledView>
			<Text style={styles.text}>{count}</Text>
		</ThemedView>
	);
}

const styles = StyleSheet.create((theme) => ({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: theme.colors.text,
	},
	buttonContainer: {
		padding: 10,
		borderRadius: 10,
		borderWidth: 1,
	},
}));
