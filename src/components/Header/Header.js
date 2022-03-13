import styles from "./Header.module.scss";
import IconButton from "../UI/IconButton/IconButton";
import {
  faPlus,
  faBars,
  faXmark,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const cancelSelectedHandler = () => {
    props.onSelectedIds([]);
  };
  const addTaskHandler = () => {
    props.onSetActionType("Add");
  };
  const filterTaskHandler = () => {
    props.onSetActionType("Filter");
  };
  const deleteTaskHandler = () => {
    props.onDeleteActive(true);
  };

  return (
    <div className={styles["header__container"]}>
      <div className={styles["heading__left"]}>
        <h2>TO-DO App</h2>
        {props.totalAmount > 0 && (
          <span className={styles["task__found"]}>
            {props.totalAmount} tasks found
          </span>
        )}
        {props.selectedIds.length > 0 && (
          <div className={styles["selected-info"]}>
            <IconButton
              icon={faXmark}
              color="white"
              size="small"
              onClickHandler={cancelSelectedHandler}
            />
            <span> {props.selectedIds.length} selected</span>
          </div>
        )}
      </div>
      <div className={styles["heading__right"]}>
        <div className={styles["action_buttons"]}>
          {props.selectedIds.length === 0 && (
            <div>
              <IconButton
                onClickHandler={addTaskHandler}
                icon={faPlus}
                color="black"
                size="big"
              />
              <IconButton
                onClickHandler={filterTaskHandler}
                icon={faBars}
                color="black"
                size="big"
              />
            </div>
          )}
          {props.selectedIds.length > 0 && (
            <IconButton
              onClickHandler={deleteTaskHandler}
              icon={faTrash}
              color="black"
              size="big"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
