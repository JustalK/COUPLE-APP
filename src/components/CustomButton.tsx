import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import { CustomButtonProps } from 'src/interfaces/CustomButton';
import { WHITE, BLACK } from 'src/styles/Colors';
import styled from 'styled-components/native';

const StyledView = styled(View)`
	flex: 1;
	justify-content: flex-end;
	marginBottom: 50px;
`;

const StyledText = styled(Text)`
	border: 1px solid ${WHITE};
	color: ${WHITE};
	font-size: 24px;
	text-align: center;
	margin: 0 30px;
	padding: 10px;
	border-radius: 5px;
`;



/**
 * Show the background and define the container
 * @params {props} Define the children to be pass to the container
 **/
export default class CustomButton extends Component<CustomButtonProps, never> {
	/**
	 * Display the container
	 * return {JSX.Element} Display the container
	 **/
	render(): JSX.Element {
		return (
			<StyledView>
				<TouchableWithoutFeedback onPressIn={this.props.onPressIn} onPress={this.props.onPress}>
					<StyledText>{this.props.text}</StyledText>
				</TouchableWithoutFeedback>
			</StyledView>
		);
	}
}
