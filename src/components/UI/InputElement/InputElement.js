const InputElement = (props) => {
  return (
    <div className="form-control">
      <label>{props.label}</label>
      <input
        type="text"
        value={props.value}
        onChange={props.onInputChange}
        className={props.className}
      />
    </div>
  );
};

export default InputElement;
