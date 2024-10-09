import React, { useState } from "react";
import Task from "./components/task.jsx";
import TaskForm from "./components/taskForm.jsx";
import './App.css'; 

const App = () => {
  const [tasks, setTasks] = useState([]);


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

  return (
    <div className="app-container">
      <h1>Daily Planner</h1>
      <TaskForm addTask={addTask} />
      <h2>{pendingTasks} tasks remaining</h2>
      <ul className="task-list">
        {tasks.map((task) => (
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

