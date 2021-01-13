import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { ContainerProps } from 'src/interfaces/Container';
import { BACKGROUND } from 'src/utils/Images';
import { PINK, DARK_PINK, RED, VERY_VERY_CLEAR_PINK } from 'src/styles/Colors';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

/**
 * Style the container for taking all the space and align items
 **/
const StyledContainer = styled(View)<{ bg?: string }>`
	${(props) =>
		props.bg &&
		`
		background-color: ${props.bg};
	`}
`;

/**
 * Style the Image Background for taking all the screen
 **/
const StyledLinearGradient = styled(LinearGradient)`
	flex: 1;
`;

const StyledViewStatus = styled(View)`
	background-color: ${DARK_PINK};
	border-bottom-width: 1px;
	border-bottom-color: ${VERY_VERY_CLEAR_PINK};
	height: 25px;
`;

/**
 * Show the background and define the container
 * @params {props} Define the children to be pass to the container
 **/
export default class Container extends Component<ContainerProps, never> {
	/**
	 * Display the container
	 * return {JSX.Element} Display the container
	 **/
	render(): JSX.Element {
		return (
			<StyledLinearGradient colors={[PINK, RED, PINK]} start={{x: 0.2, y: 0.9}} end={{x: 0.8, y: 0.2}} >
				<StyledViewStatus />
					{this.props.children}
			</StyledLinearGradient>
		);
	}
}
