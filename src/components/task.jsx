import '../components/task.css';
import React from "react";

const Task = ({ task, toggleTaskStatus, deleteTask }) => {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskStatus(task.id)}
        className="task-checkbox"
      />
      <span className="task-name">{task.name}</span>
      <button onClick={() => deleteTask(task.id)} className="task-delete-button">Remove</button>
    </li>
  );
};

export default Task;