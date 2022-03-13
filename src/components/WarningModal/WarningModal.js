import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import styles from "./Warning.module.scss";
import { deleteTasks } from "../../services/ApiService";
import { toast } from "react-toastify";

const WarningModal = (props) => {
  const closeClickHandler = () => {
    props.onDeleteActive(false);
  };
  const applyClickHandler = () => {
    const params = {
      ids: props.selectedIds,
    };
    deleteTasks(params).then((response) => {
      if (response.status === "success") {
        props.onSelectedIds([]);
        props.onSetToDoItems((previousValue) => {
          return previousValue.filter(
            (e) => !props.selectedIds.includes(e["_id"])
          );
        });
        toast.success("Deleted successfully!");
      }
    });
    props.onDeleteActive(false);
  };
  return (
    <Modal title="Warning" onModalCloseHandler={closeClickHandler}>
      <div className={styles["body"]}>
        Are you sure to delete selected tasks?
      </div>
      <div className={styles["btn-container"]}>
        <Button
          color="secondary"
          btnText="No"
          btnClickHandler={closeClickHandler}
        />
        <Button
          color="primary"
          btnText="Yes"
          btnClickHandler={applyClickHandler}
        />
      </div>
    </Modal>
  );
};
export default WarningModal;
