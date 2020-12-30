import React, { Component } from 'react';
import { TouchableWithoutFeedback, StyleSheet, ScrollView, Text, View } from 'react-native';
import ApiQuestion from 'src/services/ApiQuestion';
import Container from 'src/components/Container';
import CustomTopButton from 'src/components/CustomTopButton';
import { StyledMiddleView, StyledMiniLogo } from 'src/styles/Main';
import { MenuPageProps, MenuPageStates } from 'src/interfaces/Menu';
import { LOGO } from 'src/utils/Images';
import { WHITE, OBLACK, VERY_CLEAR_PINK, RED } from 'src/styles/Colors';
import { Picker } from '@react-native-picker/picker';
import { Icon } from 'react-native-elements';
import { CommonActions } from '@react-navigation/native';
import styled from 'styled-components/native';

const StyledTitle = styled(Text)`
	text-transform: uppercase;
	font-family: RobotoBlack;
	color: ${WHITE};
	font-size: 18px;
	margin-bottom: 30px;
`

const StyledView = styled(View)`
	align-items: center;
	justify-content: flex-end;
	margin: 0 30px;
`

const StyledRowView = styled(View)`
	width: 100%;
	flex-direction: row;
	flex-wrap: wrap;
	flex-grow: 2;
	justify-content: space-between;
`

const StyledTopic = styled(View)`
	width: 25%;
	margin-bottom: 30px;
	align-items: center;
`

const IconTitle = styled(Text)<{selected: boolean}>`
	font-family: RobotoRegular;
	color: ${WHITE};
	font-size: 12px;
	margin: 5px;
	text-align: center;

	${(props) =>
		props.selected &&
		`
		color: ${VERY_CLEAR_PINK};
	`}
`

/**
 * Display the menu screen
 **/
export default class Menu extends Component<MenuPageProps, MenuPageStates> {
	constructor(props: MenuPageProps) {
		super(props);
		this.state = {
			total: 3,
			text: '',
			topics: [{
				_id: '156sdf16sd5f65sdf65sf',
				icon: 'adjust',
				name: 'This is a test',
			},{
				_id: '156sdf16sd5sa45d4a6f65sdf65sf',
				icon: 'bars',
				name: 'This is a test for em',
			},{
				_id: '156sdasd465a4sdf16sd5f65sdf65sf',
				icon: 'bell',
				name: 'This is a test d5s4f6 5s4 df',
			},{
				_id: '156sdf16sd5f65sdas4d56a4sdf65sf',
				icon: 'radiation',
				name: 'This is a test dsf dsf sdf sdf',
			},{
				_id: '156sdf16sd5asd465a4sdf65sdf65sf',
				icon: 'camera',
				name: 'This is a test',
			},{
				_id: '156sdf16sd5as4d65a4sd665sdf65sf',
				icon: 'bolt',
				name: 'Thisd fsdf s is a sdf sdf dsf sdf test',
			}],
			selectedTopics: ['156sdf16sd5sa45d4a6f65sdf65sf'],
			questionAdded: false,
			max: 0,
		};
	}

	/**
	 * Call only once when the component is loaded
	 * Call the api and activate the redirection when finished
	 **/
	async componentDidMount(): Promise<void> {
		const result = await ApiQuestion.countTotalQuestions();
		const max = result.count_total_questions;
		this.setState({ max });
	}

	/**
	 * Redirect to the home screen with the right parameter
	 **/
	goBackHome(): void {
		this.props.navigation.dispatch(
			CommonActions.navigate({
				name: 'Home',
				params: {
					total: this.state.total,
				},
			}),
		);
	}

	/**
	 * Add a question to the game
	 **/
	async addNewQuestion(): Promise<void> {
		if (this.isNewQuestionWorthIt()) {
			const newQuestion = this.sanitizeNewQuestion();
			await ApiQuestion.addNewQuestion(newQuestion);
			this.setState({ questionAdded: false, text: '', max: this.state.max + 1 });
		}
	}

	questionAdded(): void {
		if (this.isNewQuestionWorthIt()) {
			this.setState({ questionAdded: true });
		}
	}

	sanitizeNewQuestion(): string {
		if (this.state.text === undefined || this.state.text === null) {
			return '';
		}

		let newQuestion = this.state.text.trim();
		newQuestion = newQuestion.replace(/'/g, "\\'");

		return newQuestion;
	}

	isNewQuestionWorthIt(): boolean {
		return this.sanitizeNewQuestion() !== '';
	}

	topicSelected(selected: boolean, topicID: string): void {
		let newSelectedTopics = this.state.selectedTopics;

		if (selected) {
			const index = newSelectedTopics.indexOf(topicID);
			newSelectedTopics.splice(index, 1);
		} else {
			newSelectedTopics.push(topicID);
		}

		this.setState({selectedTopics: newSelectedTopics})
	}

	/**
	 * Display the Menu screen
	 * return {JSX.Element} Display the menu screen
	 **/
	render(): JSX.Element {
		return (
			<Container>
				<ScrollView>
					<CustomTopButton leftIcon="long-arrow-left" onPressLeft={() => this.goBackHome()} />
					<StyledView>
						<StyledTitle>Main</StyledTitle>
						<StyledTitle>Topics</StyledTitle>
						<StyledRowView>
							{this.state.topics.map((topic, index) => {
								const selected = this.state.selectedTopics && this.state.selectedTopics.includes(topic._id);
								return (
									<TouchableWithoutFeedback onPress={() => this.topicSelected(selected, topic._id)}>
										<StyledTopic>
											<Icon name={topic.icon} type="font-awesome" size={32} color={selected ? VERY_CLEAR_PINK : WHITE} />
											<IconTitle selected={selected} >{topic.name}</IconTitle>
										</StyledTopic>
									</TouchableWithoutFeedback>)
							})}
						</StyledRowView>
					</StyledView>
				</ScrollView>
			</Container>
		);
	}
}
