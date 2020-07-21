import { createState, logger, listQuestion } from '../utils';

function createListQuestionToPlayGame() {
	const { set, get, subscribe, update } = createState([]);
	const setListQuestionsToplayGame = (data) => {
		const listQuestions = [
			...listQuestion(data).easy.slice(0, 6),
			...listQuestion(data).normal.slice(0, 5),
			...listQuestion(data).hard.slice(0, 4)
		];
		return set(listQuestions);
	};
	return {
		set,
		get,
		subscribe,
		setListQuestionsToplayGame
	};
}

const listQuestionToPlayGame = logger(createListQuestionToPlayGame)();
export default listQuestionToPlayGame;
