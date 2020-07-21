import styles from './home.scss';
import btn from '../Button/button.scss';

function HomeScreen(props) {
	return /*html*/ `
      <div class="${styles.container}">
      ${props.isLoading
			? `<div class="${styles.loading}">
        <div class="${styles.loader}"></div>
        <div class="${styles.loadtext}">Đang tải game...</div>
      </div>`
			: ''}
        <div class="${styles.main}">
            <h1 class="${styles.title}">${props.title}</h1>
            <div class="${styles.name}">${props.text}</div>
            <input type="text" id="${props.inputId}" class="${styles.inputname}">
            <button id="${props.buttonStartId}" class="${btn.btn} ${btn.btn_primary}">${props.buttonStartText}</button>
            <a id=${props.buttonContribute} href="#" class=${styles.link_contribute_question}>${props.contributeQuestions}</a>
        </div>
      </div>
      `;
}

export default HomeScreen;
