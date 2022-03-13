import Button from "../Button/Button";
import "./Form.scss";

const Form = (props) => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onClickHandler();
  };
  return (
    <form onSubmit={formSubmitHandler} className="form-controls">
      {props.children}
      <Button btnText={props.btnText} color="primary" btnType="submit" />
    </form>
  );
};

export default Form;
