import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import { CustomButtonProps, CustomButtonStates } from 'src/interfaces/CustomButton';
import { WHITE, PINK } from 'src/styles/Colors';
import styled from 'styled-components/native';

const StyledView = styled(View)`
	flex: 1;
	justify-content: flex-end;
	marginBottom: 50px;
`;

const StyledText = styled(Text)<{hasBeenPressed: boolean}>`
	border: 1px solid ${WHITE};
	color: ${WHITE};
	font-size: 24px;
	text-align: center;
	margin: 0 30px;
	padding: 10px;
	border-radius: 5px;
	fontFamily: RobotoBlack;
	text-transform: uppercase;

	${(props) =>
		props.hasBeenPressed &&
		`
		background-color: ${WHITE};
		color: ${PINK};
		border: 1px solid ${PINK};
	`}
`;



/**
 * Show the background and define the container
 * @params {props} Define the children to be pass to the container
 **/
export default class CustomButton extends Component<CustomButtonProps, CustomButtonStates> {
	constructor(props: CustomButtonProps) {
		super(props);
		this.state = {
			hasBeenPressed: false
		};
	}

	pressed() {
		this.setState({hasBeenPressed: true})
	}

	callback() {
		this.props.onPress();
		this.setState({hasBeenPressed: false})
	}

	/**
	 * Display the container
	 * return {JSX.Element} Display the container
	 **/
	render(): JSX.Element {
		return (
			<StyledView>
				<TouchableWithoutFeedback onPressIn={() => this.pressed()} onPress={() => this.callback()}>
					<StyledText hasBeenPressed={this.state.hasBeenPressed} >{this.props.text}</StyledText>
				</TouchableWithoutFeedback>
			</StyledView>
		);
	}
}
