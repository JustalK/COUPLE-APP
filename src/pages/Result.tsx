import React, { Component } from 'react';
import { Pressable } from 'react-native';
import Container from 'src/components/Container';
import ContainerNotice from 'src/components/ContainerNotice';
import TextPyramide from 'src/components/TextPyramide';
import { StyledMiddleView, StyledMiniLogo } from 'src/styles/Main';
import {ResultPageProps} from 'src/interfaces/Result';
import { LOGO } from 'src/utils/Images';
import { WHITE, BLACK, RED } from 'src/styles/Colors';
/**
* Display the result screen
* @params {ResultPageProps} props the navigation object for going back to home
**/
export default class Result extends Component<ResultPageProps, never> {

	/**
	* Send the user to the home screen
	**/
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
					<StyledMiniLogo source={LOGO} />
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
