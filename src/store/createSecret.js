const { createState, logger } = require('../utils');

function createSecret() {
	const { set, get, subscribe, update } = createState('', {
		stateName: 'secret',
		isLocalStorage: true
	});
	const setSecret = (password) => {
		return update(() => password);
	};
	const resetSecret = () => {
		return set('');
	};
	return {
		set,
		get,
		subscribe,
		setSecret,
		resetSecret
	};
}

const secret = logger(createSecret)();
export default secret;
