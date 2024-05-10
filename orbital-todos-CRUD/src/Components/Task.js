import React, { useState } from "react";

function Task({ task, i, tasks, setTasks }) {
  const taskDesc = task.task;
  const isCompleted = task.completed;
  const [newTask, setNewTask] = useState("");
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  function handleTaskDelete(e, i) {
    e.preventDefault();
    setTasks([...tasks.slice(0, i), ...tasks.slice(i + 1)]);
  }

  function handleTaskUpdate(i) {
    setTasks([
      ...tasks.slice(0, i),
      { task: newTask, completed: false },
      ...tasks.slice(i + 1),
    ]);
    setNewTask("");
  }

  return (
    <div>
      <tr key={i}>
        <td>{i + 1}</td>
        <td className={isTaskCompleted ? "strikeThrough" : ""}>{taskDesc}</td>
        <td>
          <input
            type="checkbox"
            checked={isTaskCompleted}
            onClick={(e) => setIsTaskCompleted(!isTaskCompleted)}
          />
          <button onClick={(e) => handleTaskDelete(e, i)}>Delete</button>
          <form aria-label="Edit task form">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleTaskUpdate(i);
                setNewTask("");
              }}
            >
              Edit
            </button>
          </form>
        </td>
      </tr>
    </div>
  );
}

export default Task;
