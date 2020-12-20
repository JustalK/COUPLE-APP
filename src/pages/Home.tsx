import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import ButtonImage from 'src/components/ButtonImage'
import Container from 'src/components/Container';
import ContainerNotice from 'src/components/ContainerNotice';
import {HomePageProps} from 'src/interfaces/Home';
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
const StyledPressable = styled.Pressable`
	position: absolute;
	bottom: 0;
`

/**
* Display the home component
* @params {HomePageProps} props The navigation object for redirecting the user to Loading page
**/
export default class Home extends Component<HomePageProps, never> {

	/**
	* Constructor of the home
	* @params {HomePageProps} props The navigation object for redirecting the user to Loading page
	**/
	constructor(props: HomePageProps) {
		super(props);
		this.state = {
			total: 3,
			started: false
		}
	}

	/**
	* Redirect to the game screen
	**/
	async goGame() {
		this.props.navigation.navigate('Loading', {total: this.state.total});
		this.setState({started: false});
	}

	/**
	* Start the animation for starting the game
	**/
	gameStarted() {
		this.setState({started: true});
	}

	/**
	* Display the home screen
	* return {JSX.Element} Display the home
	**/
	render(): JSX.Element {
		return (
			<Container>
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
