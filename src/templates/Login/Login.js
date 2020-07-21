import styles from '../Login/login.scss';

function Login() {
	return /*html*/ `
    <div class="${styles.container}">
      <h1>Chào Bạn</h1>
      <div>Vui lòng Nhập Mật Khẩu</div>
      <form id="form-login">
        <input type="password"/>
      </form>
    </div>
  `;
}

export default Login;
