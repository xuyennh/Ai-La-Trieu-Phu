import styles from "./button.scss";

function ButtonChooseAnswer() {
  return /*html*/ `
    <button class="${styles.btn} ${styles.btn_dark}" id="choose-answer">Chọn</button>
  `;
}
export default ButtonChooseAnswer;
