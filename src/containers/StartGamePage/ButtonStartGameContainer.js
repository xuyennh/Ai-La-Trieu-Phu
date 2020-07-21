import { userName } from '../../store';
import route from '../../route';

export default class ButtonStartGameContainer {
	constructor() {}
	render() {}

	_handleStartGame(event) {
		event.preventDefault();
		const inputName = document.getElementById('inputName');
		// const textWarning = document.querySelector("#text-warning");
		const { value } = inputName;
		// set isStart = true khi bắt đầu game và lấy tên người chơi nhập vào
		if (value == '') {
			return alert('Ban can nhap ten');
		}
		userName.select((userNameState) => {
			if (userNameState) {
				route.to('/play_game');
			}
		});
		userName.setUserName(value);
	}

	handleDOM() {
		const buttonStartGame = document.getElementById('buttonStartId');
		if (buttonStartGame) {
			buttonStartGame.addEventListener('click', this._handleStartGame);
		}
	}
}
