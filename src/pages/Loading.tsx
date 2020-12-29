import React, { Component } from 'react';
import Container from 'src/components/Container';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import ApiQuestion from 'src/services/ApiQuestion';
import CustomTopButton from 'src/components/CustomTopButton';
import { LoadingPageProps, LoadingPageStates } from 'src/interfaces/Loading';
import { TabView, TabBar } from 'react-native-tab-view';
import ContainerNotice from 'src/components/ContainerNotice';
import CustomButton from 'src/components/CustomButton';
import TextPyramide from 'src/components/TextPyramide';
import { StyledMiddleView, StyledMiniLogo } from 'src/styles/Main';
import { LOGO } from 'src/utils/Images';
import { WHITE, PINK, RED } from 'src/styles/Colors';
import styled from 'styled-components/native';


 const StyledSliderView = styled(View)`
	flex: 1
 `

const StyledSlideView = styled(View)`
	flex: 1;
	align-items: center;
	justify-content: space-around;
`

 const StyledCircleView = styled(View)`
	height: 250px;
	width: 250px;
	border-radius: 125px;
	border: 5px solid ${PINK};
	background-color: ${WHITE};
 `

const StyledTitle = styled(Text)`
	font-family: RobotoBlack;
	font-size: 18px;
	color: ${WHITE};
	text-transform: uppercase;
`

const StyledDescription = styled(Text)`
	font-family: RobotoRegular;
	font-size: 16px;
	margin: 50px 30px 10px;
	text-align: center;
	color: ${WHITE};
`

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
			index: 0,
			routes: [
				{ key: 'first', title: 'First' },
				{ key: 'second', title: 'Second' }
			],
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
	* Set the index of the tabs
	* @params {number} index The new index of the tabs
	**/
	updateIndex(index: number): void {
		this.setState({ index });
	}

	slide(): JSX.Element {
		return (
			<StyledSlideView>
				<StyledTitle>Rules 1</StyledTitle>
				<StyledCircleView>
				</StyledCircleView>
				<StyledDescription>Random question will be choosen from more than thousands questions.</StyledDescription>
			</StyledSlideView>
		)
	}

	renderScene(route: RouteProps, jumpTo: (key: string) => void): JSX.Element | undefined {
		switch (route.key) {
			case 'first':
				return this.slide();
			case 'second':
				return (<View style={[styles.scene, { backgroundColor: '#673ab7' }]} />);
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
				<CustomTopButton leftIcon="long-arrow-left" onPressLeft={() => this.goMenu()} />
				<TabView
				  navigationState={this.state}
				  renderScene={(rs) => this.renderScene(rs.route, rs.jumpTo)}
				  onIndexChange={(index) => this.updateIndex(index)}
				  initialLayout={this.initialLayout()}
				  renderTabBar={() => null}
					style={{flex: 7}}
				/>
				<StyledSliderView>
				</StyledSliderView>
				<CustomButton text="START" onPress={() => this.goGame()} />
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	scene: {
		flex: 1
	}
});
