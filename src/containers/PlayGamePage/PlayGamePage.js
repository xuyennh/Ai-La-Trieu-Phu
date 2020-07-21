import MainScreen from '../../templates/MainScreen/MainScreen';
import {
	currentIndex,
	userName,
	totalScore,
	help5050,
	helpCall,
	helpLooker,
	questions,
	listQuestionToPlayGame
} from '../../store';
import ShowAnswerContainer from './ShowAnswerContainer';
import ButtonNextQuestionContainer from './ButtonNextQuestionContainer';
import { random } from '../../utils';
import { listQuestions } from '../../utils';
import route from '../../route';
import ButtonStopTheGameContainer from './ButtonStopTheGameContainer';
import { config } from '../../api/config';
import ButtonHelpCallContainer from './ButtonHelpCallContainer';
import CountDownContainer from './CountDownContainer';
import ButtonHelp5050Container from './ButtonHelp5050Container';
import ButtonHelpLookerContainer from './ButtonHelpLookerContainer';
import Progress from '../../templates/Progress/Progress';

export default class PlayGamePage {
	constructor() {
		this.start();
		this.renderAnswer = this.renderAnswer.bind(this);
	}
	start() {
		this.showAnswerContainer = new ShowAnswerContainer();
		this.buttonNextQuestionContainer = new ButtonNextQuestionContainer();
		this.buttonStopTheGameContainer = new ButtonStopTheGameContainer();
		this.buttonHelp5050Container = new ButtonHelp5050Container();
		this.buttonHelpCallContainer = new ButtonHelpCallContainer();
		this.countDownContainer = new CountDownContainer();
		this.buttonHelpLookerContainer = new ButtonHelpLookerContainer();
	}
	getMainState() {
		const currentIndexState = currentIndex.get();
		const questionsState = questions.get();
		const listQuestionToPlayGameState = listQuestionToPlayGame.get();
		const mainState = listQuestionToPlayGameState[currentIndexState];
		return mainState || {};
	}
	renderAnswer() {
		const { id, answers = [] } = this.getMainState();
		return answers
			.map((answer) => {
				return this.showAnswerContainer.render(answer, id);
			})
			.join('');
	}
	renderTextHelper5050() {
		const helper5050State = help5050.get();
		const { isRender, data } = helper5050State;
		if (!isRender) {
			return '';
		}
		const result1 = data[0].name;
		const result2 = data[1].name;
		return `
      Gợi ý 50/50: ${result1.toUpperCase()} & ${result2.toUpperCase()}.
    `;
	}
	renderTextHelperCall() {
		const helperCallState = helpCall.get();
		const { isRender, data } = helperCallState;
		if (!isRender) {
			return '';
		}
		return `
      Gợi ý từ người thân: ${data.name.toUpperCase()}
    `;
	}
	move() {}
	renderTextHelperLooker() {
		const helperLookerState = helpLooker.get();
		const { isRender, data } = helperLookerState;
		if (!isRender) {
			return '';
		}
		return `Gợi ý từ Khán Giả:` + Progress({ data });
	}

	render() {
		const currentIndexState = currentIndex.get();
		const userNameState = userName.get();
		const quizze = this.getMainState();
		const help5050State = help5050.get();
		const helpCallState = helpCall.get();
		const helpLookerState = helpLooker.get();
		if (!userNameState) {
			route.redirect('/');
		}
		return MainScreen({
			question: quizze.question,
			questionNumber: currentIndexState + 1,
			Answer: this.renderAnswer(),
			ButtonSelect: this.buttonNextQuestionContainer.render(),
			nameUser: userNameState,
			score: totalScore.get(),
			textHelper5050: this.renderTextHelper5050(),
			textHelperCall: this.renderTextHelperCall(),
			textHelpLooker: this.renderTextHelperLooker(),
			help5050Used: help5050State.used,
			helpCallUsed: helpCallState.used,
			helpLookerUsed: helpLookerState.used,
			help5050Enabled: config.help_5050,
			helpCallEnabled: config.help_call,
			helpLookerEnabled: config.help_looker
		});
	}
	handleDOM() {
		this.showAnswerContainer.handleDOM();
		this.buttonNextQuestionContainer.handleDOM();
		this.buttonStopTheGameContainer.handleDOM();
		this.buttonHelp5050Container.handleDOM();
		this.buttonHelpCallContainer.handleDOM();
		this.buttonHelpLookerContainer.handleDOM();
	}
}
