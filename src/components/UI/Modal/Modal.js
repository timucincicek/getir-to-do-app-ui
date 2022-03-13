import styles from "./Modal.module.scss";

function Modal(props) {
  const modalCloseHandler = (event) => {
    props.onModalCloseHandler();
  };
  return (
    <div className={styles.modal}>
      <div className={styles["modal-content"]}>
        <div className={styles["modal-header"]}>
          <span onClick={modalCloseHandler} className={styles["close"]}>
            &times;
          </span>
          <h2>{props.title}</h2>
        </div>
        <div className={styles["modal-body"]}>{props.children}</div>
      </div>
    </div>
  );
}

export default Modal;
