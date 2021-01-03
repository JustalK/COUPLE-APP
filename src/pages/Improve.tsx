import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Container from 'src/components/Container';
import CustomButton from 'src/components/CustomButton';
import CustomTopButton from 'src/components/CustomTopButton';
import ContainerNotice from 'src/components/ContainerNotice';
import Slide from 'src/components/Slide';
import Topic from 'src/components/Topic';
import TextPyramide from 'src/components/TextPyramide';
import ApiTopic from 'src/services/ApiTopic';
import ApiQuestion from 'src/services/ApiQuestion';
import { StyledMiddleView, StyledMiniLogo } from 'src/styles/Main';
import { LOGO } from 'src/utils/Images';
import { goHome } from 'src/utils/Navigation';
import styled from 'styled-components/native';
import { QuestionPageProps, QuestionPageStates } from 'src/interfaces/Question';
import { WHITE, PINK, VERY_CLEAR_PINK, VERY_VERY_CLEAR_PINK } from 'src/styles/Colors';

const StyledView = styled(View)`
	flex: 8;
	align-items: center;
	justify-content: flex-end;
	margin: 0 30px;
`

const StyledDescription = styled(Text)`
	font-family: RobotoRegular;
	color: ${WHITE};
	font-size: 14px;
	margin: 50px 0 50px;
`

/**
 * Display the question component
 * @params {HomeProps} props The navigation informations
 **/
export default class Improve extends Component {

	constructor(props) {
		super(props);
		this.state = {
			question: "This is a question",
			topics: [],
			selectedTopics: []
		};
	}

	/**
	 * Call only once when the component is loaded
	 * Call the api and fill up the topics
	 **/
	async componentDidMount(): Promise<void> {
		const result = await ApiTopic.getAllTopics();
		const topics = result.get_all_topics;
		const selectedTopics = topics.length > 0 ? [topics[0].id] : []
		this.setState({ topics, selectedTopics });
	}

	/**
	* Selection the topic of the question
	* @params {boolean} selected True if the icon is selected or false is unselected (Not usefull here)
	* @params {string} topicID The id of the topic selected
	**/
	topicSelected(selected: boolean, topicID: string): void {
		this.setState({selectedTopics: [topicID]})
	}

	inputUpdate(question) {
		this.setState({ question })
	}

	/**
	* Save the question created in the db and redirect to previous page
	**/
	save() {
		ApiQuestion.addNewQuestion(this.state.question, this.state.selectedTopics[0]);
		this.props.navigation.goBack();
	}

	/**
	 * Display the Question screen
	 * return {JSX.Element} Display the question screen
	 **/
	render(): JSX.Element {
		return (
			<Container>
				<ScrollView>
					<CustomTopButton leftIcon="long-arrow-left" onPressLeft={() => this.props.navigation.goBack()} />
					<StyledView>
						<Slide
							title="Adding a question"
							notice="Tap in the circle under for writting a question"
							input={true}
							inputQuestion={this.state.question}
							inputUpdate={(question) => this.inputUpdate(question)}/>
						<StyledDescription>Select one topic in the list under where the question belong to.</StyledDescription>
						<Topic topics={this.state.topics} selectedTopics={this.state.selectedTopics} topicSelected={(selected, topicID) => this.topicSelected(selected, topicID)} />
					</StyledView>
					<CustomButton text="Save" onPress={() => this.save()} />
				</ScrollView>
			</Container>
		);
	}
}
