import styles from "./TextField.module.scss";

const TextField = (props) => {
  return (
    <div className="form-control">
      <label>{props.label}</label>
      <textarea
        className={`${styles["text-field"]} ${props.className}`}
        value={props.value}
        onChange={props.onTextFieldChange}
      />
    </div>
  );
};
export default TextField;
