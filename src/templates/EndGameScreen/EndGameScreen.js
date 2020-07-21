import styles from "../HomeScreen/home.scss";

/**
 *
 * @param {{
 *  totalScore: number
 * }} props
 */
function EndGame({ totalScore }) {
  return /*html*/ `
    <div class="${styles.container}">
      <div class="${styles.form}">
        <h2>Xin lỗi, Bạn Đã Thua Cuộc!</h2>
        <div>Tổng số điểm bạn đạt được là: ${totalScore}</div>
        <button id="restart" class="${styles.btn}">Chơi Lại</button>
      </div>
    </div>
  `;
}

export default EndGame;
