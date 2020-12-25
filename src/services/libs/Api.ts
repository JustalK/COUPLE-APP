import { apiConfig } from './ApiConfig';
import fetch from 'node-fetch';

/**
 * Superclass for managing the API call
 **/
export default class Api {
	/**
	 * Return the result of a graphql query
	 * @params {Object} query The graphql query
	 * @return {Object} The result of the query
	 **/
	static async getter<T>(query: { query: string }): Promise<T> {
		const response = await fetch(apiConfig.api_url + apiConfig.endpoint, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(query),
		});
		const response_json = await response.json();
		return response_json.data;
	}
}
