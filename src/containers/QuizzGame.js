import { Container } from '../utils';
import StartGamePage from './StartGamePage/StartGamePage';
import PlayGamePage from './PlayGamePage/PlayGamePage';
import LoseGamePage from './LoseGamePage/LoseGamePage';
import WinGamePage from './WinGamePage/WinGamePage';
import AddQuestionsPage from './AddQuestionsPage/AddQuestionsPage';
import ModerationQuestionsPage from './ModerationQuestionsPage/ModerationQuestionsPage';

import {
	answerDecisionSelect,
	answerSelect,
	currentIndex,
	isVisibleModal,
	totalScore,
	userName,
	isCorrect,
	help5050,
	helpCall,
	helpLooker,
	questionDraft,
	questions,
	secret
} from '../store';
import route from '../route';
import AdminPage from './AdminPage/AdminPage';
import ListQuestionsPage from './ListQuestionsPage/ListQuestionPage';
export default class QuizzGame extends Container {
	start() {
		this.startGamePage = new StartGamePage();
		this.playGamePage = new PlayGamePage();
		this.loseGamePage = new LoseGamePage();
		this.winGamePage = new WinGamePage();
		this.addQuestionsPage = new AddQuestionsPage();
		this.moderationQuestionsPage = new ModerationQuestionsPage();
		this.listQuestionsPage = new ListQuestionsPage();
		this.adminPage = new AdminPage();
		this.init = this.init.bind(this);
		isCorrect.subscribe(this.init);
		userName.subscribe(this.init);
		currentIndex.subscribe(this.init);
		help5050.subscribe(this.init);
		helpCall.subscribe(this.init);
		helpLooker.subscribe(this.init);
		questionDraft.subscribe(this.init);
		questions.subscribe(this.init);
		secret.subscribe(this.init);
		route.subscribe(this.init);
	}
	renderRoutes() {
		const { url } = route.get();
		switch (url) {
			case 'lose_game':
				return this.loseGamePage.render();
			case 'win_game':
				return this.winGamePage.render();
			case 'play_game':
				return this.playGamePage.render();
			case 'add_question':
				return this.addQuestionsPage.render('add');
			case 'edit_question':
				return this.addQuestionsPage.render('edit');
			case 'admin':
				return this.adminPage.render();
			case 'admin/moderation_question':
				return this.moderationQuestionsPage.render();
			case 'admin/list_questions':
				return this.listQuestionsPage.render();
			default:
				return this.startGamePage.render();
		}
	}
	render() {
		return this.renderRoutes();
	}
	handleDOM() {
		this.startGamePage.handleDOM();
		this.playGamePage.handleDOM();
		this.loseGamePage.handleDOM();
		this.winGamePage.handleDOM();
		this.addQuestionsPage.handleDOM();
		this.adminPage.handleDOM();
		this.moderationQuestionsPage.handleDOM();
		this.listQuestionsPage.handleDOM();
	}
	init() {
		const { el } = this.props;
		el.innerHTML = this.render();
		this.handleDOM();
	}
}
