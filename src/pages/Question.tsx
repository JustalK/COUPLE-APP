import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Container from 'src/components/Container';
import CustomButton from 'src/components/CustomButton';
import CustomTopButton from 'src/components/CustomTopButton';
import ContainerNotice from 'src/components/ContainerNotice';
import Slide from 'src/components/Slide';
import TextPyramide from 'src/components/TextPyramide';
import { StyledMiddleView, StyledMiniLogo } from 'src/styles/Main';
import { LOGO } from 'src/utils/Images';
import styled from 'styled-components/native';
import { QuestionPageProps, QuestionPageStates } from 'src/interfaces/Question';
import { BLACK, RED, WHITE } from 'src/styles/Colors';

/**
 * Defining the style of the bottom text
 **/
const StyledText = styled(Text)`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 60px;
	text-align: center;
	line-height: 60px;
	font-size: 24px;
	background-color: ${RED};
	color: ${WHITE};
`;

const StyledView = styled(View)`
	flex: 8;
	align-items: center;
	justify-content: flex-end;
`

/**
 * Display the question component
 * @params {HomeProps} props The navigation informations
 **/
export default class Question extends Component<QuestionPageProps, QuestionPageStates> {
	/**
	 * The constructor and initializer of the state
	 * @params {HomeProps} props The navigation informations
	 **/
	constructor(props: QuestionPageProps) {
		super(props);
		this.state = {
			answers: 0,
			lock: false,
			next: false,
		};
	}

	/**
	 * Manage the loop of the game
	 * Control what to do if the game is not over or when the game is over
	 **/
	gameLoop(): void {
		if (!this.state.lock) {
			this.setState({ lock: true });
			if (this.isGameFinish()) {
				this.goResult();
			} else {
				this.goNextQuestion();
			}
		}
	}

	/**
	 * Redirect to the result when the game is over
	 **/
	goResult(): void {
		this.props.navigation.navigate('Result');
	}

	/**
	 * Increase the number of answer given
	 **/
	goNextQuestion(): void {
		setTimeout(() => {
			this.setState({ next: false, lock: false, answers: this.state.answers + 1 });
		}, 200);
	}

	/**
	 * Check if the game is finish or not
	 * Return {boolean} True if the game is finish or else false
	 **/
	isGameFinish(): boolean {
		return this.props.route.params.total <= this.state.answers + 1;
	}

	/**
	 * Decide randomly who gonna answer first
	 * return {string} The funny sentance for deciding who answer first
	 **/
	whoIsFirst(): string {
		return Math.random() < 0.5 ? 'Be gentleman ! Men first !' : 'Ladies first !';
	}

	/**
	 * Start the animation for the next question
	 **/
	nextStarted(): void {
		this.setState({ next: true });
	}

	/**
	 * Display the Question screen
	 * return {JSX.Element} Display the question screen
	 **/
	render(): JSX.Element {
		return (
			<Container>
				<CustomTopButton leftIcon="long-arrow-left" onPressLeft={() => this.goMenu()} middleIcon="comment" onPressMiddle={() => this.goMenu()} rightIcon="times" onPressRight={() => this.goMenu()} />
				<StyledView>
					<Slide
						title={'Question ' + (this.state.answers + 1)}
						notice={this.props.route.params.total - this.state.answers - 1 + ' questions remaining'}
						question={this.props.route.params.questions[this.state.answers].question}
						description={this.whoIsFirst()} />
				</StyledView>
				<CustomButton text={this.isGameFinish() ? 'End game' : 'Next question'} onPress={() => this.gameLoop()} />
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	pressableNext: {
		position: 'absolute',
		bottom: 60,
		backgroundColor: BLACK,
		width: '50%',
	},
});
