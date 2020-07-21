import { random } from '../utils';
import { config } from '../api/config';

function levelEasy(data) {
	return data.filter((item) => {
		return item.level === 'easy';
	});
}

function levelNormal(data) {
	return data.filter((item) => {
		return item.level === 'normal';
	});
}

function levelHard(data) {
	return data.filter((item) => {
		return item.level === 'hard';
	});
}

export function listQuestion(data) {
	const easy = random.ramdomAllvalue(levelEasy(data));
	const normal = random.ramdomAllvalue(levelNormal(data));
	const hard = random.ramdomAllvalue(levelHard(data));
	return {
		easy: [ ...easy, ...normal ],
		normal: [ ...normal, ...hard ],
		hard: [ ...hard ]
	};
}
