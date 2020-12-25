'use strict';

import fetch from 'jest-fetch-mock';

const navigation = { navigate: jest.fn() };

describe('<Loading />', () => {
	it('click for starting the game with right option', (done) => {
		fetch.mockResponseOnce(
			JSON.stringify({
				data: {
					get_random_questions: [
						{
							question: 'Is this question 1 ?',
						},
					],
				},
			}),
		);
		/**
		expect(navigation.navigate).toBeCalledWith('Question', {
			total: 3,
			questions: [{ question: 'Is this question 1 ?' }],
		});
		**/
		done();
	});
});
