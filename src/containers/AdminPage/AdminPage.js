import Login from '../../templates/Login/Login';
import route from '../../route';
import { SECRET } from '../../constants';
import { secret } from '../../store';
import AdminManagementPage from '../../templates/AdminManagementPage/AdminManagementPage';

export default class AdminPage {
	render() {
		const secretState = secret.get();
		if (!!secretState) {
			return AdminManagementPage();
		}
		return Login();
	}
	_handleLogin(event) {
		event.preventDefault();
		const inputEl = event.target.querySelector('input');
		const { value } = inputEl;
		if (value === SECRET) {
			secret.setSecret(value);
		}
	}
	handleLogout(event) {
		event.preventDefault();
		secret.resetSecret();
	}
	handleLinkQuestionsDraft(event) {
		event.preventDefault();
		route.to('admin/moderation_question');
	}
	handleLinkQuestions(event) {
		event.preventDefault();
		route.to('admin/list_questions');
	}
	handleDOM() {
		const formLoginEl = document.getElementById('form-login');
		if (formLoginEl) {
			formLoginEl.addEventListener('submit', this._handleLogin);
		}
		const logoutEl = document.getElementById('logout');
		logoutEl && logoutEl.addEventListener('click', this.handleLogout);
		const linkquestionsDraftEl = document.querySelector('.link-questionsdraft');
		linkquestionsDraftEl && linkquestionsDraftEl.addEventListener('click', this.handleLinkQuestionsDraft);
		const linkquestionsEl = document.querySelector('.link-questions');
		linkquestionsEl && linkquestionsEl.addEventListener('click', this.handleLinkQuestions);
	}
}
