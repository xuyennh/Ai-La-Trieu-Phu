const { createState, logger } = require('../utils');

function createQuestions() {
	const { get, set, subscribe, update } = createState({
		isAddLoading: false,
		isLoading: false,
		isEditLoading: false,
		data: []
	});

	const getQuestionsRequest = () => {
		return update((prevState) => {
			return {
				...prevState,
				isLoading: true
			};
		});
	};
	const getQuestionsSuccess = (data) => {
		return update((prevState) => ({
			...prevState,
			isLoading: false,
			data
		}));
	};

	const addQuestionRequest = () => {
		return update((prevState) => {
			return {
				...prevState,
				isAddLoading: true
			};
		});
	};
	const addQuestionSuccess = (question) => {
		console.log(question);
		return update((prevState) => ({
			...prevState,
			isAddLoading: false,
			data: [ ...prevState.data, question ]
		}));
	};

	const editQuestionRequest = () => {
		return update((prevState) => {
			return {
				...prevState,
				isEditLoading: true
			};
		});
	};
	const editQuestionSuccess = (id, newQuestion) => {
		return update((prevState) => {
			return {
				...prevState,
				isEditLoading: false,
				data: prevState.data.map((item) => {
					if (item.id === id) {
						return {
							newQuestion,
							id: item.id
						};
					}
					return item;
				})
			};
		});
	};
	return {
		set,
		get,
		subscribe,
		getQuestionsRequest,
		getQuestionsSuccess,
		addQuestionRequest,
		addQuestionSuccess,
		editQuestionRequest,
		editQuestionSuccess
	};
}

const questions = logger(createQuestions)();
export default questions;
