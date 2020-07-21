import HomeScreen from '../../templates/HomeScreen/HomeScreen';
import ButtonStartGameContainer from './ButtonStartGameContainer';
import ButtonContributeQuestion from './ButtonContributeQuestionContainer';
import { questionDraft, questions, listQuestionToPlayGame } from '../../store';
import { Container } from '../../utils';
import { getQuestionDrafts } from '../../api/fetchQuestionsDraft';
import { getQuestions } from '../../api/fetchQuestions';

export default class StartGamePage extends Container {
	constructor() {
		super();
		this.buttonStartGameContainer = new ButtonStartGameContainer();
		this.buttonContributeQuestion = new ButtonContributeQuestion();
	}
	// getData
	start() {
		getQuestionDrafts().then((data) => {
			questionDraft.getQuestionsDraftSuccess(data);
		});
		questions.getQuestionsRequest();
		getQuestions().then((data) => {
			questions.getQuestionsSuccess(data);
			listQuestionToPlayGame.setListQuestionsToplayGame(data);
		});
	}
	render() {
		// Hiển thị màn hình chính
		const questionsState = questions.get();
		return HomeScreen({
			title: 'Ai Là Triệu Phú',
			text: 'Vui Lòng Nhập Tên Của Bạn',
			buttonStartText: 'Bắt Đầu',
			contributeQuestions: 'Đóng góp thêm câu hỏi cho chúng tôi',
			inputId: 'inputName',
			buttonStartId: 'buttonStartId',
			buttonContribute: 'buttonContribute',
			isLoading: questionsState.isLoading
		});
	}

	handleDOM() {
		this.buttonStartGameContainer.handleDOM();
		this.buttonContributeQuestion.handleDOM();
	}
}
