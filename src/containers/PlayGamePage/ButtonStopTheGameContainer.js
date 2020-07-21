import route from '../../route';
import { totalScore, userName } from '../../store';
import EndGame from '../../templates/EndGameScreen/EndGameScreen';

export default class ButtonStopTheGameContainer {
	constructor() {
		this.handleStopTheGame = this.handleStopTheGame.bind(this);
	}
	render() {}
	handleStopTheGame() {
		route.to('/lose_game');
	}

	handleDOM() {
		const stopGameEl = document.getElementById('btnstop');
		stopGameEl && stopGameEl.addEventListener('click', this.handleStopTheGame);
	}
}
