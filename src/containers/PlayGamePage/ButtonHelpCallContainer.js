import {
	isVisibleModal,
	userName,
	help5050,
	currentIndex,
	helpCall,
	questions,
	listQuestionToPlayGame
} from '../../store';
import { listQuestions } from '../../utils';

export default class ButtonHelpCallContainer {
	constructor() {
		this.handleHelpCall = this.handleHelpCall.bind(this);
	}
	render() {}

	getMainState() {
		const currentIndexState = currentIndex.get();
		const questionsState = questions.get();
		const listQuestionToPlayGameState = listQuestionToPlayGame.get();
		const mainState = listQuestionToPlayGameState[currentIndexState];
		return mainState;
	}

	handleHelpCall() {
		const { answers } = this.getMainState();
		const helpCallState = helpCall.get();
		if (!helpCallState.used) {
			helpCall.setHelpCall(answers);
		}
	}
	handleDOM() {
		const helpCallEL = document.getElementById('helpcall');
		if (helpCallEL) {
			helpCallEL.addEventListener('click', this.handleHelpCall);
		}
	}
}
