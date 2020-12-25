import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { ContainerProps } from 'src/interfaces/Container';
import { BACKGROUND } from 'src/utils/Images';
import styled from 'styled-components/native';

/**
 * Style the container for taking all the space and align items
 **/
const StyledContainer = styled(View)<{ bg?: string }>`
	display: flex;
	align-items: center;
	position: relative;
	${(props) =>
		props.bg &&
		`
		backgroundColor: ${props.bg};
	`}
	flex: 1;
`;

/**
 * Style the Image Background for taking all the screen
 **/
const StyledImageBackground = styled(ImageBackground)`
	flex: 1;
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
			<StyledImageBackground source={BACKGROUND}>
				<StyledContainer bg={this.props.bg}>{this.props.children}</StyledContainer>
			</StyledImageBackground>
		);
	}
}
