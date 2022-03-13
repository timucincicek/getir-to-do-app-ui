import Icon from "../Icon/Icon";
import styles from "./IconButton.module.scss";

const IconButton = (props) => {
  const buttonClickHandler = (event) => {
    props.onClickHandler(event);
  };

  return (
    <button className={styles.button} onClick={buttonClickHandler}>
      <Icon icon={props.icon} size={props.size} color={props.color} />
    </button>
  );
};
export default IconButton;
