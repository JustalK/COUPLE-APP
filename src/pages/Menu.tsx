import React, { Component } from 'react';
import { TouchableWithoutFeedback, StyleSheet, ScrollView, Text, View } from 'react-native';
import ApiQuestion from 'src/services/ApiQuestion';
import ApiTopic from 'src/services/ApiTopic';
import Container from 'src/components/Container';
import CustomTopButton from 'src/components/CustomTopButton';
import Topic from 'src/components/Topic';
import { StyledMiddleView, StyledMiniLogo } from 'src/styles/Main';
import { MenuPageProps, MenuPageStates } from 'src/interfaces/Menu';
import { LOGO } from 'src/utils/Images';
import { WHITE, PINK, VERY_CLEAR_PINK, VERY_VERY_CLEAR_PINK } from 'src/styles/Colors';
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

const StyledDescription = styled(Text)`
	font-family: RobotoRegular;
	color: ${VERY_CLEAR_PINK};
	font-size: 14px;
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
	justify-content: space-between;
	margin-bottom: 30px;
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


const MainTitle = styled(Text)`
	font-family: RobotoRegular;
	color: ${WHITE};
	font-size: 16px;
	margin: 5px;
	line-height: 50px;
`

const StyledPicker = styled(Picker)`
	height: 50px;
	width: 100px;
	border: 1px solid ${WHITE};
	color: ${PINK};
`;

const StyledRedCell = styled(View)`
	background-color: ${WHITE};
	padding-left: 10px;
	justify-content: center;
`;

/**
 * Display the menu screen
 **/
export default class Menu extends Component<MenuPageProps, MenuPageStates> {
	constructor(props: MenuPageProps) {
		super(props);
		this.state = {
			total: 3,
			text: '',
			topics: [],
			selectedTopics: [],
			questionAdded: false,
			max: 0,
		};
	}

	/**
	 * Call only once when the component is loaded
	 * Call the api and activate the redirection when finished
	 **/
	async componentDidMount(): Promise<void> {
		const result_max = await ApiQuestion.countTotalQuestions();
		const result_topics = await ApiTopic.getAllTopics();
		const max = result_max.count_total_questions;
		const topics = result_topics.get_all_topics;
		this.setState({max, topics });
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
		console.log(topicID);

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
						<StyledDescription>You can select the number of question, you want to answer. The game will select randomly the exact number of question selected.</StyledDescription>
						<StyledRowView>
							<MainTitle>Number of questions</MainTitle>
							<StyledRedCell>
								<StyledPicker
									selectedValue={this.state.total}
									onValueChange={(value) => {
										this.setState({ total: Number(value) });
									}}
								>
									<Picker.Item color={VERY_VERY_CLEAR_PINK} label="3" value={3} />
									<Picker.Item color={VERY_VERY_CLEAR_PINK} label="5" value={5} />
									<Picker.Item color={VERY_VERY_CLEAR_PINK} label="10" value={10} />
									<Picker.Item color={VERY_VERY_CLEAR_PINK} label="25" value={25} />
									<Picker.Item color={VERY_VERY_CLEAR_PINK} label="ALL" value={this.state.max} />
								</StyledPicker>
							</StyledRedCell>
						</StyledRowView>
						<StyledTitle>Topics</StyledTitle>
						<StyledDescription>You can select the topics or set of questions, you want to answer. You can select multiple topics. If the color of the topic is white, it means it has not been selected.</StyledDescription>
						<Topic topics={this.state.topics} selectedTopics={this.state.selectedTopics} topicSelected={(selected, topicID) => this.topicSelected(selected, topicID)} />
					</StyledView>
				</ScrollView>
			</Container>
		);
	}
}
