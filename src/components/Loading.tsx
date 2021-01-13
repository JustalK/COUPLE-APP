import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { VERY_CLEAR_PINK } from 'src/styles/Colors';

const StyledView = styled(View)`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const StyledText = styled(Text)`
	color: ${VERY_CLEAR_PINK};
	margin-top: 20px;
	font-size: 20px;
`;
/**
 * Show the background and define the container
 * @params {props} Define the children to be pass to the container
 **/
export default class Loading extends Component {
	/**
	 * Display the container
	 * return {JSX.Element} Display the container
	 **/
	render(): JSX.Element {
		return (
			<StyledView>
				<ActivityIndicator size={100} color={VERY_CLEAR_PINK} />
				<StyledText>LOADING</StyledText>
			</StyledView>
		);
	}
}
