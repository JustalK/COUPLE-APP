import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { ContainerProps } from 'src/interfaces/Container';
import { BACKGROUND } from 'src/utils/Images';
import { PINK, DARK_PINK, RED } from 'src/styles/Colors';
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
			<StyledLinearGradient colors={[PINK, RED]} >
				<StyledViewStatus />
					{this.props.children}
			</StyledLinearGradient>
		);
	}
}
