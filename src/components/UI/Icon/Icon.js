import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Icon.module.scss";

const Icon = (props) => {
  return (
    <FontAwesomeIcon
      icon={props.icon}
      className={`  ${styles[props.color]} ${styles[props.size]}  `}
    />
  );
};

export default Icon;
