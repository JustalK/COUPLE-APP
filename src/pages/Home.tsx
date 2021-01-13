import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import Container from 'src/components/Container';
import CustomButton from 'src/components/CustomButton';
import CustomTopButton from 'src/components/CustomTopButton';
import { goMenu, goImprove } from 'src/utils/Navigation';
import { HomePageProps, HomePageStates } from 'src/interfaces/Home';
import { StyledMiddleView } from 'src/styles/Main';
import { VERY_CLEAR_PINK, WHITE } from 'src/styles/Colors';
import styled from 'styled-components/native';
import { LOGO } from 'src/utils/Images';
import { Icon } from 'react-native-elements';
import TextPyramide from 'src/components/TextPyramide';

/**
 * Defining the style of the big logo
 **/
const StyledImage = styled(Image)`
	height: 250px;
	width: 250px;
	margin-bottom: 60px;
`;

const StyledWelcome = styled(Text)`
	font-family: RobotoBlack;
	font-size: 16px;
	text-transform: uppercase;
	color: ${WHITE};
`

const StyledTitle = styled(Text)`
	fontFamily: RobotoBlack;
	color: ${VERY_CLEAR_PINK};
`

const StyledDescription = styled(Text)`
	fontFamily: RobotoRegular;
	font-size: 16px;
	color: ${WHITE};
	margin: 40px 30px 60px;
`

const StyledView = styled(View)`
	flex: 8;
	align-items: center;
	justify-content: flex-end;
`

/**
 * Display the home component
 * @params {HomePageProps} props The navigation object for redirecting the user to Rules page
 **/
export default class Home extends Component<HomePageProps, HomePageStates> {
	/**
	 * Constructor of the home
	 * @params {HomePageProps} props The navigation object for redirecting the user to Rules page
	 **/
	constructor(props: HomePageProps) {
		super(props);
		this.state = {
			total: 3,
			selectedTopics: [],
		};
	}

	/**
	 * Call only once when the component is loaded
	 * Call the api and fill up the topics
	 **/
	async componentDidMount(): Promise<void> {
		const selectedTopics = global.topics.map((topic) => topic.id);
		this.setState({ selectedTopics });
	}

	updateTotal(total: number): void {
		this.setState({ total: total });
	}

	/**
	 * Redirect to the game screen
	 **/
	async goGame(): Promise<void> {
		this.props.navigation.navigate('Rules', {
			selectedTopics: this.state.selectedTopics,
			total: this.state.total,
		});
	}

	componentDidUpdate(prevProps: HomePageProps): void {
		if (prevProps.route.params != undefined && this.state.total !== prevProps.route.params.total) {
			this.setState({ total: prevProps.route.params.total });
		}
		if (prevProps.route.params != undefined && this.state.selectedTopics !== prevProps.route.params.selectedTopics) {
			this.setState({ selectedTopics: prevProps.route.params.selectedTopics });
		}
	}

	/**
	 * Display the home screen
	 * return {JSX.Element} Display the home
	 **/
	render(): JSX.Element {
		return (
			<Container>
				<CustomTopButton
					leftIcon="bars"
					onPressLeft={() => goMenu(this.props.navigation)}
					rightIcon="comment"
					onPressRight={() => goImprove(this.props.navigation)}
				/>
				<StyledView>
					<StyledImage source={LOGO} />
					<StyledWelcome>Welcome</StyledWelcome>
					<StyledDescription>
						<StyledTitle>Do you know me?</StyledTitle> is a quiz game for couple who want to know more each
						other.
					</StyledDescription>
				</StyledView>
				<CustomButton text="PLAY" onPress={() => this.goGame()} />
				<StatusBar />
			</Container>
		);
	}
}
