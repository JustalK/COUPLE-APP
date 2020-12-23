import React, { Component } from 'react';
import { TextInput, StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';
import ApiQuestion from 'src/services/ApiQuestion';
import Container from 'src/components/Container';
import ContainerNotice from 'src/components/ContainerNotice';
import TextPyramide from 'src/components/TextPyramide';
import { StyledMiddleView, StyledMiniLogo } from 'src/styles/Main';
import {MenuPageProps, MenuPageStates} from 'src/interfaces/Menu';
import { LOGO } from 'src/utils/Images';
import { WHITE, OBLACK, BLACK, RED } from 'src/styles/Colors';
import {Picker} from '@react-native-picker/picker';
import { Icon } from 'react-native-elements';
import { CommonActions } from '@react-navigation/native';
import styled from 'styled-components/native';

const SectionTitle = styled.Text`
	backgroundColor: ${WHITE};
	font-size: 30px;
`

const StyledView = styled.View`
	backgroundColor: ${OBLACK};
	margin: 0 10%;
	margin-bottom: 50px;
`

const StyledRow = styled.View`
	flex-direction: row;
	border: 1px solid ${WHITE};
`

const StyledLegend = styled.Text`
	line-height: 50px;
	font-size: 18px;
	padding: 0 20px;
	color: ${WHITE};
`

const StyledPicker = styled.Picker`
	height: 50px;
	width: 100px;
	border: 1px solid ${WHITE};
	color: ${WHITE};
`

const StyledTextInput = styled.TextInput`
	width: 300px;
	padding: 0 20px;
	color: ${WHITE};
`

const StyledRedCell = styled.View`
	borderLeftWidth: 1px;
	borderLeftColor: ${WHITE};
	backgroundColor: ${RED};
	paddingLeft: 10px;
	justifyContent: center;
`

const StyledResponse = styled.Text`
	color: ${RED};
`

/**
* Define the pressable area
**/
const StyledPressableMenu = styled.TouchableWithoutFeedback`
	position: absolute;
	top: 30px;
	right: 30px;
`

/**
* Display the menu screen
**/
export default class Menu extends Component<MenuPageProps, MenuPageStates> {

	constructor(props: MenuPageProps) {
		super(props);
		this.state = {
			total: 3,
			text: '',
			questionAdded: false,
			max: 0
		}
	}

	/**
	* Call only once when the component is loaded
	* Call the api and activate the redirection when finished
	**/
	async componentDidMount() {
		const result = await ApiQuestion.countTotalQuestions();
		const max = result.count_total_questions;
		this.setState({max});
	}

	/**
	* Redirect to the home screen with the right parameter
	**/
	goBackHome() {
		this.props.navigation.dispatch(
		  CommonActions.navigate({
		    name: 'Home',
		    params: {
		      total: this.state.total
		    },
		  })
		);
	}

	/**
	* Add a question to the game
	**/
	async addNewQuestion() {
		if (this.isNewQuestionWorthIt()) {
			const newQuestion = this.sanitizeNewQuestion();
			await ApiQuestion.addNewQuestion(newQuestion);
			this.setState({questionAdded: false, text: '', max: this.state.max + 1});
		}
	}

	questionAdded() {
		if (this.isNewQuestionWorthIt()) {
			this.setState({questionAdded: true});
		}
	}

	sanitizeNewQuestion() {
		if (this.state.text === undefined || this.state.text === null) {
			return '';
		}

		let newQuestion = this.state.text.trim();
		newQuestion = newQuestion.replace(/'/g, "\\'");

		return newQuestion;
	}

	isNewQuestionWorthIt() {
		return this.sanitizeNewQuestion() !== '';
	}

	/**
	* Display the Menu screen
	* return {JSX.Element} Display the menu screen
	**/
	render(): JSX.Element {
		return (
			<Container bg={OBLACK}>
				<StyledPressableMenu onPress={() => this.goBackHome()}>
					<Icon name="long-arrow-right" type='font-awesome' size={30} color={WHITE} />
				</StyledPressableMenu>
				<StyledMiniLogo source={LOGO} />
				<StyledMiddleView marginTop={100}>
					<TextPyramide text="Game options" height={30} size={16} backgroundColor={WHITE} color={BLACK} icon="gamepad" />
					<StyledView>
						<StyledRow>
							<StyledLegend>Number of questions :</StyledLegend>
							<StyledRedCell>
								<StyledPicker
									selectedValue={this.state.total}
									onValueChange={value => {
										this.setState({total: value});
									}}>
									<Picker.Item color={RED} label="3" value={3} />
									<Picker.Item color={RED} label="5" value={5} />
									<Picker.Item color={RED} label="10" value={10} />
									<Picker.Item color={RED} label="25" value={25} />
									<Picker.Item color={RED} label="ALL" value={this.state.max} />
								</StyledPicker>
							</StyledRedCell>
						</StyledRow>
					</StyledView>
					<TextPyramide text="Add questions" height={30} size={16} backgroundColor={WHITE} color={BLACK} icon="cog" />
					<StyledView>
						<StyledRow>
							<StyledTextInput
								multiline={true}
								numberOfLines={4}
								onChangeText={(text) => this.setState({text})}
								value={this.state.text} />
								<StyledRedCell>
									<TouchableWithoutFeedback onPressIn={() => this.questionAdded()} onPress={() => this.addNewQuestion()}>
										<Icon name='check' type='font-awesome' size={24} color={this.state.questionAdded ? BLACK : WHITE} style={{paddingLeft: 10, paddingRight: 20}} />
									</TouchableWithoutFeedback>
								</StyledRedCell>
						</StyledRow>
						<StyledRow style={{backgroundColor: WHITE, height: 50, borderTopWidth: 0, alignItems: 'center', justifyContent: 'center'}}>
							<Text>The game contains {this.state.max} questions.</Text>
						</StyledRow>
					</StyledView>
					<StyledView>
					</StyledView>
				</StyledMiddleView>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	itemStyle: {
		backgroundColor: WHITE,
		color: RED
	}
})
