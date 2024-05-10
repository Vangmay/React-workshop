import React from "react";
import { useState } from "react";
import TaskList from "./TaskList";

const defaultTasks = ["Wash dishes", "Collect mail", "give a react workshop"];

function TaskManager() {
  const [tasks, setTasks] = useState(defaultTasks);
  const [newTask, setNewTask] = useState();

  function handleAddTask(e) {
    e.preventDefault();
    setTasks([newTask, ...tasks]);
    setNewTask("");
  }

  return (
    <main>
      <h2>Add new tasks</h2>
      <form>
        <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button type="submit" onClick={(e) => handleAddTask(e)}>
          Add task
        </button>
      </form>
      <TaskList tasks={tasks} />
    </main>
  );
}

export default TaskManager;
