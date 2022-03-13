import styles from "./DateConverter.module.scss";

const DateConverter = (props) => {
  const today = new Date();
  const convertedDate = new Date(Number(props.date));
  const diffTime = Math.abs(today - convertedDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const month = convertedDate.toLocaleString("en-us", { month: "short" });
  const day = convertedDate.toLocaleString("en-us", { day: "2-digit" });
  const year = convertedDate.getFullYear();

  let dateString = `${month} ${day} ${year}`;

  if (diffDays === 1) {
    dateString = "Today";
  } else if (diffDays === 2) {
    dateString = "Yesterday";
  }

  return <span className={styles["task-group-date"]}>{dateString}</span>;
};

export default DateConverter;
