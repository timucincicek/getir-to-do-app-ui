import DateConverter from "../DateConverter/DateConverter";
import TaskItem from "../TaskItem/TaskItem";

const TaskGroup = (props) => {
  return (
    <div>
      <DateConverter date={props.date} />
      {props.tasks.map((task) => (
        <TaskItem
          task={task}
          key={task._id}
          onSelectedTask={props.onSelectedTask}
          onSetActionType={props.onSetActionType}
          onSelectedIds={props.onSelectedIds}
          selectedIds={props.selectedIds}
        ></TaskItem>
      ))}
    </div>
  );
};

export default TaskGroup;
