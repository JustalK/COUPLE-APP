import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { TouchableWithoutFeedback, Text, View, Image } from 'react-native';
import ButtonImage from 'src/components/ButtonImage'
import Container from 'src/components/Container';
import ContainerNotice from 'src/components/ContainerNotice';
import {HomePageProps, HomePageStates} from 'src/interfaces/Home';
import { IMAGE_BUTTON } from 'src/utils/Images';
import { StyledMiddleView } from 'src/styles/Main';
import { OBLACK, BLACK, RED, WHITE } from 'src/styles/Colors';
import ApiQuestion from 'src/services/ApiQuestion';
import styled from 'styled-components/native';
import { LOGO } from 'src/utils/Images';
import { Icon } from 'react-native-elements';
import TextPyramide from 'src/components/TextPyramide';

/**
* Defining the style of the big logo
**/
const StyledImage = styled.Image`
	height: 250px;
	width: 250px;
`

/**
* Define the pressable area
**/
const StyledPressable = styled.TouchableWithoutFeedback`
	position: absolute;
	bottom: 0;
`

/**
* Define the pressable area
**/
const StyledPressableMenu = styled.TouchableWithoutFeedback`
	position: absolute;
	top: 30px;
	left: 30px;
`

/**
* Display the home component
* @params {HomePageProps} props The navigation object for redirecting the user to Loading page
**/
export default class Home extends Component<HomePageProps, HomePageStates> {

	/**
	* Constructor of the home
	* @params {HomePageProps} props The navigation object for redirecting the user to Loading page
	**/
	constructor(props: HomePageProps) {
		super(props);
		this.state = {
			total: 3,
			started: false,
			startedMenu: false
		}
	}

	updateTotal(total: number) {
		this.setState({total: total})
	}

	/**
	* Redirect to the game screen
	**/
	async goGame() {
		this.props.navigation.navigate('Loading', {total: this.state.total});
		this.setState({started: false});
	}

	componentDidUpdate(prevProps: HomePageProps){
		if (prevProps.route.params != undefined && this.state.total !== prevProps.route.params.total) {
			this.setState({total: prevProps.route.params.total});
		}
	}

	/**
	* Redirect to the menu screen
	**/
	goMenu() {
		this.props.navigation.navigate('Menu');
		this.setState({startedMenu: false});
	}

	/**
	* Start the animation for starting the game
	**/
	gameStarted() {
		this.setState({started: true});
	}

	/**
	* Start the animation for going to the menu
	**/
	startedMenu() {
		this.setState({startedMenu: true});
	}

	/**
	* Display the home screen
	* return {JSX.Element} Display the home
	**/
	render(): JSX.Element {
		return (
			<Container>
				<StyledPressableMenu onPressIn={() => this.startedMenu()} onPress={() => this.goMenu()}>
					<Icon name="bars" type='font-awesome' size={30} color={this.state.startedMenu ? BLACK : WHITE} />
				</StyledPressableMenu>
				<StyledMiddleView>
					<StyledImage source={LOGO} />
				</StyledMiddleView>
				<StyledPressable onPressIn={() => this.gameStarted()} onPress={() => this.goGame()}>
					<TextPyramide text="START" height={50} size={24} backgroundColor={this.state.started ? BLACK : WHITE} color={this.state.started ? WHITE : BLACK} icon="play" />
				</StyledPressable>
				<StatusBar hidden />
			</Container>
		);
	}
}
