import { registerRootComponent } from 'expo';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'src/pages/Home';
import Question from 'src/pages/Question';
import Result from 'src/pages/Result';
import Loading from 'src/pages/Loading';
import Menu from 'src/pages/Menu';
import { slideX, slideY, slideLeft } from 'src/utils/transition';
import * as Font from 'expo-font';
const Stack = createStackNavigator();

/**
* The custom font to load
**/
const customFonts = {
	RobotoRegular: require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
	RobotoBlack: require('../assets/fonts/Roboto/Roboto-Black.ttf')
};

/**
 * Entry point of the app, display the home by default
 **/
export default class App extends Component {

	/**
	* The constructor and initializer of the state
	**/
	constructor(props: unknown) {
		super(props);
		this.state = {
			fontsLoaded: false,
		};
	}

	/**
	* When the component is mounted, this method is called once
	* Load the font and notify the state when loaded
	**/
	async componentDidMount(): Promise<void> {
		await Font.loadAsync(customFonts);
		this.setState({ fontsLoaded: true });
	}

	render(): JSX.Element {
		if (this.state.fontsLoaded) {
			return (
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
							name="Home"
							component={Home}
							options={{ headerShown: false, cardStyleInterpolator: slideX }}
						/>
						<Stack.Screen
							name="Question"
							component={Question}
							options={{ headerShown: false, cardStyleInterpolator: slideX }}
						/>
						<Stack.Screen
							name="Loading"
							component={Loading}
							options={{ headerShown: false, cardStyleInterpolator: slideY }}
						/>
						<Stack.Screen
							name="Result"
							component={Result}
							options={{ headerShown: false, cardStyleInterpolator: slideX }}
						/>
						<Stack.Screen
							name="Menu"
							component={Menu}
							options={{ headerShown: false, cardStyleInterpolator: slideLeft }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			);
		} else {
			return <Text>Loading</Text>;
		}
	}
}

registerRootComponent(App);
