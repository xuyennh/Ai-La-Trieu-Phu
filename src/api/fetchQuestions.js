import fetchAPI from '../utils/fetchAPI';

const ENDPOINT = 'questions';

export const getQuestions = () => {
	return fetchAPI({
		url: ENDPOINT
	});
};

export const postQuestion = (data) => {
	return fetchAPI({
		method: 'POST',
		url: ENDPOINT,
		body: data
	});
};

export const deleteQuestion = (id) => {
	return fetchAPI({
		method: 'DELETE',
		url: `${ENDPOINT}/${id}`
	});
};

export const putQuestion = (id, data) => {
	return fetchAPI({
		method: 'PUT',
		body: data
	});
};
