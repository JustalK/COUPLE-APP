'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './Loading';

const navigation = { navigate: jest.fn() };

describe('<Loading />', () => {
	it('click for starting the game with right option', done => {
		fetch.mockResponseOnce(JSON.stringify({data:{
			get_all_questions:[
				{
					question: 'Is this question 1 ?'
				}
			]
		}}));

		const tree = renderer.create(<Loading navigation={navigation} />);
		setTimeout(() => {
			expect(navigation.navigate).toBeCalledWith('Question', {"questions": [{'question': 'Is this question 1 ?'}]});
			done()
		}, 3000);
	});
});
