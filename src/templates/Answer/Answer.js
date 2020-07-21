import styles from "./answer.scss";
/**
 *
 * @param {{
 *  id: number,
 *  value: string,
 *  name: string
 * }} props
 */

function Answer({ name, text, id }) {
  return /*html*/ `
    <label class="${styles.answer}">
        <input type="radio" data-answer-name="${name}" class="${styles.input} answerInput" name="${id}" value="${name}">
        <span class="${styles.item}">${text}</span>
    </label>
  `;
}

export default Answer;
