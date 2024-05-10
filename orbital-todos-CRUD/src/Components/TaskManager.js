import React from "react";
import { useState } from "react";
import TaskList from "./TaskList";

function TaskManager({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState("");
  function handleNewTaskSubmit(event) {
    event.preventDefault();
    setTasks([{ task: newTask, completed: false }, ...tasks]);
    setNewTask("");
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
        <TaskList tasks={tasks} setTasks={setTasks} />
      ) : (
        <p>There are no tasks left....</p>
      )}
    </main>
  );
}

export default TaskManager;
