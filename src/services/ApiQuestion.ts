import Api from 'src/services/libs/Api';

export default class ApiQuestion {

	static async getAllQuestions() {
		return Api.getter({ query: `
			query {
				get_all_questions {
					question
				}
			}`
		});
	}

	static async getRandomQuestions(limit) {
		return Api.getter({ query: `
			query {
				get_random_questions(limit: ${limit}) {
					question
				}
			}`
		});
	}
}
