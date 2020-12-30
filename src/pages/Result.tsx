import React, { Component } from 'react';
import { View } from 'react-native';
import Container from 'src/components/Container';
import CustomButton from 'src/components/CustomButton';
import CustomTopButton from 'src/components/CustomTopButton';
import Slide from 'src/components/Slide';
import { goMenu, goHome } from 'src/utils/Navigation';
import TextPyramide from 'src/components/TextPyramide';
import { StyledMiddleView, StyledMiniLogo } from 'src/styles/Main';
import { ResultPageProps } from 'src/interfaces/Result';
import styled from 'styled-components/native';
import { LOGO } from 'src/utils/Images';
import { WHITE, BLACK, RED } from 'src/styles/Colors';

const StyledView = styled(View)`
	flex: 8;
	align-items: center;
	justify-content: flex-end;
`

/**
 * Display the result screen
 * @params {ResultPageProps} props the navigation object for going back to home
 **/
export default class Result extends Component<ResultPageProps, never> {

	/**
	 * Display the Result screen
	 * return {JSX.Element} Display the result screen
	 **/
	render(): JSX.Element {
		return (
			<Container>
				<CustomTopButton leftIcon="bars" onPressLeft={() => goMenu(this.props.navigation)} rightIcon="comment" onPressRight={() => goMenu(this.props.navigation)} />
				<StyledView>
					<Slide
						title="Congratulation"
						description="Thanks for playing. You can play again with differents setting. The questions will be completly different." />
				</StyledView>
				<CustomButton text="Back to home" onPress={() => goHome(this.props.navigation)} />
			</Container>
		);
	}
}
