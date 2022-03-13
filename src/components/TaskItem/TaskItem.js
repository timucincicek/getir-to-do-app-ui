import Card from "../UI/Card/Card";
import styles from "./TaskItem.module.scss";
import {
  faCircleCheck,
  faClockFour,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import IconButton from "../UI/IconButton/IconButton";
import Icon from "../UI/Icon/Icon";

const TaskItem = (props) => {
  const [isSelected, setSelected] = useState(false);

  const taskClickHandler = () => {
    setSelected((previousVal) => {
      return !previousVal;
    });
    props.onSelectedIds((previousVal) => {
      if (isSelected) {
        return previousVal.filter((item) => item !== props.task["_id"]);
      }
      return [...previousVal, props.task["_id"]];
    });
  };

  const editClickHandler = (event) => {
    event.stopPropagation();
    props.onSetActionType("Edit");
    props.onSelectedTask(props.task);
  };

  if (isSelected && props.selectedIds.length === 0) {
    setSelected(false);
  }

  return (
    <Card
      className={`${styles["task-item"]} ${isSelected && styles["selected"]} `}
      onClick={taskClickHandler}
    >
      <div className={styles["detail"]}>
        <Icon
          icon={props.task.isOngoing ? faClockFour : faCircleCheck}
          color={props.task.isOngoing ? "yellow" : "green"}
          size="big"
        />
        <div className={styles["information__container"]}>
          <h2 className={styles["title"]}>{props.task.title}</h2>
          <span className={styles["description"]}>
            {props.task.description}
          </span>
        </div>
        <IconButton
          icon={faPen}
          color="white"
          onClickHandler={editClickHandler}
          size="medium"
        />
      </div>
    </Card>
  );
};

export default TaskItem;
