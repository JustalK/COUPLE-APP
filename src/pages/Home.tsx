import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonImage from 'src/components/ButtonImage'
import Container from 'src/components/Container';
import {HomeProps} from 'src/interfaces/Home';
import { IMAGE_BUTTON } from 'src/utils/Images';
import styled from 'styled-components/native';

export default class Home extends Component<HomeProps, never> {

	/**
	* Display the home screen
	* return {JSX.Element} Display the home
	**/
	render(): JSX.Element {
		return (
			<Container>
				<Text>Home</Text>
				<ButtonImage bottom={true} image={IMAGE_BUTTON} navigation={this.props.navigation} />
			</Container>
		);
	}
}
