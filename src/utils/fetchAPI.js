export default function fetchAPI(configure) {
	const _configure = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
		...configure,
		body: JSON.stringify(configure.body)
	};
	const baseURL = 'https://5f0ebab0faef3500160b88d8.mockapi.io/api/v1/';

	return fetch(baseURL + configure.url, _configure).then((res) => {
		if (res.status === 200 && _configure.method === 'GET') {
			return res.json();
		} else if (res.status === 201 && _configure.method === 'POST') {
			return res.json();
		} else {
			throw new Error('error');
		}
	});
}
