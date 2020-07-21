import ListQuestions from '../../templates/ListQuestions/ListQuestions';
import { questions } from '../../store';

export default class ListQuestionsPage {
	render() {
		const questionsState = questions.get();
		return ListQuestions({
			data: questionsState.data
		});
	}
	handleDOM() {}
}
