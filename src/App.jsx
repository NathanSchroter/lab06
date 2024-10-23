import React, { useState } from "react";
import Task from "./components/task.jsx";
import TaskForm from "./components/taskForm.jsx";
import './App.css'; 

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); 

  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const pendingTasks = tasks.filter((task) => !task.completed).length;


  const getFilteredTasks = () => {
    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    } else if (filter === "pending") {
      return tasks.filter((task) => !task.completed);
    }
    return tasks; 
  };

  return (
    <div className="app-container">
      <h1>Daily Planner</h1>
      <TaskForm addTask={addTask} />
      <h2>{pendingTasks} tasks remaining</h2>
      
      {/* Filter buttons */}
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>
          All
        </button>
        <button onClick={() => setFilter("completed")} className={filter === "completed" ? "active" : ""}>
          Completed
        </button>
        <button onClick={() => setFilter("pending")} className={filter === "pending" ? "active" : ""}>
          Pending
        </button>
      </div>
      
      <ul className="task-list">
        {getFilteredTasks().map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleTaskStatus={toggleTaskStatus}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;


