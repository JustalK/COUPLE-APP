import React, { Component } from 'react';
import { TextInput, StyleSheet, Pressable, Text, View } from 'react-native';
import Container from 'src/components/Container';
import ContainerNotice from 'src/components/ContainerNotice';
import TextPyramide from 'src/components/TextPyramide';
import { StyledMiddleView, StyledMiniLogo } from 'src/styles/Main';
import {ResultPageProps} from 'src/interfaces/Result';
import { LOGO } from 'src/utils/Images';
import { WHITE, OBLACK, BLACK, RED } from 'src/styles/Colors';
import {Picker} from '@react-native-picker/picker';
import { Icon } from 'react-native-elements';
import styled from 'styled-components/native';

const SectionTitle = styled.Text`
	backgroundColor: ${WHITE};
	font-size: 30px;
`

const StyledView = styled.View`
	backgroundColor: ${OBLACK};
	margin: 0 10%;
	margin-bottom: 50px;
	border: 1px solid ${WHITE};
`

const StyledRow = styled.View`
	flex-direction: row;
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

/**
* Display the menu screen
**/
export default class Menu extends Component {

	constructor(props) {
		super(props);
		this.state = {
			total: 3
		}
	}

	/**
	* Display the Menu screen
	* return {JSX.Element} Display the menu screen
	**/
	render(): JSX.Element {
		return (
			<Container bg={OBLACK}>
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
										this.setState({total: value})
									}}>
									<Picker.Item color={RED} label="3" value={3} />
									<Picker.Item color={RED} label="5" value={5} />
									<Picker.Item color={RED} label="10" value={10} />
									<Picker.Item color={RED} label="ALL" value="ALL" />
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
								<Icon name='check' type='font-awesome' size={24} color={WHITE} style={{paddingLeft: 10, paddingRight: 20}} />
							</StyledRedCell>
						</StyledRow>
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
