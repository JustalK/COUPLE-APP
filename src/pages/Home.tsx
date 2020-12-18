import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonImage from 'src/components/ButtonImage'
import Container from 'src/components/Container';
import {HomePageProps} from 'src/interfaces/Home';
import { IMAGE_BUTTON } from 'src/utils/Images';
import { StyledTriangle } from 'src/styles/Main';
import { RED } from 'src/styles/Colors';
import ApiQuestion from 'src/services/ApiQuestion';
import styled from 'styled-components/native';

const StyledSquare = styled.View`
	backgroundColor: ${RED};
	width: 400px;
	height: 400px;
	position: absolute;
	top: -200px;
	left: -200px;
	z-index: 20;
	transform: rotateZ(-45deg);
`

const StyledSquareText = styled.Text`
	position: absolute;
	bottom: -40px;
	right: -50px;
	font-size: 30px;
	text-transform: uppercase;
	width: 250px;
	text-align: center;
	height: 40px;
	line-height: 40px;
	backgroundColor: yellow;
`

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
				<StyledSquare>
					<StyledSquareText>home</StyledSquareText>
				</StyledSquare>
			</Container>
		);
	}
}
