import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import Container from 'src/components/Container';
import ButtonImage from 'src/components/ButtonImage';
import ContainerNotice from 'src/components/ContainerNotice';
import TextPyramide from 'src/components/TextPyramide';
import { StyledMiddleView } from 'src/styles/Main';
import { IMAGE_BUTTON, LOGO } from 'src/utils/Images';
import styled from 'styled-components/native';
import {QuestionPageProps, QuestionPageStates} from 'src/interfaces/Home';
import { OBLACK, BLACK, RED, WHITE } from 'src/styles/Colors';
import { Icon } from 'react-native-elements';

const StyledText = styled.Text`
	position: absolute;
	bottom:0;
	width: 100%;
	height: 60px;
	text-align: center;
	line-height: 60px;
	font-size: 24px;
	backgroundColor: ${RED};
	color: ${WHITE};
`

const StyledPressable = styled.Pressable`
	position: absolute;
	bottom: 60px;
	backgroundColor: ${BLACK};
	width: 50%;
`

const StyledImage = styled.Image`
	position: absolute;
	top: 20px;
	height: 150px;
	width: 150px;
`

export default class Question extends Component<QuestionPageProps, QuestionPageStates>  {

	/**
	* The constructor and initializer of the state
	* @params {HomeProps} props The navigation informations
	**/
	constructor(props: QuestionPageProps) {
		super(props);
		this.state = {
			answers: 0
		};
	}

	/**
	* Manage the loop of the game
	* Control what to do if the game is not over or when the game is over
	**/
	gameLoop() {
		if (this.isGameFinish()) {
			this.goResult();
		} else {
			this.goNextQuestion();
		}
	}

	/**
	* Redirect to the result when the game is over
	**/
	goResult() {
		this.props.navigation.navigate('Result');
	}

	/**
	* Increase the number of answer given
	**/
	goNextQuestion() {
		this.setState({answers: this.state.answers + 1})
	}

	/**
	* Check if the game is finish or not
	* Return {boolean} True if the game is finish or else false
	**/
	isGameFinish() {
		return this.props.route.params.total <= this.state.answers + 1;
	}

	/**
	* Decide randomly who gonna answer first
	* return {string} The funny sentance for deciding who answer first
	**/
	whoIsFirst() {
		return Math.random() < 0.5 ? 'Be gentleman ! Men first !' : 'Ladies first !';
	}

	/**
	* Display the Question screen
	* return {JSX.Element} Display the question screen
	**/
	render(): JSX.Element {
		return (
			<Container>
				<StyledImage source={LOGO} />
				<StyledMiddleView>
					<TextPyramide text={"Question " + (this.state.answers + 1)} height={30} size={16} backgroundColor={WHITE} color={BLACK} icon="question-circle" />
					<ContainerNotice text={this.props.route.params.questions[this.state.answers].question} />
					<TextPyramide text={"10 questions remaining"} height={30} size={16} backgroundColor={WHITE} color={BLACK} isDown={true} />
				</StyledMiddleView>
				<StyledPressable onPress={() => this.gameLoop()}>
					<TextPyramide text="next question" height={50} size={24} backgroundColor={BLACK} color={WHITE} icon="caret-right" />
				</StyledPressable>
				<StyledText>{this.whoIsFirst()}</StyledText>
			</Container>
		);
	}
}
