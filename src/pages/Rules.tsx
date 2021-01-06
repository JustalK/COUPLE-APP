import React, { Component } from 'react';
import Container from 'src/components/Container';
import { Text, View, Pressable, Dimensions } from 'react-native';
import ApiQuestion from 'src/services/ApiQuestion';
import CustomTopButton from 'src/components/CustomTopButton';
import Slide from 'src/components/Slide';
import { goHome } from 'src/utils/Navigation';
import { RulesPageProps, RulesPageStates, RoutesProps } from 'src/interfaces/Rules';
import { TabView, TabBar } from 'react-native-tab-view';
import ContainerNotice from 'src/components/ContainerNotice';
import CustomButton from 'src/components/CustomButton';
import TextPyramide from 'src/components/TextPyramide';
import { StyledMiddleView, StyledMiniLogo } from 'src/styles/Main';
import { SLIDE_1, SLIDE_2, SLIDE_3 } from 'src/utils/Images';
import { WHITE, PINK, RED } from 'src/styles/Colors';
import styled from 'styled-components/native';

const StyledSliderDotView = styled(View)`
	flex: 1
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

const StyledDot = styled(View)<{ active: boolean }>`
	width: 12px;
	height: 12px;
	border-radius: 6px;
	margin: 0 10px;
	background-color: ${WHITE};

	${(props) =>
		props.active &&
		`
		background-color: ${PINK};
		border: 1px solid ${WHITE};
	`}
`;

/**
 * Display the loading component
 * @params {RulesPageProps} props The navigation object for redirecting the suer to question and getting the total questions
 **/
export default class Rules extends Component<RulesPageProps, RulesPageStates> {
	/**
	 * The constructor of the loading screen
	 * @params {RulesPageProps} props The navigation object for redirecting the suer to question and getting the total questions
	 **/
	constructor(props: RulesPageProps) {
		super(props);
		this.state = {
			questions: [],
			index: 0,
			routes: [{ key: 'first_slide' }, { key: 'second_slide' }, { key: 'third_slide' }],
		};
	}

	/**
	 * Call only once when the component is loaded
	 * Call the api and activate the redirection when finished
	 **/
	async componentDidMount(): Promise<void> {
		const topicsID = this.props.route.params.selectedTopics.join('","');
		const result = await ApiQuestion.getRandomQuestionsByTopics(topicsID, this.props.route.params.total);
		const questions = result.get_random_questions_by_topics;
		this.setState({ questions });
	}

	/**
	 * Redirect the user to the questions screen
	 **/
	goGame(): void {
		if (this.state.questions.length !== 0) {
			this.props.navigation.navigate('Question', {
				total: this.props.route.params.total,
				questions: this.state.questions,
			});
		}
	}

	/**
	 * Return the sentance to indicate the instructions for the user
	 * @return {string} The instructions
	 **/
	instructions(): string {
		return this.state.questions.length === 0 ? 'Game loading...' : 'Press the screen to continue';
	}

	/**
	* Set the index of the tabs
	* @params {number} index The new index of the tabs
	**/
	updateIndex(index: number): void {
		this.setState({ index });
	}

	renderScene(route: RoutesProps, jumpTo: (key: string) => void): JSX.Element | undefined {
		switch (route.key) {
			case 'first_slide':
				return (
					<Slide
						title="Rules 1"
						image={SLIDE_1}
						notice="Slide to the left to go throught the rules."
						description="A question will be shown on the screen."
					/>
				);
			case 'second_slide':
				return (
					<Slide
						title="Rules 2"
						image={SLIDE_2}
						notice="Slide to the left to go throught the rules."
						description="Each of you has to answer this question truthfully following the random order decided at each question."
					/>
				);
			case 'third_slide':
				return (
					<Slide
						title="Rules 3"
						image={SLIDE_3}
						notice="Slide to the right if you miss a detail."
						description="Once all the questions has been answered, the game will end. You can play again with another set of questions."
					/>
				);
		}
	}

	/**
	* Return the width of the screen in a Dimension object
	* @params {number} width The width of the screen
	**/
	initialLayout(): { width: number } {
		return { width: Dimensions.get('window').width };
	}

	/**
	 * Display the loading screen
	 * return {JSX.Element} Display the loading screen
	 **/
	render(): JSX.Element {
		return (
			<Container>
				<CustomTopButton leftIcon="long-arrow-left" onPressLeft={() => goHome(this.props.navigation)} />
				<TabView
					navigationState={this.state}
					renderScene={(rs) => this.renderScene(rs.route, rs.jumpTo)}
					onIndexChange={(index) => this.updateIndex(index)}
					initialLayout={this.initialLayout()}
					renderTabBar={() => null}
					style={{ flex: 7 }}
				/>
				<StyledSliderDotView>
					<StyledDot active={this.state.index === 0} ></StyledDot>
					<StyledDot active={this.state.index === 1} ></StyledDot>
					<StyledDot active={this.state.index === 2} ></StyledDot>
				</StyledSliderDotView>
				<CustomButton text="START THE QUIZ" onPress={() => this.goGame()} />
			</Container>
		);
	}
}
