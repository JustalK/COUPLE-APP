import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Pressable, Text, View } from 'react-native';
import ButtonImage from 'src/components/ButtonImage'
import Container from 'src/components/Container';
import {HomePageProps} from 'src/interfaces/Home';
import { IMAGE_BUTTON } from 'src/utils/Images';
import { StyledTriangle } from 'src/styles/Main';
import { BLACK, RED, WHITE } from 'src/styles/Colors';
import ApiQuestion from 'src/services/ApiQuestion';
import styled from 'styled-components/native';

const StyledBigSquare = styled.View`
	position: absolute;
	width: 440px;
	height: 440px;
	transform: rotateZ(-45deg);
`

const StyledBigSquareTop = styled(StyledBigSquare)`
	top: -240px;
	left: -240px;
	backgroundColor: ${RED};
`

const StyledBigSquareBottom = styled(StyledBigSquare)`
	bottom: -240px;
	right: -240px;
`

const StyledSquareBottom = styled.View`
	position: absolute;
	width: 400px;
	height: 400px;
	bottom: 0;
	left: 0;
	backgroundColor: ${BLACK};
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
	top: 0;
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
	top: 0;
	left: 200px;
	borderBottomWidth: 0px;
	borderTopWidth: 40px;
	borderLeftWidth: 40px;
	borderLeftColor: ${BLACK};
`

const StyledPressable = styled.Pressable`
	width: 250px;
	height: 40px;
	z-index: 40;
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
				<StyledBigSquareTop>
					<StyledSquareTopText>home</StyledSquareTopText>
					<StyledSquareTopTriangle />
				</StyledBigSquareTop>
				<StyledBigSquareBottom>
					<StyledSquareBottom />
					<StyledPressable onPress={() => this.goGame()}>
						<View>
							<StyledSquareBottomText onPress={() => this.goGame()}>start</StyledSquareBottomText>
							<StyledSquareBottomTriangle />
						</View>
					</StyledPressable>
				</StyledBigSquareBottom>
				<StatusBar hidden />
			</Container>
		);
	}
}
