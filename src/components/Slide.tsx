import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import { CustomButtonProps } from 'src/interfaces/CustomButton';
import { WHITE, PINK, RED, VERY_VERY_CLEAR_PINK } from 'src/styles/Colors';
import styled from 'styled-components/native';
import { Icon } from 'react-native-elements';

const StyledSlideView = styled(View)`
	flex: 1;
	align-items: center;
	justify-content: space-around;
`

 const StyledCircleView = styled(View)`
	height: 250px;
	width: 250px;
	border-radius: 125px;
	border: 5px solid ${VERY_VERY_CLEAR_PINK};
	background-color: ${WHITE};
 `

const StyledTitle = styled(Text)`
	font-family: RobotoBlack;
	font-size: 18px;
	color: ${WHITE};
	text-transform: uppercase;
`

const StyledDescription = styled(Text)`
	font-family: RobotoRegular;
	font-size: 16px;
	margin: 50px 30px 10px;
	text-align: center;
	color: ${WHITE};
`

/**
 * Show the background and define the container
 * @params {props} Define the children to be pass to the container
 **/
export default class Slide extends Component<SlideProps, never> {

	/**
	 * Display the container
	 * return {JSX.Element} Display the container
	 **/
	render(): JSX.Element {
		return (
			<StyledSlideView>
				<StyledTitle>{this.props.title}</StyledTitle>
				<StyledCircleView>
				</StyledCircleView>
				<StyledDescription>{this.props.description}</StyledDescription>
			</StyledSlideView>
		);
	}
}
