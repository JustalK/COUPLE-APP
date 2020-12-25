import Api from 'src/services/libs/Api';
import {
	ApiGetAllQuestions,
	ApiGetRandomQuestions,
	ApiCountTotalQuestions,
	ApiAddNewQuestion,
} from 'src/interfaces/Api';
export default class ApiQuestion {
	static async getAllQuestions(): Promise<ApiGetAllQuestions> {
		return Api.getter({
			query: `
			query {
				get_all_questions {
					question
				}
			}`,
		});
	}

	static async getRandomQuestions(limit: number): Promise<ApiGetRandomQuestions> {
		return Api.getter({
			query: `
			query {
				get_random_questions(limit: ${limit}) {
					question
				}
			}`,
		});
	}

	static async countTotalQuestions(): Promise<ApiCountTotalQuestions> {
		return Api.getter({
			query: `
			query {
				count_total_questions
			}`,
		});
	}

	/**
	 * Add a question to the database
	 * @params {string} The question to add
	 * @return {Question} The question added
	 **/
	static async addNewQuestion(question: string): Promise<ApiAddNewQuestion> {
		return Api.getter({
			query: `
			mutation {
				add_new_question(question: "${question}") {
					question
				}
			}`,
		});
	}
}
