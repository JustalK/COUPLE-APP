import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import Container from 'src/components/Container';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ApiQuestion from 'src/services/ApiQuestion';
import {LoadingPageProps} from 'src/interfaces/Loading';
import ContainerNotice from 'src/components/ContainerNotice';
import TextPyramide from 'src/components/TextPyramide';
import { StyledMiddleView } from 'src/styles/Main';
import styled from 'styled-components/native';
import { LOGO } from 'src/utils/Images';
import { WHITE, BLACK, RED } from 'src/styles/Colors';

const StyledView = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`

const StyledImage = styled.Image`
	position: absolute;
	align-self: center;
	top: 20px;
	height: 150px;
	width: 150px;
`

export default class Loading extends Component<LoadingPageProps | LoadingPageStates> {

	constructor(props: HomePageProps) {
		super(props);
		this.state = {
			questions: []
		}
	}

	async componentDidMount() {
		const result = await ApiQuestion.getAllQuestions();
		const questions = result.get_all_questions;
		this.setState({questions});
	}

	goGame() {
		if(this.state.questions.length !== 0) {
			this.props.navigation.navigate('Question', {total: this.props.route.params.total, questions: this.state.questions});
		}
	}

	instructions() {
		return this.state.questions.length === 0 ? 'Game loading...' : 'Press the screen to continue';
	}

	/**
	* Display the Result screen
	* return {JSX.Element} Display the result screen
	**/
	render(): JSX.Element {
		return (
			<Container>
				<Pressable onPress={() => this.goGame()}>
					<StyledImage source={LOGO} />
					<StyledMiddleView marginTop={60}>
						<TextPyramide text="Rules" height={30} size={16} backgroundColor={BLACK} color={RED} icon="warning" />
						<ContainerNotice text="You will see questions on the screen. Answer the questions following the turns order. The game ends when all the questions has been answered." />
						<TextPyramide text={this.instructions()} height={30} size={16} backgroundColor={WHITE} color={BLACK} isDown={true} />
					</StyledMiddleView>
				</Pressable>
			</Container>
		);
	}
}
