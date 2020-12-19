import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackCardInterpolationProps } from '@react-navigation/stack';
import Home from 'src/pages/Home'
import Question from 'src/pages/Question'
import Result from 'src/pages/Result'
import Loading from 'src/pages/Loading'
const Stack = createStackNavigator();
const WHITE = '#fff';

/**
* Create the slide effect between the screen
**/
const forSlide = ({ current, next, inverted, layouts: { screen } }: StackCardInterpolationProps) => {
	const progress = Animated.add(
		current.progress.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1],
			extrapolate: 'clamp',
		}),
		next
			? next.progress.interpolate({
					inputRange: [0, 1],
					outputRange: [0, 1],
					extrapolate: 'clamp',
			  })
			: 0,
	);

	return {
		cardStyle: {
			transform: [
				{
					translateX: Animated.multiply(
						progress.interpolate({
							inputRange: [0, 1, 2],
							outputRange: [
								screen.width, // Focused, but offscreen in the beginning
								0, // Fully focused
								screen.width * -0.3, // Fully unfocused
							],
							extrapolate: 'clamp',
						}),
						inverted,
					),
				},
			],
		},
	};
};

/**
 * Entry point of the app, display the home by default
 **/
export default class App extends Component {
	render(): JSX.Element {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Home"
						component={Home}
						options={{headerShown: false, cardStyleInterpolator: forSlide}}
					/>
					<Stack.Screen
						name="Question"
						component={Question}
						options={{headerShown: false, cardStyleInterpolator: forSlide}}
					/>
					<Stack.Screen
						name="Loading"
						component={Loading}
						options={{headerShown: false, cardStyleInterpolator: forSlide}}
					/>
					<Stack.Screen
						name="Result"
						component={Result}
						options={{headerShown: false, cardStyleInterpolator: forSlide}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}

registerRootComponent(App);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: WHITE,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
