import React, { Component } from 'react';
import Container from 'src/components/Container';
import { Pressable } from 'react-native';
import ApiQuestion from 'src/services/ApiQuestion';
import { LoadingPageProps, LoadingPageStates } from 'src/interfaces/Loading';
import ContainerNotice from 'src/components/ContainerNotice';
import TextPyramide from 'src/components/TextPyramide';
import { StyledMiddleView, StyledMiniLogo } from 'src/styles/Main';
import { LOGO } from 'src/utils/Images';
import { WHITE, BLACK, RED } from 'src/styles/Colors';

/**
 * Display the loading component
 * @params {LoadingPageProps} props The navigation object for redirecting the suer to question and getting the total questions
 **/
export default class Loading extends Component<LoadingPageProps, LoadingPageStates> {
	/**
	 * The constructor of the loading screen
	 * @params {LoadingPageProps} props The navigation object for redirecting the suer to question and getting the total questions
	 **/
	constructor(props: LoadingPageProps) {
		super(props);
		this.state = {
			questions: [],
		};
	}

	/**
	 * Call only once when the component is loaded
	 * Call the api and activate the redirection when finished
	 **/
	async componentDidMount(): Promise<void> {
		const result = await ApiQuestion.getRandomQuestions(this.props.route.params.total);
		const questions = result.get_random_questions;
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
	 * Display the loading screen
	 * return {JSX.Element} Display the loading screen
	 **/
	render(): JSX.Element {
		return (
			<Container>
				<Pressable onPress={() => this.goGame()}>
					<StyledMiniLogo source={LOGO} />
					<StyledMiddleView marginTop={60}>
						<TextPyramide
							text="Rules"
							height={30}
							size={16}
							backgroundColor={BLACK}
							color={RED}
							icon="warning"
						/>
						<ContainerNotice text="You will see questions on the screen. Answer the questions following the turns order. The game ends when all the questions has been answered." />
						<TextPyramide
							text={this.instructions()}
							height={30}
							size={16}
							backgroundColor={WHITE}
							color={BLACK}
							isDown={true}
						/>
					</StyledMiddleView>
				</Pressable>
			</Container>
		);
	}
}
