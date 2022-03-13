import { createTask } from "./../../services/ApiService";
import { toast } from "react-toastify";
import Form from "../UI/Form/Form";
import InputElement from "../UI/InputElement/InputElement";
import Modal from "../UI/Modal/Modal";
import TextField from "../UI/TextField/TextField";

const TaskAddModal = (props) => {
  const saveToDoHandler = () => {
    const enteredTaskItem = {
      title: props.enteredTitle,
      isOngoing: true,
      description: props.enteredDescription,
    };
    if (
      enteredTaskItem.title.trim().length === 0 ||
      enteredTaskItem.description.trim().length === 0
    ) {
      toast.error("A task must have title and description");
      return;
    }
    createTaskHandler(enteredTaskItem);
  };

  const createTaskHandler = (enteredTaskItem) => {
    createTask(enteredTaskItem).then((response) => {
      if (response.status === "success") {
        props.onSetToDoItems((previousToDos) => {
          return [response.data.task, ...previousToDos];
        });
        toast.success("Created successfully!");
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

  return (
    <Modal title="Add" onModalCloseHandler={props.onCloseClickHandler}>
      <Form btnText="Save" onClickHandler={saveToDoHandler}>
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
export default TaskAddModal;
