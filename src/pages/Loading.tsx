import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import Container from 'src/components/Container';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import ApiQuestion from 'src/services/ApiQuestion';
import {LoadingPageProps} from 'src/interfaces/Loading';
import styled from 'styled-components/native';
import { LOGO } from 'src/utils/Images';
import { WHITE } from 'src/styles/Colors';

const StyledImage = styled.Image`
	height: 125px;
	width: 125px;
`

const StyledView = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`

const StyledActivityIndicator = styled.ActivityIndicator`
	position: absolute;
`

export default class Loading extends Component<LoadingPageProps | LoadingPageStates> {

	async componentDidMount() {
		const result = await ApiQuestion.getAllQuestions();
		const questions = result.get_all_questions;
		this.props.navigation.navigate('Question', {total: this.props.total, questions: questions});
	}

	/**
	* Display the Result screen
	* return {JSX.Element} Display the result screen
	**/
	render(): JSX.Element {
		return (
			<Container>
				<StyledView>
					<StyledImage source={LOGO} />
					<StyledActivityIndicator size={200} color={WHITE} />
				</StyledView>
			</Container>
		);
	}
}
