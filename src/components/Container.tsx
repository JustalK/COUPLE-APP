import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Image } from 'react-native';
import { ContainerProps } from 'src/interfaces/Container';
import styled from 'styled-components/native';

const StyledContainer = styled.View<{flex?: Int}>`
	height: 100%;
	padding: 10%;
	display: flex;
	align-items: center;
	background-color: palevioletred;
	position: relative;

	flex: ${props => props.flex || 1};
`

export default class Container extends Component<ContainerProps, never> {

	constructor(props: ContainerProps) {
		super(props);
	}

	/**
	* Display the home or the loading screen
	* return {JSX.Element} Display the home
	**/
	render(): JSX.Element {
		return (
			<StyledContainer flex={this.props.flex}>
				{this.props.children}
			</StyledContainer>
		);
	}
}
