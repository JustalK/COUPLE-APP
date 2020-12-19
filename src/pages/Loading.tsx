import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApiQuestion from 'src/services/ApiQuestion';
import {LoadingPageProps} from 'src/interfaces/Loading';

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
			<View>
				<Text>Loading</Text>
			</View>
		);
	}
}
