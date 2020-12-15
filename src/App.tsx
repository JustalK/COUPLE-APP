import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackCardInterpolationProps } from '@react-navigation/stack';
import Home from 'src/pages/Home'
const Stack = createStackNavigator();
const WHITE = '#fff';

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
						options={{headerShown: false}}
					/>
					<Stack.Screen
						name="Dice"
						component={Home}
						options={{headerShown: false}}
					/>
					<Stack.Screen
						name="Question"
						component={Home}
						options={{headerShown: false}}
					/>
					<Stack.Screen
						name="Result"
						component={Home}
						options={{headerShown: false}}
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
