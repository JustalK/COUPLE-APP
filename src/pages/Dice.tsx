import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';
import Container from 'src/components/Container'
import styled from 'styled-components/native';

const StyledView = styled.View`
	flex: 1;
`

export default class Dice extends Component {

	/**
	* Display the Dice screen
	* return {JSX.Element} Display the dice screen
	**/
	render(): JSX.Element {
		return (
			<Container>
				<TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Question')}>
					<StyledView>
						<Text>Bla answer first !</Text>
						<Text>Press to see next questions</Text>
					</StyledView>
				</TouchableWithoutFeedback>
			</Container>
		);
	}
}
