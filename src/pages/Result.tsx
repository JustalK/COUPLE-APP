import React, { Component } from 'react';
import { View } from 'react-native';
import Container from 'src/components/Container';
import CustomButton from 'src/components/CustomButton';
import CustomTopButton from 'src/components/CustomTopButton';
import Slide from 'src/components/Slide';
import { goMenu, goHome } from 'src/utils/Navigation';
import { ResultPageProps } from 'src/interfaces/Result';
import styled from 'styled-components/native';
import { SLIDE_3 } from 'src/utils/Images';

const StyledView = styled(View)`
	flex: 8;
	align-items: center;
	justify-content: flex-end;
`;

const StyledEmptyView = styled(View)`
	flex: 1;
`;

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
				<CustomTopButton
					leftIcon="bars"
					onPressLeft={() => goMenu(this.props.navigation)}
					rightIcon="comment"
					onPressRight={() => goMenu(this.props.navigation)}
				/>
				<StyledView>
					<Slide
						title="Congratulation"
						notice="You answered all the questions !"
						image={SLIDE_3}
						description="Thanks for playing. You can play again with differents setting. The questions will be completly different."
					/>
				</StyledView>
				<StyledEmptyView />
				<CustomButton text="Back to home" onPress={() => goHome(this.props.navigation)} />
			</Container>
		);
	}
}
