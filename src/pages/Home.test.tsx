'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';
import { Pressable } from 'react-native';

const navigation = { navigate: jest.fn() };

describe('<Home />', () => {
	it('click for starting the game with right option', () => {
		const tree = renderer.create(<Home route={{params: {total: 5}}} navigation={navigation} />);
		const pressable = tree.root.findByType(Pressable);
		pressable.props.onPress();
		expect(navigation.navigate).toBeCalledWith('Loading', {"total": 3});
		expect(navigation.navigate).not.toBeCalledWith('Loading', {"total": 5});
	});
});
