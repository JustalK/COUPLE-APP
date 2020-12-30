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
	align-items: center;
	justify-content: center;
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

const StyledNotice = styled(Text)`
	font-family: RobotoRegular;
	font-size: 14px;
	color: ${WHITE};
`

const StyledCenteredView = styled(View)`
	align-items: center;
`

const StyledQuestion = styled(Text)`
	font-family: RobotoRegular;
	font-size: 20px;
	color: ${PINK};
	margin: 10px;
	text-align: center;
`

/**
 * Show the background and define the container
 * @params {props} Define the children to be pass to the container
 **/
export default class Slide extends Component<SlideProps, never> {

	notice(notice: string): JSX.Element {
		return (<StyledNotice>{notice}</StyledNotice>);
	}

	question(question: string): JSX.Element {
		return (<StyledQuestion>{this.capitalize(question)}</StyledQuestion>);
	}

	capitalize(str){
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	}

	/**
	 * Display the container
	 * return {JSX.Element} Display the container
	 **/
	render(): JSX.Element {
		return (
			<StyledSlideView>
				<StyledCenteredView>
					<StyledTitle>{this.props.title}</StyledTitle>
					{this.props.notice && this.notice(this.props.notice)}
				</StyledCenteredView>
				<StyledCircleView>
					{this.props.question && this.question(this.props.question)}
				</StyledCircleView>
				<StyledDescription>{this.props.description}</StyledDescription>
			</StyledSlideView>
		);
	}
}