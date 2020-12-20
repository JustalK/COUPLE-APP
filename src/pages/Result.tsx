import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Pressable, Text, View } from 'react-native';
import Container from 'src/components/Container';
import ContainerNotice from 'src/components/ContainerNotice';
import TextPyramide from 'src/components/TextPyramide';
import { StyledMiddleView } from 'src/styles/Main';
import styled from 'styled-components/native';
import { LOGO } from 'src/utils/Images';
import { WHITE, BLACK, RED } from 'src/styles/Colors';

const StyledView = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`

const StyledImage = styled.Image`
	position: absolute;
	align-self: center;
	top: 20px;
	height: 150px;
	width: 150px;
`

export default class Result extends Component {

	goHome() {
		this.props.navigation.navigate('Home');
	}

	/**
	* Display the Result screen
	* return {JSX.Element} Display the result screen
	**/
	render(): JSX.Element {
		return (
			<Container>
				<Pressable onPress={() => this.goHome()}>
					<StyledImage source={LOGO} />
					<StyledMiddleView marginTop={60}>
						<TextPyramide text="End of the game" height={30} size={16} backgroundColor={BLACK} color={RED} icon="star-o" />
						<ContainerNotice text="Thanks for playing. You can change the options for having differents questions." />
						<TextPyramide text="Press the screen to continue" height={30} size={16} backgroundColor={WHITE} color={BLACK} isDown={true} />
					</StyledMiddleView>
				</Pressable>
			</Container>
		);
	}
}
