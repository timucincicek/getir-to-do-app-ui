import { toast } from "react-toastify";
import Form from "../UI/Form/Form";
import InputElement from "../UI/InputElement/InputElement";
import Modal from "../UI/Modal/Modal";
import TextField from "../UI/TextField/TextField";
import Dropdown from "../UI/Dropdown/Dropdown";
import { useEffect } from "react";
import { updateTask } from "./../../services/ApiService";

const TaskEditModal = (props) => {
  useEffect(() => {
    props.onSetEnteredTitle(props.selectedTask.title);
    props.onSetEnteredDescription(props.selectedTask.description);
    props.onSetEditedStatus(props.selectedTask.isOngoing);
  }, []);

  const editToDoHandler = () => {
    const enteredTaskItem = {
      title: props.enteredTitle,
      isOngoing: props.editedStatus,
      description: props.enteredDescription,
    };
    const foundToDoIndex = props.todoItems.findIndex(
      (todo) => todo._id === props.selectedTask._id
    );
    const foundItem = props.todoItems[foundToDoIndex];
    const modifiedItem = { ...foundItem, ...enteredTaskItem };
    if (JSON.stringify(foundItem) === JSON.stringify(modifiedItem)) {
      props.onCloseClickHandler();
      return;
    }
    updateTaskHandler(enteredTaskItem, foundToDoIndex);
  };

  const updateTaskHandler = (enteredTaskItem, foundToDoIndex) => {
    updateTask(props.selectedTask._id, enteredTaskItem).then((response) => {
      if (response.status === "success") {
        props.todoItems[foundToDoIndex] = response.data.task;
        props.onSetToDoItems(props.todoItems);
        toast.success("Updated successfully!");
        props.onCloseClickHandler();
      } else {
        toast.error(response.message.message);
      }
    });
  };

  const titleChangeHandler = (event) => {
    props.onSetEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    props.onSetEnteredDescription(event.target.value);
  };

  const statusChangeHandler = (statusNumber) => {
    props.onSetEditedStatus(statusNumber);
  };

  return (
    <Modal title="Edit" onModalCloseHandler={props.onCloseClickHandler}>
      <Form btnText="Save" onClickHandler={editToDoHandler}>
        <Dropdown
          label="Status"
          options={props.statusItems}
          defaultValue={props.editedStatus}
          onDropdownChange={statusChangeHandler}
        ></Dropdown>
        <InputElement
          className="w-100"
          label="Title"
          value={props.enteredTitle}
          onInputChange={titleChangeHandler}
        ></InputElement>
        <TextField
          className="w-100"
          label="Description"
          value={props.enteredDescription}
          onTextFieldChange={descriptionChangeHandler}
        ></TextField>
      </Form>
    </Modal>
  );
};
export default TaskEditModal;
