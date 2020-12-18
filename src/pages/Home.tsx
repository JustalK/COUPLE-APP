import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonImage from 'src/components/ButtonImage'
import Container from 'src/components/Container';
import {HomePageProps} from 'src/interfaces/Home';
import { IMAGE_BUTTON } from 'src/utils/Images';
import { StyledTriangle } from 'src/styles/Main';
import { BLACK, RED, WHITE } from 'src/styles/Colors';
import ApiQuestion from 'src/services/ApiQuestion';
import styled from 'styled-components/native';

const StyledSquare = styled.View`
	position: absolute;
	backgroundColor: ${RED};
	width: 400px;
	height: 400px;
	transform: rotateZ(-45deg);
`

const StyledSquareTop = styled(StyledSquare)`
	top: -200px;
	left: -200px;
`

const StyledSquareBottom = styled(StyledSquare)`
	bottom: -200px;
	right: -200px;
`

const StyledSquareText = styled.Text`
	position: absolute;
	font-size: 30px;
	text-transform: uppercase;
	width: 250px;
	height: 40px;
	line-height: 40px;
`

const StyledSquareTopText = styled(StyledSquareText)`
	backgroundColor: ${RED};
	bottom: -40px;
	right: -50px;
	padding-left: 40px;
`

const StyledSquareBottomText = styled(StyledSquareText)`
	backgroundColor: ${BLACK};
	color: ${WHITE};
	top: -40px;
	left: -50px;
	text-align: right;
	padding-right: 40px;
`

const StyledSquareTriangle = styled.View`
	position: absolute;
	width: 0;
	height: 0;
	borderStyle: solid;
	borderBottomColor: transparent;
	borderTopColor: transparent;
	borderRightColor: ${RED};
`

const StyledSquareTopTriangle = styled(StyledSquareTriangle)`
	bottom: -40px;
	right: 200px;
	borderBottomWidth: 40px;
	borderTopWidth: 0px;
	borderRightWidth: 40px;
	borderRightColor: ${RED};
`

const StyledSquareBottomTriangle = styled(StyledSquareTriangle)`
	top: -40px;
	left: 200px;
	borderBottomWidth: 0px;
	borderTopWidth: 40px;
	borderLeftWidth: 40px;
	borderLeftColor: ${BLACK};
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
				<StyledSquareTop>
					<StyledSquareTopText>home</StyledSquareTopText>
					<StyledSquareTopTriangle />
				</StyledSquareTop>
				<StyledSquareBottom>
					<StyledSquareBottomText>start</StyledSquareBottomText>
					<StyledSquareBottomTriangle />
				</StyledSquareBottom>
			</Container>
		);
	}
}
