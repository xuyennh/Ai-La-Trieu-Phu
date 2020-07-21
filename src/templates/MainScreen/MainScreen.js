import Help from "../Help/Help";
import styles from "./main.scss";

/**
 *
 * @param {{
 *  question: string,
 * questionNumber: number,
 * answer: [],
 * ButtonSelect: () => {};
 * nameUser: string,
 * score: number
 * }} props
 */

function MainScreen({
  question,
  questionNumber,
  Answer,
  ButtonSelect,
  nameUser,
  score,
  textHelper5050,
  textHelperCall,
  textHelpLooker,
  help5050Used = false,
  helpCallUsed = false,
  helpLookerUsed = false,
  help5050Enabled,
  helpCallEnabled,
  helpLookerEnabled,
}) {
  const renderTextHelper = (textHelper) => {
    if (!textHelper) {
      return "";
    }
    return `<div class="${styles.showhelp}">${textHelper}</div>`;
  };

  return /*html*/ `
        <div class="${styles.main}">
          <div class="${styles.col8}">
          <div class="${styles.game}">
          <div class="${styles.help}">
                  <div class="${styles.helptext}">${renderTextHelper(
    textHelper5050
  )}</div>
                  <div class="${styles.helptext}">${renderTextHelper(
    textHelperCall
  )}</div>
                  <div class="${styles.helptext}">${renderTextHelper(
    textHelpLooker
  )}</div>
                </div>
                <h2 class="${styles.question}">${question}</h2>
                <div class="${
                  styles.questionnumber
                }">Câu số: ${questionNumber}</div>
                <div class="${styles.listanswer}">${Answer}</div>
                <div class="${styles.name}">${nameUser}</div>
                ${ButtonSelect}
            </div>
          </div>
           <div class="${styles.col4}">
            <div class="${styles.board}"> 
              <div>${Help({
                help5050Used,
                helpCallUsed,
                help5050Enabled,
                helpCallEnabled,
                helpLookerEnabled,
                helpLookerUsed,
              })}</div> 
             <div class="${styles.boardbelow}">
                <div id="clock" class="${styles.countdown}"></div>
                <div class="${styles.score}">Score:</div>
                <div class="${styles.scorequestion}">${score}</div>
                <button id="btnstop" class="${
                  styles.btnstop
                }">Dừng Cuộc Chơi</button>
             </div>
              </div>
           </div>
        </div>
      `;
}

export default MainScreen;
