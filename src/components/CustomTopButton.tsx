import React, { Component } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { CustomTopButtonProps, CustomTopButtonStates } from 'src/interfaces/CustomButton';
import { WHITE, VERY_CLEAR_PINK } from 'src/styles/Colors';
import styled from 'styled-components/native';
import { Icon } from 'react-native-elements';

const StyledView = styled(View)`
	flex: 1;
	flex-direction: row;
	justify-content: space-between
	margin: 30px 30px 0;
`;

const StyledLeftView = styled(View)`
	flex-direction: row;
`;

const StyledMiddleView = styled(View)`
	margin-left: 15px;
`;

/**
 * Show the background and define the container
 * @params {props} Define the children to be pass to the container
 **/
export default class CustomTopButton extends Component<CustomTopButtonProps, CustomTopButtonStates> {
	constructor(props: CustomTopButtonProps) {
		super(props);
		this.state = {
			hasBeenPressedLeft: false,
			hasBeenPressedRight: false,
			hasBeenPressedMiddle: false
		};
	}

	onPressIn(hasBeenPressed: string) {
		this.setState({[hasBeenPressed]: true});
	}


	onPress(callback: string, hasBeenPressed: string) {
    // @ts-ignore: The callback is on too many file
		this.props[callback]();
		this.setState({[hasBeenPressed]: false});
	}

	showIcon(icon: string, hasBeenPressed: string, callback: string): JSX.Element {
		return (
			<TouchableWithoutFeedback onPressIn={() => this.onPressIn(hasBeenPressed)} onPress={() => this.onPress(callback, hasBeenPressed)}>
				<View>
					<Icon name={icon} type="font-awesome" size={32} color={this.state[hasBeenPressed] ? VERY_CLEAR_PINK : WHITE} />
				</View>
			</TouchableWithoutFeedback>
		)
	}

	leftIcon(): JSX.Element {
		return (
			<StyledLeftView>
				{this.props.leftIcon && this.showIcon(this.props.leftIcon, 'hasBeenPressedLeft', 'onPressLeft')}
				<StyledMiddleView>
					{this.props.middleIcon && this.showIcon(this.props.middleIcon, 'hasBeenPressedMiddle', 'onPressMiddle')}
				</StyledMiddleView>
			</StyledLeftView>
		);
	}

	rightIcon(icon: string): JSX.Element {
		return this.showIcon(icon, 'hasBeenPressedRight', 'onPressRight');
	}

	/**
	 * Display the container
	 * return {JSX.Element} Display the container
	 **/
	render(): JSX.Element {
		return (
			<StyledView>
				{this.props.leftIcon && this.leftIcon()}
				{this.props.rightIcon && this.rightIcon(this.props.rightIcon)}
			</StyledView>
		);
	}
}
