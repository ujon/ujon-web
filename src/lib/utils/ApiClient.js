/**
 * @typedef {Object} RequestOptions
 * @property {Object} [headers]
 * @property {Object} [body]
 * @property {Object} [params]
 */

class ApiClient {
	constructor(baseURL, defaultHeaders = {
		'Content-Type': 'application/json'
	}) {
		this.baseURL = baseURL;
		this.defaultHeaders = defaultHeaders;
		this.requestInterceptors = [];
		this.responseInterceptors = [];
	}

	// todo
	addRequestInterceptor(interceptor) {
		this.requestInterceptors.push(interceptor);
	}

	// todo
	addResponseInterceptor(interceptor) {
		this.responseInterceptors.push(interceptor);
	}

	/**
	 * @param {string} [endpoint]
	 * @param {string} [method]
	 * @param {RequestOptions} [options={}]
	 * @returns {Promise<Response>}
	 */
	async request(
		endpoint,
		method = 'GET',
		{
			headers = {},
			body = null,
			params = {}
		} = {}
	) {
		const url = this.#handleRequestUrl(endpoint, params);
		const options = this.#handleRequest(method, headers, body);

		return await fetch(url, options)
			.catch(error => {
				throw new Error(error);
			});
	}

	/**
	 * @param {string} endpoint
	 * @param {Object} params
	 * @returns {string}
	 */
	#handleRequestUrl(endpoint, params) {
		if (params && Object.keys(params).length > 0) {
			const queryString = new URLSearchParams(params).toString();
			return `${this.baseURL}${endpoint}?${queryString}`;
		}
		return `${this.baseURL}${endpoint}`;
	}

	/**
	 * Constructs request options for an HTTP call.
	 *
	 * @param {string} [method]
	 * @param {Object} [headers]
	 * @param {Object} [body]
	 * @return {RequestInit}
	 */
	#handleRequest(method, headers, body) {
		return {
			method: method,
			headers: { ...this.defaultHeaders, ...headers },
			body: body ? JSON.stringify(body) : null
		};
	}

	/**
	 * GET REQUEST
	 * @param endpoint {string}
	 * @param options {RequestOptions}
	 * @returns {Promise<Response>}
	 */
	get(endpoint, options = {}) {
		return this.request(endpoint, 'GET', options);
	}

	/**
	 * POST REQUEST
	 * @param endpoint {string}
	 * @param options {RequestOptions}
	 * @returns {Promise<Response>}
	 */
	post(endpoint, options = {}) {
		return this.request(endpoint, 'POST', options);
	}

	/**
	 * PUT REQUEST
	 * @param endpoint {string}
	 * @param options {RequestOptions}
	 * @returns {Promise<Response>}
	 */
	put(endpoint, options = {}) {
		return this.request(endpoint, 'PUT', options);
	}

	/**
	 * DELETE REQUEST
	 * @param endpoint {string}
	 * @param options {RequestOptions}
	 * @returns {Promise<Response>}
	 */
	delete(endpoint, options = {}) {
		return this.request(endpoint, 'DELETE', options);
	}
}

export default ApiClient;
