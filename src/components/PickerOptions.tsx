import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Image } from 'react-native';
import { ContainerProps } from 'src/interfaces/Container';
import {Picker} from '@react-native-picker/picker';
import styled from 'styled-components/native';

export default class PickerOptions extends Component<ContainerProps, never> {

	constructor(props: ContainerProps) {
		super(props);
	}

	/**
	* Display the home or the loading screen
	* return {JSX.Element} Display the home
	**/
	render(): JSX.Element {
		return (
			<View>
				<Picker
					selectedValue={this.state.total}
					style={{height: 50, width: 100}}
					onValueChange={value => {
						this.setState({total: value})
					}}>
					<Picker.Item label="3 Questions" value={3} />
					<Picker.Item label="5 Questions" value={5} />
				</Picker>
			</View>
		);
	}
}
