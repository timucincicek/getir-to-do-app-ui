import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      className={`${styles["btn-action"]} ${styles[props.color]}`}
      type={props.btnType}
      onClick={props.btnClickHandler}
    >
      {props.btnText}
    </button>
  );
};
export default Button;
