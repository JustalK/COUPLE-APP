import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Container from 'src/components/Container';
import CustomButton from 'src/components/CustomButton';
import CustomTopButton from 'src/components/CustomTopButton';
import ContainerNotice from 'src/components/ContainerNotice';
import Slide from 'src/components/Slide';
import TextPyramide from 'src/components/TextPyramide';
import { StyledMiddleView, StyledMiniLogo } from 'src/styles/Main';
import { LOGO } from 'src/utils/Images';
import styled from 'styled-components/native';
import { QuestionPageProps, QuestionPageStates } from 'src/interfaces/Question';
import { BLACK, RED, WHITE } from 'src/styles/Colors';

/**
 * Display the question component
 * @params {HomeProps} props The navigation informations
 **/
export default class Improve extends Component {

	/**
	 * Display the Question screen
	 * return {JSX.Element} Display the question screen
	 **/
	render(): JSX.Element {
		return (
			<Container>
				<CustomTopButton leftIcon="long-arrow-left" onPressLeft={() => this.props.navigation.goBack()} />

			</Container>
		);
	}
}
