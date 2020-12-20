import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'src/pages/Home'
import Question from 'src/pages/Question'
import Result from 'src/pages/Result'
import Loading from 'src/pages/Loading'
import Menu from 'src/pages/Menu'
import { slideX, slideY, slideLeft } from 'src/utils/transition';
const Stack = createStackNavigator();
import { WHITE } from 'src/styles/Colors';

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
						options={{headerShown: false, cardStyleInterpolator: slideX}}
					/>
					<Stack.Screen
						name="Question"
						component={Question}
						options={{headerShown: false, cardStyleInterpolator: slideX}}
					/>
					<Stack.Screen
						name="Loading"
						component={Loading}
						options={{headerShown: false, cardStyleInterpolator: slideY}}
					/>
					<Stack.Screen
						name="Result"
						component={Result}
						options={{headerShown: false, cardStyleInterpolator: slideX}}
					/>
					<Stack.Screen
						name="Menu"
						component={Menu}
						options={{headerShown: false, cardStyleInterpolator: slideLeft}}
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
