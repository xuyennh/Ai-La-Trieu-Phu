import Answer from '../../templates/Answer/Answer';
import { answerSelect } from '../../store';
export default class ShowAnswerContainer {
	constructor() {}
	render(answer, id) {
		return Answer({
			name: answer.name,
			text: answer.value,
			id
		});
	}
	handleInputEl(event) {
		const answerName = event.currentTarget.getAttribute('data-answer-name');
		answerSelect.setNameAnswer(answerName);
	}
	handleDOM() {
		const answerInputEls = document.querySelectorAll('.answerInput');
		answerInputEls.forEach((answerInputEl) => {
			answerInputEl.addEventListener('click', this.handleInputEl);
		});
	}
}
