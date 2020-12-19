import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import ButtonImage from 'src/components/ButtonImage'
import Container from 'src/components/Container';
import ContainerNotice from 'src/components/ContainerNotice';
import {HomePageProps} from 'src/interfaces/Home';
import { IMAGE_BUTTON } from 'src/utils/Images';
import { StyledTriangle, StyledMiddleView } from 'src/styles/Main';
import { OBLACK, BLACK, RED, WHITE } from 'src/styles/Colors';
import ApiQuestion from 'src/services/ApiQuestion';
import styled from 'styled-components/native';
import { LOGO } from 'src/utils/Images';

/**
* Define the style of the outside square
* This square does not have visual but define the area for the button
**/
const StyledBigSquare = styled.View`
	position: absolute;
	width: 440px;
	height: 440px;
	transform: rotateZ(-45deg);
`

/**
* Extend the style of the outside square for the outside square top
**/
const StyledBigSquareTop = styled(StyledBigSquare)`
	top: -240px;
	left: -300px;
	backgroundColor: ${RED};
`

/**
* Extend the style of the outside square for the outside square bottom
**/
const StyledBigSquareBottom = styled(StyledBigSquare)`
	bottom: -240px;
	right: -300px;
`

/**
* Define the inside square of the bottom
* I had to do that for bypassing a bug in react native
* Actually when I write this word, react native does not allow a touch event outside of his parent.
* FOr bypassing that, I create two square, one for the visual, the other for defining the area and put the event inside
**/
const StyledSquareBottom = styled.View`
	position: absolute;
	width: 400px;
	height: 400px;
	bottom: 0;
	left: 0;
	backgroundColor: ${BLACK};
`

/**
* Define the style for the text inside the square
**/
const StyledSquareText = styled.Text`
	position: absolute;
	font-size: 30px;
	text-transform: uppercase;
	width: 250px;
	height: 40px;
	line-height: 40px;
`

/**
* Define the style for the text HOME (Extended from parent)
**/
const StyledSquareTopText = styled(StyledSquareText)`
	backgroundColor: ${RED};
	bottom: -40px;
	right: -50px;
	padding-left: 40px;
`

/**
* Define the style for the button down START (Extended from parent)
**/
const StyledSquareBottomText = styled(StyledSquareText)`
	backgroundColor: ${BLACK};
	color: ${WHITE};
	top: 0;
	left: -50px;
	text-align: right;
	padding-right: 40px;
`

/**
* Create the little triangle on the side of the text of the square
**/
const StyledSquareTriangle = styled.View`
	position: absolute;
	width: 0;
	height: 0;
	borderStyle: solid;
	borderBottomColor: transparent;
	borderTopColor: transparent;
	borderRightColor: ${RED};
`

/**
* Extends the style from the parent for defining precisely the style of the triangle beside HOME
**/
const StyledSquareTopTriangle = styled(StyledSquareTriangle)`
	bottom: -40px;
	right: 200px;
	borderBottomWidth: 40px;
	borderTopWidth: 0px;
	borderRightWidth: 40px;
	borderRightColor: ${RED};
`

/**
* Extends the style from the parent for defining precisely the style of the triangle beside START
**/
const StyledSquareBottomTriangle = styled(StyledSquareTriangle)`
	top: 0;
	left: 200px;
	borderBottomWidth: 0px;
	borderTopWidth: 40px;
	borderLeftWidth: 40px;
	borderLeftColor: ${BLACK};
`

/**
* Define the style for the Pressable
**/
const StyledPressable = styled.Pressable`
	width: 250px;
	height: 40px;
	z-index: 40;
`

const StyledImage = styled.Image`
	height: 200px;
	width: 200px;
	position: absolute;
	transform: translateX(-60px);
	left: 50%;
	top: -150px;
	margin: auto;
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
				<StyledBigSquareTop>
					<StyledSquareTopText>home</StyledSquareTopText>
					<StyledSquareTopTriangle />
				</StyledBigSquareTop>
				<StyledMiddleView marginTop={120}>
					<ContainerNotice text="This game will ask you random questions that you have to answer both of you following the order randomly given.">
						<StyledImage source={LOGO} />
					</ContainerNotice>
				</StyledMiddleView>
				<StyledBigSquareBottom>
					<StyledSquareBottom />
					<StyledPressable onPress={() => this.goGame()}>
						<View>
							<StyledSquareBottomText>start</StyledSquareBottomText>
							<StyledSquareBottomTriangle />
						</View>
					</StyledPressable>
				</StyledBigSquareBottom>
				<StatusBar hidden />
			</Container>
		);
	}
}
