import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Tasks from "./components/Tasks/Tasks";
import { getAllTasks } from "./services/ApiService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskAddModal from "./components/TaskAddModal/TaskAddModal";
import TaskEditModal from "./components/TaskEditModal/TaskEditModal";
import TaskFilterModal from "./components/TaskFilterModal/TaskFilterModal";

function App() {
  const [selectedTask, setSelectedTask] = useState({
    title: "",
    isOngoing: true,
    description: "",
  });

  const [actionType, setActionType] = useState("");

  const [todoItems, setToDoItems] = useState([]);

  const [isLoadingActive, setLoadingActive] = useState(true);

  const [enteredTitle, setEnteredTitle] = useState("");

  const [enteredDescription, setEnteredDescription] = useState("");

  const [editedFilterStatus, setEditedFilterStatus] = useState("-1");

  const [editedStatus, setEditedStatus] = useState(1);

  const [editedOrder, setEditedOrder] = useState("0");

  const statusItems = [
    {
      value: "-1",
      text: "All",
    },
    {
      value: "1",
      text: "Ongoing",
    },
    {
      value: "0",
      text: "Completed",
    },
  ];

  useEffect(() => {
    setLoadingActive(true);
    getAllTasks().then((response) => {
      setLoadingActive(false);
      setToDoItems(response.data.tasks);
    });
  }, []);

  const closeClickHandler = () => {
    setActionType("");
    setEnteredTitle("");
    setEnteredDescription("");
    setEditedStatus(1);
  };

  return (
    <div>
      <Tasks
        todoItems={todoItems}
        onSetActionType={setActionType}
        onSelectedTask={setSelectedTask}
        isLoadingActive={isLoadingActive}
        onSetToDoItems={setToDoItems}
      />
      {actionType === "Add" && (
        <TaskAddModal
          enteredTitle={enteredTitle}
          enteredDescription={enteredDescription}
          onSetToDoItems={setToDoItems}
          onSetEnteredTitle={setEnteredTitle}
          onSetEnteredDescription={setEnteredDescription}
          onSetActionType={setActionType}
          onCloseClickHandler={closeClickHandler}
        />
      )}
      {actionType === "Edit" && (
        <TaskEditModal
          statusItems={statusItems}
          enteredTitle={enteredTitle}
          enteredDescription={enteredDescription}
          editedStatus={editedStatus}
          selectedTask={selectedTask}
          todoItems={todoItems}
          onSetToDoItems={setToDoItems}
          onSetEnteredTitle={setEnteredTitle}
          onSetEnteredDescription={setEnteredDescription}
          onSetEditedStatus={setEditedStatus}
          onSetActionType={setActionType}
          onCloseClickHandler={closeClickHandler}
        />
      )}
      {actionType === "Filter" && (
        <TaskFilterModal
          statusItems={statusItems}
          editedFilterStatus={editedFilterStatus}
          selectedTask={selectedTask}
          todoItems={todoItems}
          onSetToDoItems={setToDoItems}
          onSetEditedFilterStatus={setEditedFilterStatus}
          onSetActionType={setActionType}
          onSetEditedOrder={setEditedOrder}
          editedOrder={editedOrder}
          onCloseClickHandler={closeClickHandler}
        />
      )}
      <ToastContainer
        closeButton={false}
        hideProgressBar={true}
        autoClose={2000}
        position="bottom-left"
      />
    </div>
  );
}

export default App;
