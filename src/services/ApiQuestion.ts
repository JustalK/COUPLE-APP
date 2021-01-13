import Api from 'src/services/libs/Api';
import {
	ApiGetAllQuestions,
	ApiGetRandomQuestionsByTopics,
	ApiCountTotalQuestions,
	ApiAddNewQuestion,
} from 'src/interfaces/Api';
export default class ApiQuestion {
	static async getAllQuestions(): Promise<ApiGetAllQuestions> {
		return Api.getter<ApiGetAllQuestions>({
			query: `
			query {
				get_all_questions {
					question
				}
			}`,
		});
	}

	static async getRandomQuestionsByTopics(topicsID: string, limit: number): Promise<ApiGetRandomQuestionsByTopics> {
		return Api.getter<ApiGetRandomQuestionsByTopics>({
			query: `
			query {
				get_random_questions_by_topics(topics: ["${topicsID}"], limit: ${limit}) {
					question
				}
			}`,
		});
	}

	static async countTotalQuestions(): Promise<ApiCountTotalQuestions> {
		return Api.getter<ApiCountTotalQuestions>({
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
	static async addNewQuestion(question: string, topicID: string): Promise<ApiAddNewQuestion> {
		return Api.getter<ApiAddNewQuestion>({
			query: `
			mutation {
				add_new_question(question: "${question}", topics: ["${topicID}"]) {
					question
				}
			}`,
		});
	}
}
