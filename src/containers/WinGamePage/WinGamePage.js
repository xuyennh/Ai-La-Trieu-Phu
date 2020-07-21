import WinGame from '../../templates/WinGameScreen/WinGameScreen';
import { currentIndex, totalScore, isCorrect, userName, helpCall, help5050, helpLooker } from '../../store';
import { listquestion } from '../../utils';
import route from '../../route';

export default class WinGamePage {
	constructor() {}
	render() {
		const userNameState = userName.get();
		if (!userNameState) {
			route.redirect('/');
		}
		return WinGame({
			totalScore: totalScore.get()
		});
	}
	handleRePlay() {
		isCorrect.resetIsCorrect();
		totalScore.resetScore();
		helpCall.resetHelpCall();
		help5050.resetHelp5050();
		helpLooker.resetHelpLooker();
		route.redirect('/');
	}
	handleDOM() {
		const replayEl = document.getElementById('replay');
		replayEl && replayEl.addEventListener('click', this.handleRePlay);
	}
}
