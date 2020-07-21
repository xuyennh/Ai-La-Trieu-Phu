import route from '../../route';

export default class ButtonContributeQuestion {
	constructor() {}
	render() {}
	_handleContributeQuestion(event) {
		event.preventDefault();
		route.to('/add_question');
	}
	handleDOM() {
		const buttonContributeEL = document.getElementById('buttonContribute');
		if (buttonContributeEL) {
			buttonContributeEL.addEventListener('click', this._handleContributeQuestion);
		}
	}
}
