import { questionDraft, questions, secret } from '../../store';
import ModerationQuestion from '../../templates/ModerationQuestions/ModerationQuestion';
import { deleteQuestionDraft } from '../../api/fetchQuestionsDraft';
import { postQuestion } from '../../api/fetchQuestions';
import route from '../../route';

export default class ModerationQuestionsPage {
	constructor() {
		this._handleDeleteQuestion = this._handleDeleteQuestion.bind(this);
		this._handleAddQuestion = this._handleAddQuestion.bind(this);
	}
	render() {
		const questionDraftState = questionDraft.get();
		const secretState = secret.get();
		if (!secretState) {
			route.redirect('/admin');
		}
		return ModerationQuestion({
			data: questionDraftState.data,
			isLoading: questionDraftState.isDeleteLoading
		});
	}
	_handleDeleteQuestion(event) {
		const idQuestionDraft = event.target.getAttribute('data-id');
		questionDraft.deleteQuestionDraftRequest();
		deleteQuestionDraft(idQuestionDraft).then(() => {
			questionDraft.deleteQuestionDraftSuccess(idQuestionDraft);
		});
	}
	_handleAddQuestion(event) {
		const idQuestionDraft = event.target.getAttribute('data-id');
		const questionDraftState = questionDraft.get();
		const [ question ] = questionDraftState.data.filter((item) => {
			return item.id === idQuestionDraft;
		});
		console.log(question);
		questions.addQuestionRequest();
		postQuestion(question).then((data) => {
			questions.addQuestionSuccess(data);
			this._handleDeleteQuestion(event);
		});
	}
	_handleEditQuestion(event) {
		const idQuestionDraft = event.target.getAttribute('data-id');
		const questionDraftState = questionDraft.get();
		const [ question ] = questionDraftState.data.filter((item) => {
			return item.id === idQuestionDraft;
		});
		route.to('/edit_question', {
			isEdit: true,
			questionDraft: question
		});
	}
	handleDOM() {
		const questionDraftState = questionDraft.get();
		questionDraftState.data.forEach((item) => {
			const { id } = item;
			const buttonDeleteQuestionEl = document.querySelector(`[data-button="delete-question-${id}"]`);
			const buttonEditQuestionEl = document.querySelector(`[data-button="edit-question-${id}"]`);
			const buttonAddQuestionEl = document.querySelector(`[data-button="add-question-${id}"]`);
			buttonDeleteQuestionEl && buttonDeleteQuestionEl.addEventListener('click', this._handleDeleteQuestion);
			buttonAddQuestionEl && buttonAddQuestionEl.addEventListener('click', this._handleAddQuestion);
			buttonEditQuestionEl && buttonEditQuestionEl.addEventListener('click', this._handleEditQuestion);
		});
	}
}
