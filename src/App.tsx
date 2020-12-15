import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
const WHITE = '#fff';

/**
 * Entry point of the app, display the home by default
 **/
export default class App extends Component {
	render(): JSX.Element {
		return (
			<View style={styles.container}>
				<Text>Open up App.tsx to start working on your app!</Text>
				<StatusBar style="auto" />
			</View>
		);
	}
}

registerRootComponent(App);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: WHITE,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
