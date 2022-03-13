import { useState } from "react";
import Header from "../Header/Header";
import LoadingToggle from "../LoadingToggle/LoadingToggle";
import TaskGroup from "../TaskGroup/TaskGroup";
import Card from "../UI/Card/Card";
import styles from "./Tasks.module.scss";
import WarningModal from "../WarningModal/WarningModal";

const Tasks = (props) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [isDeleteActive, setDeleteActive] = useState(false);
  const grouppedToDos = {};

  props.todoItems.forEach((item) => {
    if (!grouppedToDos[item.createdAt]) {
      grouppedToDos[item.createdAt] = [];
    }
    grouppedToDos[item.createdAt].push(item);
  });

  return (
    <div>
      <Card className={styles.tasks}>
        <Header
          totalAmount={props.todoItems.length}
          selectedIds={selectedIds}
          onSetActionType={props.onSetActionType}
          onSelectedIds={setSelectedIds}
          onDeleteActive={setDeleteActive}
        />
        <div className={styles["task-group-container"]}>
          {Object.keys(grouppedToDos).map((date) => {
            return (
              <TaskGroup
                key={date}
                date={date}
                tasks={grouppedToDos[date]}
                onSelectedTask={props.onSelectedTask}
                onSetActionType={props.onSetActionType}
                onSelectedIds={setSelectedIds}
                selectedIds={selectedIds}
              />
            );
          })}
        </div>
        {props.isLoadingActive && <LoadingToggle />}
      </Card>
      {isDeleteActive && (
        <WarningModal
          onSetToDoItems={props.onSetToDoItems}
          onDeleteActive={setDeleteActive}
          onSelectedIds={setSelectedIds}
          selectedIds={selectedIds}
        />
      )}
    </div>
  );
};

export default Tasks;
