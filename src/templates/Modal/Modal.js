import ModalBase from "../ModalBase/ModalBase";
import styles from "./modal.scss";

/**
 *
 * @param {{
 *  name: string,
 *  children: string,
 *  onOk: (event: MouseEvent) => void,
 *  onCancel: (onCancel: () => void, event: MouseEvent) => void,
 *  onClose: (onClose: () => void, event: MouseEvent) => void,
 *  textOk?: string,
 *  textCancel?: string
 * }} props
 */
function Modal({
  title,
  children,
  onOk = () => {},
  onCancel = () => {},
  textOk = "Ok",
  textCancel = "Cancel",
  onClose = () => {},
  ...rest
}) {
  const header = !!title
    ? /*html*/ `
    <div class="${styles.header}">
      <div>${title}</div>
      <div id="close" class=${styles.close}>&times;</div>
    </div>
  `
    : "";
  const content = /*html*/ `
    <div class="${styles.content}">${children}</div>
  `;
  const footer = /*html*/ `
    <div>
      <button id="modal_cancel">${textCancel}</button>
      <button id="modal_ok">${textOk}</button>
    </div>
  `;

  ModalBase({
    children: header + content + footer,
    contentClassName: styles.modal,
    containerClassName: "js-modal",
    ...rest,
  });
  const modal = document.querySelector(".js-modal");
  const modalOk = document.getElementById("modal_ok");
  const handleClose = () => {
    modal.remove();
  };
  modalOk &&
    modalOk.addEventListener("click", () => {
      onOk(handleClose);
    });
  const modalCancel = document.getElementById("modal_cancel");
  modalCancel &&
    modalCancel.addEventListener("click", (event) => {
      onCancel(handleClose);
    });
  const closeModal = document.getElementById("close");
  closeModal &&
    closeModal.addEventListener("click", (event) => {
      onClose(handleClose, event);
    });
}

export default Modal;
