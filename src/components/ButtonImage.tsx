import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { TouchableWithoutFeedback, StyleSheet, View, Image } from 'react-native';
import { ButtonImageProps } from 'src/interfaces/ButtonImage';

export default class ButtonImage extends Component<ButtonImageProps, never> {

	constructor(props: ButtonImageProps) {
		super(props);
	}

	/**
	* Display the home or the loading screen
	* return {JSX.Element} Display the home
	**/
	render(): JSX.Element {
		return (
			<TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Dice')}>
				<View>
					<Image source={{ uri: 'http://justalk.online:80/./assets/imgs/atlantic-grains/slide_01.jpg'}} style={styles.image} />
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

/**
* Create the custom style for the ButtonImage
**/
const styles = StyleSheet.create({
	image: {
		height: 200,
		borderBottomRightRadius: 20,
		borderBottomLeftRadius: 20
	}
});
