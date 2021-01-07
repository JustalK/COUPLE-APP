import { registerRootComponent } from 'expo';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'src/pages/Home';
import Question from 'src/pages/Question';
import Result from 'src/pages/Result';
import Rules from 'src/pages/Rules';
import Improve from 'src/pages/Improve';
import Menu from 'src/pages/Menu';
import ApiQuestion from 'src/services/ApiQuestion';
import ApiTopic from 'src/services/ApiTopic';
import Container from 'src/components/Container';
import Loading from 'src/components/Loading';
import { slideX, slideY, slideLeft } from 'src/utils/transition';
import * as Font from 'expo-font';
const Stack = createStackNavigator();
import { AppStates } from 'src/interfaces/App';
import { library } from '@fortawesome/fontawesome-svg-core';
// Save all the icon from font-awesome for dynamic import
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const iconList = Object.keys(Icons)
	.filter((key: string) => key !== 'fas' && key !== 'prefix')
	.map((icon) => Icons[icon]);

library.add(...iconList);

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
export default class App extends Component<never, AppStates> {
	/**
	* The constructor and initializer of the state
	**/
	constructor(props: never) {
		super(props);
		this.state = {
			loaded: false,
		};
	}

	/**
	* When the component is mounted, this method is called once
	* Load the font and notify the state when loaded
	**/
	async componentDidMount(): Promise<void> {
		await Font.loadAsync(customFonts);
		const result_max = await ApiQuestion.countTotalQuestions();
		const result_topics = await ApiTopic.getAllTopics();
		global.max = result_max.count_total_questions;
		global.topics = result_topics.get_all_topics;
		this.setState({ loaded: true });
	}

	render(): JSX.Element {
		if (this.state.loaded) {
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
							name="Rules"
							component={Rules}
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
						<Stack.Screen
							name="Improve"
							component={Improve}
							options={{ headerShown: false, cardStyleInterpolator: slideX }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			);
		} else {
			return (
				<Container>
					<Loading />
				</Container>
			);
		}
	}
}

registerRootComponent(App);
