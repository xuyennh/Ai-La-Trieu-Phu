import styles from '../AdminManagementPage/adminManagementPage.scss';

function AdminManagementPage() {
	return `
    <div class="${styles.container}">
      <div class="${styles.header}">
        <a href="#" class="${styles.logout}" id="logout">Logout</a>
      </div>
      <ul class="${styles.list}">
        <li><a href="" class="link-questions">Danh sách Câu Hỏi</a></li>
        <li><a href="" class="link-questionsdraft">Danh sách Câu Hỏi được Đóng góp</a></li>
      </ul>
    </div>
  `;
}

export default AdminManagementPage;
