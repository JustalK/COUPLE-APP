import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonImage from 'src/components/ButtonImage'
import {HomeProps} from 'src/interfaces/Home'

export default class Home extends Component<HomeProps, never> {

	/**
	* Display the home screen
	* return {JSX.Element} Display the home
	**/
	render(): JSX.Element {
		return (
			<View>
				<Text>Home</Text>
				<ButtonImage navigation={this.props.navigation} />
			</View>
		);
	}
}
