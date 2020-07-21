function createHistory() {
	let info = {};
	const listeners = [];
	function callListeners(url, data, title) {
		window.history.pushState(data, title, url);
		info = {
			url: url.replace(/^\//g, ''),
			data,
			title
		};
		listeners.forEach((listener) => {
			queueMicrotask(() => {
				listener({ url, data, title });
			});
		});
	}
	window.addEventListener('popstate', (event) => {
		event.preventDefault();
		const url = window.location.pathname;
		const data = event.state;
		const title = '';
		callListeners(url, data, title);
	});
	window.addEventListener('beforeunload', (event) => {
		event.preventDefault();
	});
	window.addEventListener('hashchange', (event) => {
		console.log('hashchange', event);
	});
	return {
		to(url, data = {}, title = '') {
			callListeners(url, data, title);
		},
		redirect(url) {
			const data = {};
			const title = '';
			callListeners(url, data, title);
		},
		back() {
			window.history.back();
		},
		get() {
			return info;
		},
		subscribe(listener) {
			info = {
				url: document.location.pathname.replace(/^\//g, ''),
				data: {},
				title: ''
			};
			listeners.push(listener);
		}
	};
}

export default createHistory;
