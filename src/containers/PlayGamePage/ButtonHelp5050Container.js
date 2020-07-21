import { isCorrect, currentIndex, help5050, questions, listQuestionToPlayGame } from '../../store';
import { listQuestions } from '../../utils';
import { random } from '../../utils';

export default class ButtonHelp5050Container {
	constructor() {
		this.handleHelp5050 = this.handleHelp5050.bind(this);
	}
	render() {}

	getMainState() {
		const currentIndexState = currentIndex.get();
		const questionsState = questions.get();
		const listQuestionToPlayGameState = listQuestionToPlayGame.get();
		const mainState = listQuestionToPlayGameState[currentIndexState];
		return mainState;
	}
	handleRandom() {}
	handleHelp5050() {
		const { answers } = this.getMainState();
		const help5050State = help5050.get();
		if (!help5050State.used) {
			help5050.setHelp5050(answers);
		}
	}
	handleDOM() {
		const help5050El = document.getElementById('help-5050');
		if (help5050El) {
			help5050El.addEventListener('click', this.handleHelp5050);
		}
	}
}
