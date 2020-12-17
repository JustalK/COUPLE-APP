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

const StyledTriangleBottom = styled(StyledTriangle)`
	borderLeftWidth: 250px;
	borderTopWidth: 0;
	borderBottomWidth: 250px;
	borderLeftColor: transparent;
	borderTopColor: transparent;
	borderBottomColor: ${RED};
	position: absolute;
	bottom: 0;
	right: 0;
`

const StyledText =  styled.Text`
	backgroundColor: black;
	color: white;
	width: 250px
	line-height: 50px;
	transform: rotateZ(-45deg);
	text-align: center;
	text-transform: uppercase;
	font-size: 25px;
`

const StyledTextBottom = styled(StyledText)`
	position: absolute;
	bottom: 40px;
	right: 94px;
`

const StyledTextTop = styled(StyledText)`
	position: absolute;
	top: 40px;
	right: 94px;
	backgroundColor: ${RED};
`

const StyledTriangleTop = styled(StyledTriangle)`
	borderTopWidth: 0px;
	borderBottomWidth: 250px;
	borderLeftWidth: 250px;
	borderTopColor: transparent;
	borderBottomColor: transparent;
	borderLeftColor: ${RED};
	position: absolute;
	top: 0;
	left: 0;
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
				<StyledTriangleBottom />
				<StyledTextBottom>START</StyledTextBottom>
				<Text>Home</Text>
				<StyledTextTop>HOME</StyledTextTop>
				<StyledTriangleTop />
			</Container>
		);
	}
}
