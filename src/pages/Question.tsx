import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Question extends Component {

	/**
	* Display the home or the loading screen
	* return {JSX.Element} Display the home
	**/
	render(): JSX.Element {
		return (
			<View>
				<Text>Question</Text>
			</View>
		);
	}
}
