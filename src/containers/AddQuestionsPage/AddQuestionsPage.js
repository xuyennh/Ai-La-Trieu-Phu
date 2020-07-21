import ContributeQuestions from '../../templates/ContributeQuestion/ContributeQuestions';
import dataForm from '../../api/dataform';
import { questionDraft, questions } from '../../store';
import { postQuestionDraft, deleteQuestionDraft } from '../../api/fetchQuestionsDraft';
import { postQuestion } from '../../api/fetchQuestions';
import route from '../../route';

const editItem = {
	id: 5,
	level: 'hard',
	question: 'Bộ phim Chị Dậu được chuyển thể từ tác phẩm nào?',
	answers: [
		{ value: 'A: Người mẹ cầm súng', name: 'a', isCorrect: false },
		{ value: 'B: Vợ chồng A Phủ', name: 'b', isCorrect: false },
		{ value: 'C: Tuổi thơ dữ dội', name: 'c', isCorrect: false },
		{ value: 'D: Tắt đèn', name: 'd', isCorrect: true }
	],
	score: 500
};

export default class AddQuestionsPage {
	render(type) {
		const { data } = route.get();
		const questionDraftState = questionDraft.get();
		const defaultResult = type === 'edit' ? data.questionDraft : [];
		if (type === 'edit' && !data.questionDraft) {
			route.redirect('admin/moderation_question');
		}
		return ContributeQuestions({
			fields: dataForm,
			defaultResult,
			buttonText: questionDraftState.isLoading ? 'Loading...' : 'Submit',
			isAlertVisible: questionDraftState.isAlert
		});
	}
	_handleSubmit(event) {
		event.preventDefault();
		const { data } = route.get();
		const formEL = document.getElementById('form-addquestion');
		const fieldEls = [ ...formEL.querySelectorAll('.field') ];
		const inputTextGroupEls = [ ...formEL.querySelectorAll('.inputTextGroup') ];
		const input = inputTextGroupEls.reduce((obj, inputTextGroupEl) => {
			const inputTextGroupItemEls = [ ...inputTextGroupEl.querySelectorAll('input[type="text"]') ];
			const name = inputTextGroupEl.getAttribute('data-name');
			const values = inputTextGroupItemEls.map((item) => {
				const radioEl = inputTextGroupEl.querySelector(`input[type="radio"][value="${item.name}"]`);
				return {
					value: `${item.name}: ${item.value}`,
					name: item.name,
					isCorrect: radioEl.checked
				};
			});
			return {
				...obj,
				[name]: values
			};
		}, {});
		const getScore = (value) => {
			switch (value) {
				case 'normal':
					return 500;
				case 'hard':
					return 1000;
				case 'easy':
				default:
					return 100;
			}
		};
		const result = fieldEls.reduce((obj, fieldEl) => {
			const { value, name } = fieldEl;
			return {
				...obj,
				[name]: value,
				score: getScore(value),
				...input
			};
		}, {});
		if (data.isEdit) {
			questions.editQuestionRequest();
			postQuestion(result).then((dataQuestion) => {
				deleteQuestionDraft(data.questionDraft.id).then(() => {
					questionDraft.deleteQuestionDraftSuccess(data.questionDraft.id);
				});
				route.to('admin/moderation_question');
			});
		} else {
			questionDraft.addQuestionDraftRequest();
			postQuestionDraft(result).then((data) => {
				questionDraft.addQuestionDraftSuccess(data);
				//timeout to remove aleart after add
				const timeOut = setTimeout(() => {
					questionDraft.resetAlert();
					clearTimeout(timeOut);
				}, 3000);
			});
		}
	}
	_handleBackHomePage() {
		route.to('/');
	}
	handleDOM() {
		const buttonSubmitEl = document.querySelector("button[type='submit']");
		const buttonBackEl = document.querySelector('#back');
		if (buttonSubmitEl) {
			buttonSubmitEl.addEventListener('click', this._handleSubmit);
		}
		buttonBackEl && buttonBackEl.addEventListener('click', this._handleBackHomePage);
	}
}
