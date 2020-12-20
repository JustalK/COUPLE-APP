import React, { Component } from 'react';
import { Pressable, Text, View } from 'react-native';
import Container from 'src/components/Container';
import ContainerNotice from 'src/components/ContainerNotice';
import TextPyramide from 'src/components/TextPyramide';
import { StyledMiddleView, StyledMiniLogo } from 'src/styles/Main';
import {ResultPageProps} from 'src/interfaces/Result';
import { LOGO } from 'src/utils/Images';
import { WHITE, OBLACK, BLACK, RED } from 'src/styles/Colors';
import styled from 'styled-components/native';

const SectionTitle = styled.Text`
	backgroundColor: ${WHITE};
	font-size: 30px;
`

const StyledView = styled.View`
	backgroundColor: ${OBLACK};
	padding: 40px;
	margin: 0 10%;
	margin-bottom: 50px;
`

/**
* Display the menu screen
**/
export default class Menu extends Component {

	/**
	* Display the Menu screen
	* return {JSX.Element} Display the menu screen
	**/
	render(): JSX.Element {
		return (
			<Container bg={OBLACK}>
				<StyledMiniLogo source={LOGO} />
				<StyledMiddleView>
					<TextPyramide text="Game options" height={30} size={16} backgroundColor={WHITE} color={BLACK} icon="warning" />
					<StyledView>
						<Text>sadas dasdass dsd sd sd sds ds sds dsd sds d sdas d</Text>
					</StyledView>
					<TextPyramide text="Add questions" height={30} size={16} backgroundColor={WHITE} color={BLACK} icon="warning" />
				</StyledMiddleView>
			</Container>
		);
	}
}
