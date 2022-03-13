const Dropdown = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onDropdownChange(Number(event.target.value));
  };

  return (
    <div className="form-control">
      <label>{props.label}</label>
      <select
        defaultValue={props.defaultValue}
        onChange={dropdownChangeHandler}
      >
        {props.options.map((item, index) => (
          <option value={item.value} key={index}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
