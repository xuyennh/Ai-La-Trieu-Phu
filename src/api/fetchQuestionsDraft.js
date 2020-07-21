const API = 'https://5f0ebab0faef3500160b88d8.mockapi.io/api/v1/question-draft';
export const getQuestionDrafts = () => {
	return fetch(API).then((res) => res.json());
};

export const postQuestionDraft = (data) => {
	return fetch(API, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then((res) => res.json());
};

export const deleteQuestionDraft = (id) => {
	return fetch(`${API}/${id}`, {
		method: 'DELETE'
	}).then((res) => res.json());
};

export const putQuestionDraft = (id, data) => {
	return fetch(`${API}/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then((res) => res.json());
};
