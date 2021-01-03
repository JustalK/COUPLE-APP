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
import { StyledMiddleView, StyledMiniLogo } from 'src/styles/Main';
import { LOGO } from 'src/utils/Images';
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
			topics: [],
			selectedTopics: ['156sdf16sd5sa45d4a6f65sdf65sf']
		};
	}

	/**
	 * Call only once when the component is loaded
	 * Call the api and fill up the topics
	 **/
	async componentDidMount(): Promise<void> {
		const result = await ApiTopic.getAllTopics();
		const topics = result.get_all_topics;
		this.setState({ topics });
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
							input={true} />
						<StyledDescription>Select one topic in the list under where the question belong to.</StyledDescription>
						<Topic topics={this.state.topics} selectedTopics={this.state.selectedTopics} topicSelected={(selected, topicID) => this.topicSelected(selected, topicID)} />
					</StyledView>
					<CustomButton text="Save" onPress={() => this.goGame()} />
				</ScrollView>
			</Container>
		);
	}
}
