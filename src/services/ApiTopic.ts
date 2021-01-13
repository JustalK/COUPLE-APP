import Api from 'src/services/libs/Api';
import {
	ApiGetAllTopics
} from 'src/interfaces/Api';
export default class ApiTopic {

	/**
	* Return all the topics of the games
	* @return {ApiGetAllTopics} The topics of the game
	**/
	static async getAllTopics(): Promise<ApiGetAllTopics> {
		return Api.getter<ApiGetAllTopics>({
			query: `
			query {
				get_all_topics {
					id
					name
					icon
					source
				}
			}`,
		});
	}
}
