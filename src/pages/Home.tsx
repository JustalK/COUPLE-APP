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

const StyledImage = styled.Image`
	height: 250px;
	width: 250px;
`

const StyledPressable = styled.Pressable`
	position: absolute;
	bottom: 0;
`

export default class Home extends Component<HomePageProps, never> {

	constructor(props: HomePageProps) {
		super(props);
		this.state = {
			total: 3
		}
	}

	/**
	* Redirect to the game screen
	**/
	async goGame() {
		this.props.navigation.navigate('Loading', {total: this.state.total});
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
				<StyledPressable onPress={() => this.goGame()}>
					<TextPyramide text="START" height={50} size={24} backgroundColor={WHITE} color={BLACK} icon="play" />
				</StyledPressable>
				<StatusBar hidden />
			</Container>
		);
	}
}
