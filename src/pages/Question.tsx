import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from 'src/components/Container';
import ButtonImage from 'src/components/ButtonImage';
import { IMAGE_BUTTON } from 'src/utils/Images';
import {QuestionPageProps, QuestionPageStates} from 'src/interfaces/Home';

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
		return this.props.route.params.options.total < this.state.answers + 1;
	}

	/**
	* Display the Question screen
	* return {JSX.Element} Display the question screen
	**/
	render(): JSX.Element {
		return (
			<Container>
				<Text>{this.state.answers}/{this.props.route.params.options.total}</Text>
				<ButtonImage bottom={true} route="Question" image={IMAGE_BUTTON} callback={() => this.gameLoop()} />
			</Container>
		);
	}
}
