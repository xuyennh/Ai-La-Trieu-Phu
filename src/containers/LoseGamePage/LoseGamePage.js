import EndGameScreen from '../../templates/EndGameScreen/EndGameScreen';
import EndGame from '../../templates/EndGameScreen/EndGameScreen';
import {
	answerDecisionSelect,
	answerSelect,
	currentIndex,
	isStart,
	isVisibleModal,
	totalScore,
	userName,
	isCorrect,
	helpCall,
	help5050,
	helpLooker
} from '../../store';
import route from '../../route';

export default class LoseGamePage {
	constructor() {
		this.handleRestart = this.handleRestart.bind(this);
	}
	render() {
		const userNameState = userName.get();
		if (!userNameState) {
			route.redirect('/');
		}
		return EndGame({
			totalScore: totalScore.get()
		});
	}
	handleRestart() {
		isCorrect.resetIsCorrect();
		helpCall.resetHelpCall();
		help5050.resetHelp5050();
		helpLooker.resetHelpLooker();
		totalScore.resetScore();
		route.redirect('/');
	}
	handleDOM() {
		const restartEl = document.getElementById('restart');
		restartEl && restartEl.addEventListener('click', this.handleRestart);
	}
}
