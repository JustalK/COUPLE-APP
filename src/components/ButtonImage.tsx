import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Image } from 'react-native';
import { ButtonImageProps } from 'src/interfaces/ButtonImage';
import styled from 'styled-components/native';

const StyledImage = styled.Image`
	height: 100px;
	width: 100px;
	border-bottom-right-radius: 20px;
	border-bottom-left-radius: 20px;
`

const StyledView = styled.View`
	${(props) => props.bottom && `
		position: absolute;
		align-self: center;
		bottom: 0;
	`}
`

export default class ButtonImage extends Component<ButtonImageProps, never> {

	constructor(props: ButtonImageProps) {
		super(props);
	}

	/**
	* Display the home or the loading screen
	* return {JSX.Element} Display the home
	**/
	render(): JSX.Element {
		return (
			<TouchableWithoutFeedback onPress={() => this.props.callback()}>
				<StyledView bottom={this.props.bottom}>
					<StyledImage source={this.props.image} />
				</StyledView>
			</TouchableWithoutFeedback>
		);
	}
}
