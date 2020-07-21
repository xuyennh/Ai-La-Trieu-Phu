import styles from "../Progress/progress.scss";

function Progress({ data }) {
  return /*html*/ `
    <div class="${styles.wrapper}">
      ${data
        .map((item) => {
          return /*html*/ `
            <div class=${styles.col}>
              <div class=${styles.item}>
                <div class="${styles.progress}">
                  <div class="${styles.progessinner}" id="a" style="height: ${item.percent}%">
                    <div>${item.percent}%</div>
                  </div>
                </div>
                <div class="${styles.text}">${item.name}</div>
              </div>
            </div>
        `;
        })
        .join("")}
    </div>
  `;
}

export default Progress;
