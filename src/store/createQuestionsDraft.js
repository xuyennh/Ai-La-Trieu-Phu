import { createState, logger } from '../utils';

function createQuestionsDraft() {
	const { set, get, update, subscribe } = createState({
		isDeleteLoading: false,
		isLoading: false,
		isAlert: false,
		data: []
	});

	const getQuestionsDraftSuccess = (data) => {
		return set({
			isLoading: false,
			isAlert: false,
			data
		});
	};
	const addQuestionDraftRequest = () => {
		return update((listQuestion) => ({
			...listQuestion,
			isLoading: true
		}));
	};
	const addQuestionDraftSuccess = (result) => {
		return update((listQuestion) => ({
			isLoading: false,
			isAlert: true,
			data: [ ...listQuestion.data, result ]
		}));
	};
	const resetAlert = () => {
		return update((listQuestion) => ({
			...listQuestion,
			isAlert: false
		}));
	};
	const deleteQuestionDraftRequest = () => {
		return update((listQuestion) => ({
			...listQuestion,
			isDeleteLoading: true
		}));
	};
	const deleteQuestionDraftSuccess = (id) => {
		return update((listQuestion) => {
			return {
				...listQuestion,
				data: listQuestion.data.filter((item) => item.id !== id),
				isDeleteLoading: false
			};
		});
	};

	return {
		set,
		get,
		subscribe,
		addQuestionDraftSuccess,
		addQuestionDraftRequest,
		getQuestionsDraftSuccess,
		resetAlert,
		deleteQuestionDraftSuccess,
		deleteQuestionDraftRequest
	};
}

const questionDraft = logger(createQuestionsDraft)();
export default questionDraft;
