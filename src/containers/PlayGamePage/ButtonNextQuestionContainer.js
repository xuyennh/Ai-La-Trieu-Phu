import ButtonChooseAnswer from '../../templates/Button/ButtonChooseAnswer';
import {
	isVisibleModal,
	answerSelect,
	currentIndex,
	answerDecisionSelect,
	isCorrect,
	totalScore,
	help5050,
	helpCall,
	helpLooker,
	questions,
	listQuestionToPlayGame
} from '../../store';
import ModalChoseAnswer from '../../templates/ModalChoseAnswer/ModalChoseAnswer';
import { listQuestions } from '../../utils';
import route from '../../route';

export default class ButtonNextQuestionContainer {
	constructor() {
		this.handleOpenModalChooseAnswer = this.handleOpenModalChooseAnswer.bind(this);
		this.handleModalChooseAnswerOk = this.handleModalChooseAnswerOk.bind(this);
	}
	render() {
		return ButtonChooseAnswer();
	}
	// Hiển Thị Modal quyết định chọn đáp án
	handleOpenModalChooseAnswer() {
		isVisibleModal.setVisibleModal(true);
		const visibleModalState = isVisibleModal.get();
		if (answerSelect.get() === 'default') {
			isVisibleModal.setVisibleModal(false);
			return;
		}
		return ModalChoseAnswer({
			children: `Bạn Có quyết định chọn đáp án này: ${answerSelect.get().toUpperCase()}`,
			visible: visibleModalState,
			onOk: this.handleModalChooseAnswerOk,
			onCancel: this.handleModalChooseAnswerCancel
		});
	}

	getMainState() {
		const currentIndexState = currentIndex.get();
		const questionsState = questions.get();
		const listQuestionToPlayGameState = listQuestionToPlayGame.get();
		const mainState = listQuestionToPlayGameState[currentIndexState];
		return mainState;
	}

	// xử lí khi bấm Ok quyết định chọn đáp án
	handleModalChooseAnswerOk(onclose) {
		const { answers, score } = this.getMainState();
		const answerSelectState = answerSelect.get();
		const helper5050State = help5050.get();
		const questionsState = questions.get();
		const listQuestionToPlayGameState = listQuestionToPlayGame.get();
		isCorrect.setIsCorrect(answers, answerSelectState);
		const isCorrectState = isCorrect.get();
		if (isCorrectState) {
			totalScore.setTotalScore(score);
			currentIndex.select((currentIndexState) => {
				if (currentIndexState === listQuestionToPlayGameState.length) {
					currentIndex.resetCurrentIndex();
					route.to('/win_game');
				}
			});
			answerSelect.setNameAnswer('default');
			currentIndex.setCurrentIndex(); // Tăng Index;
		} else {
			currentIndex.resetCurrentIndex();
			route.to('/lose_game');
		}

		if (helpCall.get().used) {
			helpCall.resetHelpCallData();
		}
		if (help5050.get().used) {
			help5050.resetHelp5050Data();
		}
		if (helpLooker.get().used) {
			helpLooker.resetHelpLookerData();
		}
		isVisibleModal.setVisibleModal(false);
		onclose();
	}
	handleModalChooseAnswerCancel(onclose) {
		isVisibleModal.setVisibleModal(false);
		onclose();
	}

	handleDOM() {
		const buttonChosseAnswerEl = document.getElementById('choose-answer');
		buttonChosseAnswerEl && buttonChosseAnswerEl.addEventListener('click', this.handleOpenModalChooseAnswer);
	}
}
