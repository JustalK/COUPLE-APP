import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ContainerNoticeProps } from 'src/interfaces/Container';
import { OBLACK, WHITE, BLACK } from 'src/styles/Colors';
import styled from 'styled-components/native';

const StyledView = styled(View)`
	backgroundcolor: ${OBLACK};
	padding: 40px;
	position: relative;
	margin: 0 10%;
	border: 1px solid ${BLACK};
`;

const StyledText = styled(Text)`
	color: ${WHITE};
	font-size: 24px;
	text-align: justify;
`;

/**
 * Show the background and define the container
 * @params {props} Define the children to be pass to the container
 **/
export default class ContainerNotice extends Component<ContainerNoticeProps, never> {
	/**
	 * Display the container
	 * return {JSX.Element} Display the container
	 **/
	render(): JSX.Element {
		return (
			<StyledView>
				{this.props.children}
				<StyledText>{this.props.text}</StyledText>
			</StyledView>
		);
	}
}
