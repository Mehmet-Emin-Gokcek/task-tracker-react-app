import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`} //if reminder is true classname = task reminder
      onDoubleClick={() => onToggle(task.id)} //double click makes reminder true and turns styling background color to green
    >
      <h3>
        {task.description}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }} //delete button next to task description
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.date}</p>
      <p>{task.location}</p>
    </div>
  );
};

export default Task;
