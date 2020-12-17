import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonImage from 'src/components/ButtonImage'
import Container from 'src/components/Container';
import {HomePageProps} from 'src/interfaces/Home';
import { IMAGE_BUTTON } from 'src/utils/Images';
import ApiQuestion from 'src/services/ApiQuestion';
import styled from 'styled-components/native';

export default class Home extends Component<HomePageProps, never> {

	constructor(props: HomePageProps) {
		super(props);
		this.state = {
			total: 3
		}
	}

	/**
	* Redirect to the game screen
	**/
	async goGame() {
		const result = await ApiQuestion.getAllQuestions();
		const questions = result.get_all_questions;
		this.props.navigation.navigate('Question', {total: this.state.total, questions: questions});
	}

	/**
	* Display the home screen
	* return {JSX.Element} Display the home
	**/
	render(): JSX.Element {
		return (
			<Container>
				<Text>Home</Text>
				<ButtonImage bottom={true} route="Question" image={IMAGE_BUTTON} callback={() => this.goGame()} />
			</Container>
		);
	}
}