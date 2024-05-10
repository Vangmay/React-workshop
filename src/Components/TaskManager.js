import React from "react";
import { useState } from "react";
import TaskList from "./TaskList";

const defaultTasks = [
  {
    task: "Wash the dishes",
    completed: false,
  },
  {
    task: "Buy more toilet paper",
    completed: true,
  },
  {
    task: "Collect the mail",
    completed: true,
  },
];

function TaskManager() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(defaultTasks);
  function handleNewTaskSubmit(event) {
    event.preventDefault();
    setTasks([{ task: newTask, completed: false }, ...tasks]);
    setNewTask("");
  }
  function handleTaskToggle(i) {
    setTasks([
      ...tasks.slice(0, i),
      { task: tasks[i].task, completed: !tasks[i].completed },
      ...tasks.slice(i + 1),
    ]);
  }
  function handleTaskEdit(i, newTask) {
    setTasks([
      ...tasks.slice(0, i),
      { task: newTask, completed: false },
      ...tasks.slice(i + 1),
    ]);
  }

  function handleTaskDelete(i) {
    setTasks([...tasks.slice(0, i), ...tasks.slice(i + 1)]);
  }

  return (
    <main>
      <h2>Add new task</h2>
      <form>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit" onClick={handleNewTaskSubmit}>
          Add
        </button>
      </form>
      {tasks.length > 0 ? (
        <TaskList
          tasks={tasks}
          onTaskToggle={handleTaskToggle}
          onEditTask={handleTaskEdit}
          onDeleteTask={handleTaskDelete}
        />
      ) : (
        <p>There are no tasks left....</p>
      )}
    </main>
  );
}

export default TaskManager;
