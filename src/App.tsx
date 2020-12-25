import { registerRootComponent } from 'expo';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'src/pages/Home';
import Question from 'src/pages/Question';
import Result from 'src/pages/Result';
import Loading from 'src/pages/Loading';
import Menu from 'src/pages/Menu';
import { slideX, slideY, slideLeft } from 'src/utils/transition';
const Stack = createStackNavigator();

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
	}
}

registerRootComponent(App);
