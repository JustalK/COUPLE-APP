'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import Api from './Api';

const navigation = { navigate: jest.fn() };

beforeEach(() => {
	fetch.resetMocks();
});

describe('Api Test', () => {
	it('getter test', async () => {
		fetch.mockResponseOnce(JSON.stringify({data:{
			get_all_questions:[
				{
					question: 'Is this question 1 ?'
				},
				{
					question: 'Is this question 2 ?'
				}
			]
		}}));

		const result = await Api.getter({ query: `
			query {
				get_all_questions {
					question
				}
			}`
		});

		expect(result.get_all_questions.length).toBe(2);
		expect(result.get_all_questions[0].question).toBe('Is this question 1 ?');
		expect(result.get_all_questions[1].question).toBe('Is this question 2 ?');
	});
});
