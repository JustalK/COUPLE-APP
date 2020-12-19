'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';
import { Pressable } from 'react-native';

const navigation = { navigate: jest.fn() };

describe('<Home />', () => {
	it('is a View', () => {
		const tree = renderer.create(<Home />).toJSON();
		expect(tree.type).toBe('View');
		expect(tree.children.length).toBe(2);
		expect(tree.children[1].children.length).toBe(3);
	});

	it('has two differents type of children', () => {
		const tree = renderer.create(<Home />).toJSON();
		expect(tree.children.length).toBe(2);
	});

	it('has 3 differents types of children', () => {
		const tree = renderer.create(<Home />).toJSON();
		expect(tree.children[1].children.length).toBe(3);
	});

	it('click for starting the game with right option', () => {
		const tree = renderer.create(<Home navigation={navigation} />);
		const pressable = tree.root.findByType(Pressable);
		pressable.props.onPress();
		expect(navigation.navigate).toBeCalledWith('Loading', {"total": 3});
		expect(navigation.navigate).not.toBeCalledWith('Loading', {"total": 5});
	});
});
