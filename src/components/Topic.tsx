import React, { Component } from 'react';
import { TouchableWithoutFeedback, StyleSheet, ScrollView, Text, View } from 'react-native';
import ApiQuestion from 'src/services/ApiQuestion';
import Container from 'src/components/Container';
import CustomTopButton from 'src/components/CustomTopButton';
import { StyledMiddleView, StyledMiniLogo } from 'src/styles/Main';
import { MenuPageProps, MenuPageStates } from 'src/interfaces/Menu';
import { LOGO } from 'src/utils/Images';
import { WHITE, PINK, VERY_CLEAR_PINK, VERY_VERY_CLEAR_PINK } from 'src/styles/Colors';
import { Picker } from '@react-native-picker/picker';
import { CommonActions } from '@react-navigation/native';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const StyledRowView = styled(View)`
	width: 100%;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-bottom: 30px;
`

const StyledTopic = styled(View)`
	width: 25%;
	margin-bottom: 30px;
	align-items: center;
`

const IconTitle = styled(Text)<{selected: boolean}>`
	font-family: RobotoRegular;
	color: ${WHITE};
	font-size: 12px;
	margin: 5px;
	text-align: center;

	${(props) =>
		props.selected &&
		`
		color: ${VERY_CLEAR_PINK};
	`}
`

/**
 * Display the menu screen
 **/
export default class Topic extends Component {
	/**
	 * Display the Menu screen
	 * return {JSX.Element} Display the menu screen
	 **/
	render(): JSX.Element {
		return (
			<StyledRowView>
				{this.props.topics.map((topic, index) => {
					const selected = this.props.selectedTopics && this.props.selectedTopics.includes(topic.id);
					return (
						<TouchableWithoutFeedback key={index} onPress={() => this.props.topicSelected(selected, topic.id)}>
							<StyledTopic>
								<FontAwesomeIcon icon={topic.icon} size={32} color={selected ? VERY_CLEAR_PINK : WHITE} />
								<IconTitle selected={selected} >{topic.name}</IconTitle>
							</StyledTopic>
						</TouchableWithoutFeedback>
					)
				})}
			</StyledRowView>
		)
	}
}
