import Dropdown from "../UI/Dropdown/Dropdown";
import Form from "../UI/Form/Form";
import Modal from "../UI/Modal/Modal";
import { getAllTasks } from "./../../services/ApiService";
import { toast } from "react-toastify";

const TaskFilterModal = (props) => {
  const orderByItems = [
    {
      value: "0",
      text: "Date descending",
    },
    {
      value: "1",
      text: "Status ascending",
    },
    {
      value: "2",
      text: "Date ascending",
    },
    {
      value: "3",
      text: "Status desceding",
    },
  ];

  const filterToDoHandler = () => {
    const enteredFilterElements = {
      isOngoing: Boolean(props.editedFilterStatus),
      sort: getOrderValue(Number(props.editedOrder)),
    };
    if (Number(props.editedFilterStatus) === -1) {
      delete enteredFilterElements.isOngoing;
    }
    getAllTasks(enteredFilterElements).then((response) => {
      if (response.status === "success") {
        props.onSetToDoItems(response.data.tasks);
        toast.success("Filtered successfully!");
      } else {
      }
    });
    props.onCloseClickHandler();
  };

  const getOrderValue = (orderNumber) => {
    const orderValues = [
      "-createdAt",
      "+isOngoing",
      "+createdAt",
      "-isOngoing",
    ];
    return orderValues[orderNumber];
  };

  const statusChangeHandler = (statusNumber) => {
    props.onSetEditedFilterStatus(statusNumber);
  };

  const orderChangeHandler = (orderType) => {
    props.onSetEditedOrder(orderType);
  };

  return (
    <Modal title="Filter" onModalCloseHandler={props.onCloseClickHandler}>
      <Form btnText="Apply" onClickHandler={filterToDoHandler}>
        <Dropdown
          label="Status"
          options={props.statusItems}
          defaultValue={props.editedFilterStatus}
          onDropdownChange={statusChangeHandler}
        />
        <Dropdown
          label="Order by"
          options={orderByItems}
          defaultValue={props.editedOrder}
          onDropdownChange={orderChangeHandler}
        />
      </Form>
    </Modal>
  );
};

export default TaskFilterModal;
