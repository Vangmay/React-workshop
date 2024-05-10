import React from "react";
import { useState } from "react";
import TaskList from "./TaskList";

function TaskManager({ tasks, setTasks }) {
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
      <TaskList tasks={tasks} setTasks={setTasks} />
    </main>
  );
}

export default TaskManager;
