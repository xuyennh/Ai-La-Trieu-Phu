import { isVisibleModal, userName, currentIndex, helpLooker, questions, listQuestionToPlayGame } from '../../store';
import { listQuestions } from '../../utils';

export default class ButtonHelpLookerContainer {
	constructor() {
		this.handleHelpLooker = this.handleHelpLooker.bind(this);
	}
	render() {}
	getMainState() {
		const currentIndexState = currentIndex.get();
		const questionsState = questions.get();
		const listQuestionToPlayGameState = listQuestionToPlayGame.get();
		const mainState = listQuestionToPlayGameState[currentIndexState];
		return mainState;
	}

	handleHelpLooker() {
		const { level, answers } = this.getMainState();
		const helpLookerState = helpLooker.get();
		if (!helpLookerState.used) {
			helpLooker.setHelpLooker(answers, level);
		}
	}
	handleDOM() {
		const helpLookerEL = document.getElementById('helplooker');
		if (helpLookerEL) {
			helpLookerEL.addEventListener('click', this.handleHelpLooker);
		}
	}
}
