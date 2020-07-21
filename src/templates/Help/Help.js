import styles from "./help.scss";

function Help({
  help5050Used = false,
  helpCallUsed = false,
  helpLookerUsed = false,
  help5050Enabled = true,
  helpCallEnabled = true,
  helpLookerEnabled = true,
}) {
  const help5050UsedClassName = help5050Used ? styles.help5050used : "";
  const helpCallUsedClassName = helpCallUsed ? styles.helpcallused : "";
  const helpCallLookerClassName = helpLookerUsed ? styles.helplookerused : "";
  const renderHelp5050 = () => {
    if (!help5050Enabled) {
      return "";
    }
    return `<button id="help-5050" class="${styles.inner} ${help5050UsedClassName}">50:50</button>`;
  };
  const renderHelpCall = () => {
    if (!helpCallEnabled) {
      return "";
    }
    return `<button id="helpcall" class="${styles.inner} ${helpCallUsedClassName}"><i class=" fa fa-volume-control-phone" aria-hidden="true"></i></button>`;
  };
  const renderHelpLooker = () => {
    if (!helpLookerEnabled) {
      return "";
    }
    return ` <button id="helplooker" class="${styles.inner} ${helpCallLookerClassName}"><i class="fa fa-users" aria-hidden="true"></i></button>`;
  };
  return /*html*/ `
      <div class="${styles.btn}">
          ${renderHelp5050()}
          ${renderHelpCall()}
         ${renderHelpLooker()}
      </div>
    `;
}

export default Help;
