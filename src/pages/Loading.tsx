import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Loading extends Component {

	/**
	* Display the Result screen
	* return {JSX.Element} Display the result screen
	**/
	render(): JSX.Element {
		return (
			<View>
				<Text>Loading</Text>
			</View>
		);
	}
}
