import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import ButtonImage from 'src/components/ButtonImage'
import Container from 'src/components/Container';
import {HomePageProps} from 'src/interfaces/Home';
import { IMAGE_BUTTON } from 'src/utils/Images';
import { StyledTriangle } from 'src/styles/Main';
import { OBLACK, BLACK, RED, WHITE } from 'src/styles/Colors';
import ApiQuestion from 'src/services/ApiQuestion';
import styled from 'styled-components/native';
import { LOGO } from 'src/utils/Images';

const StyledBigSquare = styled.View`
	position: absolute;
	width: 440px;
	height: 440px;
	transform: rotateZ(-45deg);
`

const StyledBigSquareTop = styled(StyledBigSquare)`
	top: -240px;
	left: -300px;
	backgroundColor: ${RED};
`

const StyledBigSquareBottom = styled(StyledBigSquare)`
	bottom: -240px;
	right: -300px;
`

const StyledSquareBottom = styled.View`
	position: absolute;
	width: 400px;
	height: 400px;
	bottom: 0;
	left: 0;
	backgroundColor: ${BLACK};
`

const StyledSquareText = styled.Text`
	position: absolute;
	font-size: 30px;
	text-transform: uppercase;
	width: 250px;
	height: 40px;
	line-height: 40px;
`

const StyledSquareTopText = styled(StyledSquareText)`
	backgroundColor: ${RED};
	bottom: -40px;
	right: -50px;
	padding-left: 40px;
`

const StyledSquareBottomText = styled(StyledSquareText)`
	backgroundColor: ${BLACK};
	color: ${WHITE};
	top: 0;
	left: -50px;
	text-align: right;
	padding-right: 40px;
`

const StyledSquareTriangle = styled.View`
	position: absolute;
	width: 0;
	height: 0;
	borderStyle: solid;
	borderBottomColor: transparent;
	borderTopColor: transparent;
	borderRightColor: ${RED};
`

const StyledSquareTopTriangle = styled(StyledSquareTriangle)`
	bottom: -40px;
	right: 200px;
	borderBottomWidth: 40px;
	borderTopWidth: 0px;
	borderRightWidth: 40px;
	borderRightColor: ${RED};
`

const StyledSquareBottomTriangle = styled(StyledSquareTriangle)`
	top: 0;
	left: 200px;
	borderBottomWidth: 0px;
	borderTopWidth: 40px;
	borderLeftWidth: 40px;
	borderLeftColor: ${BLACK};
`

const StyledPressable = styled.Pressable`
	width: 250px;
	height: 40px;
	z-index: 40;
`

const StyledMiddleView = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	margin-top: 120px;
`

const ContainerNotice = styled.View`
	backgroundColor: ${OBLACK};
	padding: 40px;
	position: relative;
`

const StyledText = styled.Text`
	color: ${RED};
	font-size: 24px;
	text-align: justify;
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
				<StyledMiddleView>
					<ContainerNotice>
						<StyledImage source={LOGO} />
						<StyledText>This game will ask you random questions that you have to answer both of you following the order randomly given.</StyledText>
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
